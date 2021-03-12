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
let spons="SSaepnatSommnpogdsnosroeredtdt";

window.addEventListener('scroll', () => {
    setTimeout(hideAds);
});

function hideAds(){
    let feed=document.querySelector(`[role="feed"]`);
    let units=feed.querySelectorAll(`[data-pagelet^="FeedUnit"]`);
    for(let u of units){
        //let label=u.querySelector(`[aria-label=${sponsored}]`);
        let labels=u.querySelectorAll("span a");
        let button=u.querySelector(`[role=button]`);
        let inner=u.innerText;
        //(label && label.innerText.length)
        if (inner.includes(suggested) || (labels[labels.length-1].innerText.replace(/\s/g,'')==spons) || (button.innerText.includes(sponsored)))
        {
            u.remove();
            //u.style.opacity=0.1;
        }
    }
}
