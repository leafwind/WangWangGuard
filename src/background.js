//note: localStorage only supports Strings

var blackList;

$.ajax({
    url: 'blacklist.json',
    async: false,
    dataType: 'json'
})
.done(function( json ) {
    blackList = json;
})
.fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.error(err);
});

localStorage["lenList"] = blackList.length;

var b = new Array(blackList.length);
for (var i = 0; i < blackList.length; i++) { b[i] = 1; }
localStorage["urlSwitch"] = JSON.stringify(b);

//callback
var listener = function(details)
{
    if (details.url.indexOf("blog.chinatimes.com") !== -1) {
        return {};
    }

    var urlSwitch = JSON.parse(localStorage["urlSwitch"]);
    for (var i = 0; i < localStorage["lenList"]; ++i)
    {
        if ( (urlSwitch[i] == 1) && (details.url.search(new RegExp(blackList[i]["url"])) > -1) ) //pos
        {
            localStorage["blockedURL"] = details.url;
            console.log(details.url + " matched " + i + " : " + RegExp(blackList[i]["url"]) + " : " + details.url.search(new RegExp(blackList[i]["url"])));
            //return { cancel: true };
            return { redirectUrl : chrome.runtime.getURL("redirect.html")};
        }
    }
    return {};
};
//console.log(chrome.runtime.getURL("options.html"));

var opt_extraInfoSpec = ["blocking"]; //synchronous

chrome.webRequest.onBeforeRequest.addListener(
    listener, { urls: ["<all_urls>"] }, opt_extraInfoSpec);

/* onBeforeRedirect event: when a URL in black list detected */

function plusLocalStorageCount() {
    var count = parseInt(localStorage["count"],10) || 0;
    count = count + 1;
    localStorage["count"] = count;
}

function checkBlocked(details) {
    if(details.redirectUrl == chrome.runtime.getURL("redirect.html")) {
        plusLocalStorageCount();
    }
}

chrome.webRequest.onBeforeRedirect.addListener(
    checkBlocked, { urls: ["<all_urls>"] }
);

function promptNewVersion(details) {
    if (details.reason == "install" || details.reason == "update") {
        chrome.tabs.create({url: "options.html"});
    }
}

chrome.runtime.onInstalled.addListener( promptNewVersion );
