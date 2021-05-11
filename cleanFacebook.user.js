// ==UserScript==
// @name         Clean facebook
// @namespace    http://tampermonkey.net
/// @version      0.1
// @description  try to take over the world!
// @author       Yaro96
// @match        *://www.facebook.com/*
// @grant        none
// ==/UserScript==
let suggested="Suggested for You";
let sponsored="Sponsored";

window.addEventListener('scroll', () => {
    setTimeout(hideAds);
});

function hideAds(){
    let feed=document.querySelector(`[role="feed"]`);
    let units=feed.querySelectorAll(`[data-pagelet^="FeedUnit"]`);
    for(let u of units){
        //let label=u.querySelector(`[aria-label=${sponsored}]`);
        let label=u.querySelectorAll("span span a span span")[1]?.innerText.replace(/\s/g,'');
        let button=u.querySelector(`[role=button]`);
        let inner=u.innerText;
        //(label && label.innerText.length)
        if (inner.includes(suggested) || stringContainLetters(label ? label : "", sponsored) || (button.innerText.includes(sponsored)))
        {
            //u.remove();
            u.style.opacity=0.1;
        }
    }
}


function stringContainLetters(source, check) {
  return check.split('').every(function(letter) {
      return source.indexOf(letter) != -1;
    });
}
