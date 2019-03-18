const { client } = require('nightwatch-cucumber')
const { defineSupportCode } = require('cucumber')

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I open the Address Manager home page$/, () => {
    const businesspartner = client.page.businesspartner()
	console.info (businesspartner.url())
    return businesspartner
      .navigate()
      .waitForElementVisible('@body')
  })
Then(/^the heading "(.*?)" is shown$/, (titleValue) => {
    const businesspartner = client.page.businesspartner()
    return businesspartner.navigate().waitForElementVisible('@title')
        .expect.element('@title').text.to.equal(titleValue)
  })
})