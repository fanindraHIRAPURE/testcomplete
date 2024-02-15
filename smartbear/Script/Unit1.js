function Flipkart()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://www.flipkart.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'textboxQ' control.
  Aliases.browser.pageOnlineShoppingSiteForMobiles.headerSearchIcon.formSearchIcon.textboxQ.Click();
  //Sets the text 'laptops' in the 'textboxQ' text editor.
  Aliases.browser.pageOnlineShoppingSiteForMobiles.headerSearchIcon.formSearchIcon.textboxQ.SetText("laptops");
  //Clicks the 'buttonSearchForProductsBrandsAnd' button.
  Aliases.browser.pageOnlineShoppingSiteForMobiles.headerSearchIcon.formSearchIcon.buttonSearchForProductsBrandsAnd.ClickButton();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageOnlineShoppingSiteForMobiles2.Wait();
  //Checks whether the 'contentText' property of the Aliases.browser.pageOnlineShoppingSiteForMobiles2.FindElement("//div[2]//a//div[contains(@class, '_4rR01T')]") object equals 'Acer Extensa (2023) AMD Ryzen 5 Quad Core 7520U - (8 GB/512 GB SSD/Windows 11 Home) EX215-23 Thin and ...'.
  aqObject.CheckProperty(Aliases.browser.pageOnlineShoppingSiteForMobiles2.FindElement("//div[2]//a//div[contains(@class, '_4rR01T')]"), "contentText", cmpEqual, "Acer Extensa (2023) AMD Ryzen 5 Quad Core 7520U - (8 GB/512 GB SSD/Windows 11 Home) EX215-23 Thin and ...");
  //Clicks the 'panel' control.
  Aliases.browser.pageOnlineShoppingSiteForMobiles2.linkAddToCompare.panel.Click();
  //Clicks the 'buttonAddToCart' button.
  Aliases.browser.pageItm1aa32978aff04.textnodeAddToCart.textnodeAddToCart2.buttonAddToCart.ClickButton();
}