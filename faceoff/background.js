chrome.browserAction.onClicked.addListener(function(tab) {
    if(tab.url.indexOf("facebook.com") == -1){ // if facebook is not focused
        chrome.tabs.create({url: "http://facebook.com"}, execute); // open a new tab
    }else{
        execute();
    }
});

function execute(){
    chrome.tabs.executeScript(null, {file: "contentscript.js"});
}