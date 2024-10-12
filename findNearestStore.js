module.exports = async (x, lib) => {
  const { echo, ff, page, input } = lib;
  const address = input.address;

  echo.log('----- findNearestStore -----');

  await echo.log(`type address "${address}"`);
  await page.type('input#googleInputEntrypageLine1', address, { delay: 30 });

  await echo.log('click button "Verifica"');
  await page.click('main > div > form.google-input > button.submitButton');

  await ff.delay(2100); // wait after click to open new page

  const btn_EH = await page.waitForSelector(`div.uk-card-body > button[onclick="GoogleUtils.loadStores('ORDER_AND_COLLECT')"]`, { timeout: 8000 });
  await btn_EH.click();

  await ff.delay(2100); // wait after click to open new page

  // select the first store
  const btn_EH2 = await page.waitForSelector(`ul.uk-list > li:first-child`, { timeout: 8000 });
  await btn_EH2.click();
  await ff.delay(1300);
  // await page.click('div.btn-conferma-pdv > button');


  return x;
};
