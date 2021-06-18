const puppeteer = require('puppeteer');
const chai = require('chai');

describe('Mi Primer Prueba abriendo un Navegador', async () => {

    it('Prueba con Clic en el botón', async () =>  {
        const browser = await puppeteer.launch({headless: false, slowMo: 500 })
        const page = await browser.newPage();
        await page.goto('http://automationpractice.com/index.php')
        await page.click("a[title='Women']");
        await browser.close()
    })
    it('Prueba usando CSS', async () =>  {
        const browser = await puppeteer.launch({headless: false, slowMo: 500})
        const page = await browser.newPage();
        await page.goto('http://automationpractice.com/index.php');
        await page.click("ul>li>a:first-child");
        await browser.close()

    })
    it('Prueba usando XPATH', async () =>  {
        const browser = await puppeteer.launch({headless: false, slowMo: 500});
        const page = await browser.newPage();
        await page.goto('http://automationpractice.com/index.php');
        await page.waitForTimeout(2500)
        const prueba3 = await page.waitForXPath('//*[@id="block_top_menu"]/ul/li[3]/a')
        prueba3.click()
        await page.waitForXPath('//*[@id="block_top_menu"]/ul/li[3]/a')
        await page.waitForTimeout(2500)
        await browser.close()
    })
})
