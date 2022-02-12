let star_elements = document.getElementsByClassName("star");
let star_element = star_elements[0]
star_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : "star"});
  });
});

let IE_elements = document.getElementsByClassName("IE");
let IE_element = IE_elements[0]
IE_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : "IE"});
  });
});

let good_elements = document.getElementsByClassName("good");
let good_element = good_elements[0]
good_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : "good"});
  });
});

let snow_elements = document.getElementsByClassName("snow");
let snow_element = snow_elements[0]
snow_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : "snow"});
  });
});

let moon_elements = document.getElementsByClassName("moon");
let moon_element = moon_elements[0]
moon_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : "moon"});
  });
});
