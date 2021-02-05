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
        let label=u.querySelector(`[aria-label=${sponsored}]`);
        let inner=u.innerText;
        if (inner.includes(suggested) || (label && label.innerText.length))
        {
            //u.remove();
            u.style.opacity=0.15;
        }
    }
}