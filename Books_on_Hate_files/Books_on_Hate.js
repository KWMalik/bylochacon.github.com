// Created by iWeb 2.0.4 local-build-20100521

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_1:new IWStrokeParts([{rect:new IWRect(-1,1,2,266),url:'Books_on_Hate_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Books_on_Hate_files/stroke_1.png'},{rect:new IWRect(1,-1,141,2),url:'Books_on_Hate_files/stroke_2.png'},{rect:new IWRect(142,-1,2,2),url:'Books_on_Hate_files/stroke_3.png'},{rect:new IWRect(142,1,2,266),url:'Books_on_Hate_files/stroke_4.png'},{rect:new IWRect(142,267,2,2),url:'Books_on_Hate_files/stroke_5.png'},{rect:new IWRect(1,267,141,2),url:'Books_on_Hate_files/stroke_6.png'},{rect:new IWRect(-1,267,2,2),url:'Books_on_Hate_files/stroke_7.png'}],new IWSize(143,268)),stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Books_on_Hate_files/Books_on_HateMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');detectBrowser();Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
