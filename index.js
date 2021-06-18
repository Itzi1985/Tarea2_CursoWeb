const puppeteer = require('puppeteer')  
async function pruebaDeNavegador()
{
	const browser =  await puppeteer.launch({headless: false, slowMo:500 })
	const page = await browser.newPage()
	await page.goto ('http://example.com')
        await page.waitForSelector('h1')
	await browser.close()
}
pruebaDeNavegador()