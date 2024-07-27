const cheerio = require('cheerio');
const axios = require('axios');

const pupeteer = require('puppeteer');

async function webscrappingHTML(){
    try {
        const response = await axios.get('https://targetinternet.com/resources/what-is-data-scraping-and-how-can-you-use-it');

        const html = response.data;

        const $ = cheerio.load(html);

        const title = $('.card-resource-body h3').text();

        console.log(`Title: ${title}`);
    } catch (error) {
        console.error('Error fetching the URL:', error)
    }
}

webscrappingHTML();

async function webscrapping(){
    const browser = await pupeteer.launch({headless: false});
    const page = await browser.newPage();

   
    console.log(page);
    await browser.close();
}

// webscrapping()

// const { chromium } = require('playwright');

// (async () => {
//   const browser = await chromium.launch();
//   const page = await browser.newPage();
//   await page.goto('https://targetinternet.com/resources/what-is-data-scraping-and-how-can-you-use-it');

//   const title = await page.title();
//   console.log(`Title: ${title}`);

//   const heading = await page.$$eval('.hs-eu-cookie-disclaimer', el => el.textContent);
//   console.log(`Heading: ${heading}`);

//   await browser.close();
// })();


