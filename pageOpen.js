module.exports = async (x, lib) => {
  const echo = lib.echo;
  const page = lib.page;
  const input = lib.input;
  const url = input.url;

  echo.log('----- pageOpen -----');

  await echo.log(` ...opening page "${url}"`);
  await page.goto(url, { referer: '' });


  const btn_EH = await page.waitForSelector('button#onetrust-accept-btn-handler');
  if (btn_EH) {
    await btn_EH.click();
    await echo.log('clicked button "ACCETTA TUTTI I COOKIE"');
  }


  return x;
};
