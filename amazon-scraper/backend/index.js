import express from 'express';
import axios from 'axios';
import { JSDOM } from 'jsdom';

const app = express();
const PORT = 3000;

async function scrapeAmazon(keyword) {
  try {
    const url = `https://www.amazon.com/s?k=${encodeURIComponent(keyword)}`;
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      'Accept-Language': 'en-US,en;q=0.9'
    };
    const response = await axios.get(url, { headers });
    const dom = new JSDOM(response.data);
    const document = dom.window.document;

    const products = [];
    const items = document.querySelectorAll('[data-component-type="s-search-result"]');
    items.forEach(item => {
      const title = item.querySelector('h2 span')?.textContent || 'No title';
      const rating = item.querySelector('.a-icon-alt')?.textContent.split(' ')[0] || 'No rating';
      const reviews = item.querySelector('[aria-label$="ratings"]')?.textContent || 'No reviews';
      const image = item.querySelector('img')?.src || '';

      products.push({ title, rating, reviews, image });
    });

    return products;
  } catch (err) {
    console.error(err);
    throw new Error('Failed to scrape Amazon');
  }
}

app.get('/api/scrape', async (req, res) => {
  const keyword = req.query.keyword;
  if (!keyword) return res.status(400).json({ error: 'Keyword query param is required' });

  try {
    const data = await scrapeAmazon(keyword);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
