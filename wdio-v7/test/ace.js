//https://content.werally.com/


const AxeBuilder = require('@axe-core/webdriverio').default;

describe('Accessibility Test', () => {
        it('should get the accessibility results from a page', async() => {
			const builder = new AxeBuilder({ client: browser })
			
			await browser.url('https://content.werally.com/')
			const result = await builder.analyze()
			console.log('got', result)
        })
})