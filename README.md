# Amazon Product Scraper

## Overview
A simple web app to scrape Amazon product listings from the first page of search results for a given keyword.

## Backend (Bun)
- Uses Express for API routing
- Axios to fetch Amazon page
- JSDOM to parse HTML and extract product data

## Frontend
- HTML/CSS/JS using Vite or just direct browser usage
- Input for keyword and results display

## Setup Instructions

### Prerequisites
- [Bun](https://bun.sh/) installed

### Run the Backend
```bash
cd backend
bun install express axios jsdom
bun run index.js
