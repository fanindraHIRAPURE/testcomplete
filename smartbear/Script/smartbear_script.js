function Test1()
{
  Browsers.Item(btChrome).Navigate("https://bearstore-testsite.smartbear.com/login?returnUrl=%2F");
  Aliases.browser.BrowserWindow.Maximize();
  Aliases.browser.pageShopLogin.sectionContent.textboxUsernameoremail.Click();
  Aliases.browser.pageShopLogin.sectionContent.textboxUsernameoremail.SetText("fanindra63");
  Aliases.browser.pageShopLogin.sectionContent.passwordboxPassword.Click();
  Aliases.browser.pageShopLogin.sectionContent.passwordboxPassword.SetText(Project.Variables.Password1);
  Aliases.browser.pageShopLogin.sectionContent.passwordboxPassword.Keys("[Enter]");
  Aliases.browser.pageBearstoreTestsiteSmartbearCo.Wait();
  Aliases.browser.pageBearstoreTestsiteSmartbearCo.sectionContent.articleJackets.linkShowProductsInCategory.imageShowProductsInCategory.Click();
  //Aliases.browser.pageBearstoreTestsiteSmartbearCo.sectionContent.articleJackets.linkShowProductsInCategory.imageShowProductsInCategory.Click();
  Aliases.browser.pageJackets.Wait();
  Aliases.browser.pageJackets.sectionContent.linkKanukaPointJacketM.imagePictureOfKanukaPointJacketM.Click();
  Aliases.browser.pageKanukaPointJacketM.Wait();
  aqObject.CheckProperty(Aliases.browser.pageKanukaPointJacketM.sectionContent.articleKanukaPointJacketM.linkJackWolfskinKanukaPoint1Png.imageKanukaPointJacketM, "VisibleOnScreen", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageKanukaPointJacketM.sectionContent.articleKanukaPointJacketM.linkJackWolfskinKanukaPoint1Png.imageKanukaPointJacketM, "Visible", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageKanukaPointJacketM.sectionContent.articleKanukaPointJacketM.linkJackWolfskinKanukaPoint1Png.imageKanukaPointJacketM, "contentText", cmpEqual, "");
  Aliases.browser.pageKanukaPointJacketM.sectionContent.articleKanukaPointJacketM.linkAddToCart.textnode.Click();
  Aliases.browser.pageKanukaPointJacketM.Wait();
  Aliases.browser.pageKanukaPointJacketM.asideOffcanvasCart.linkCheckout.textnodeCheckout.Click();
  Aliases.browser.pageBillingaddress.Wait();
  Aliases.browser.pageBillingaddress.sectionContent.fieldsetSelectBillingAddressunde.buttonBillToThisAddress.ClickButton();
  Aliases.browser.pageShippingaddress.Wait();
  Aliases.browser.pageShippingaddress.sectionContent.fieldsetSelectShippingAddressund.buttonShipToThisAddress.ClickButton();
  Aliases.browser.pageShippingmethod.Wait();
  Aliases.browser.pageShippingmethod.sectionContent.buttonNext.ClickButton();
  Aliases.browser.pagePaymentmethod.Wait();
  Aliases.browser.pagePaymentmethod.sectionContent.buttonNext.ClickButton();
  Aliases.browser.pageConfirm.Wait();
  Aliases.browser.pageConfirm.sectionContent.buttonConfirm.ClickButton();
}