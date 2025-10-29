const cheerio = require('cheerio');
const axios = require('axios');

const pupeteer = require('puppeteer');

const { JSDOM } = require('jsdom')

async function webscrappingHTML() {
    try {
        const response = await axios.get('https://cash.app/payments/2jmdhki5lo6u12bd8n632e4b4/receipt?utm_source=activity-item');


        const html = response.data;


        const $ = cheerio.load('');

        // const title = $('.css-1orwyvt').innerText;

        console.log(`Title: ${$}`);
    } catch (error) {
        console.error('Error fetching the URL:', error)
    }
}

// webscrappingHTML();

async function webscrapping() {
    const browser = await pupeteer.launch({ headless: true });

    const page = await browser.newPage();

    await page.goto('https://cash.app/payments/2jmdhki5lo6u12bd8n632e4b4/receipt?utm_source=activity-item', { waitUntil: 'networkidle2' });

    // const names = await page.evaluate(() => {
    //     return Array.from(document.querySelectorAll(".css-1d27vwg")).map(x => x.innerHTML)
    // })



    const data = await page.evaluate(() => {
        // Select all <dt> elements
        const terms = document.querySelectorAll('dt');
        // Create an empty object to hold key-value pairs
        const completestatus = document.querySelector('.css-4jn8d9')?.innerText || "";
        const paymentto = document.querySelector('.css-43zke3')?.innerText || "";
        let result = {};

        // Loop through each <dt> element and get the corresponding <dd> element
        terms.forEach(term => {
            const key = term.innerText.trim();
            const value = term.nextElementSibling ? term.nextElementSibling.innerText.trim() : '';
            result[key] = value;
        })

        result.paymentstatus = completestatus;
        result.paymentto = paymentto

        return result;

    })


    await browser.close();

    return data;
}

webscrapping().then((res) => console.log(res))
.catch((Err) => console.log(Err))

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


async function scrappingwithJS() {
    const res = await fetch('https://cash.app/payments/90iq8vxwey085poooalbgoxpy/receipt?utm_source=activity-item');
    const html = await res.text();

    const dom = new JSDOM(html);
    const document = dom.window.document;
    const terms = document.querySelectorAll('dt');
    // Create an empty object to hold key-value pairs
    const completestatus = document.querySelector('.css-4jn8d9')?.innerText || "";
    const paymentto = document.querySelector('.css-43zke3')?.innerText || "";
    let result = {};

    // Loop through each <dt> element and get the corresponding <dd> element
    terms.forEach(term => {
        const key = term.innerText.trim();
        const value = term.nextElementSibling ? term.nextElementSibling.innerText.trim() : '';
        result[key] = value;
    })

    result.paymentstatus = completestatus;
    result.paymentto = paymentto

    console.log(result);

    return result;
}


// scrappingwithJS()
