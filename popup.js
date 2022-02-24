let star_elements = document.getElementsByClassName("star");
let star_element = star_elements[0]
star_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : ["star", "num_star"]});
  });
});

let IE_elements = document.getElementsByClassName("IE");
let IE_element = IE_elements[0]
IE_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : ["IE", "num_IE"]});
  });
});

let good_elements = document.getElementsByClassName("good");
let good_element = good_elements[0]
good_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : ["good", "num_good"]});
  });
});

let snow_elements = document.getElementsByClassName("snow");
let snow_element = snow_elements[0]
snow_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : ["snow", "num_snow"]});
  });
});

let moon_elements = document.getElementsByClassName("moon");
let moon_element = moon_elements[0]
moon_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : ["moon", "num_moon"]});
  });
});

let heart_elements = document.getElementsByClassName("heart");
let heart_element = heart_elements[0]
heart_element.addEventListener('click', function() {
  chrome.tabs.query({active : true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {message : ["heart", "num_heart"]});
  });
});

let icon_elements = document.getElementsByClassName('icon');

icon_elements[0].addEventListener('click', e => {
  icon_elements[0].classList.add('is_animating');
  icon_elements[0].classList.add('on');
  icon_elements[1].classList.remove('is_animating');
  icon_elements[1].classList.remove('on');
  icon_elements[2].classList.remove('is_animating');
  icon_elements[2].classList.remove('on');
  icon_elements[3].classList.remove('is_animating');
  icon_elements[3].classList.remove('on');
  icon_elements[4].classList.remove('is_animating');
  icon_elements[4].classList.remove('on');
  icon_elements[5].classList.remove('is_animating');
  icon_elements[5].classList.remove('on');
}, true);

icon_elements[1].addEventListener('click', e => {
  icon_elements[0].classList.remove('is_animating');
  icon_elements[0].classList.remove('on');
  icon_elements[1].classList.add('is_animating');
  icon_elements[1].classList.add('on');
  icon_elements[2].classList.remove('is_animating');
  icon_elements[2].classList.remove('on');
  icon_elements[3].classList.remove('is_animating');
  icon_elements[3].classList.remove('on');
  icon_elements[4].classList.remove('is_animating');
  icon_elements[4].classList.remove('on');
  icon_elements[5].classList.remove('is_animating');
  icon_elements[5].classList.remove('on');
}, true);

icon_elements[2].addEventListener('click', e => {
  icon_elements[0].classList.remove('is_animating');
  icon_elements[0].classList.remove('on');
  icon_elements[1].classList.remove('is_animating');
  icon_elements[1].classList.remove('on');
  icon_elements[2].classList.add('is_animating');
  icon_elements[2].classList.add('on');
  icon_elements[3].classList.remove('is_animating');
  icon_elements[3].classList.remove('on');
  icon_elements[4].classList.remove('is_animating');
  icon_elements[4].classList.remove('on');
  icon_elements[5].classList.remove('is_animating');
  icon_elements[5].classList.remove('on');
}, true);

icon_elements[3].addEventListener('click', e => {
  icon_elements[0].classList.remove('is_animating');
  icon_elements[0].classList.remove('on');
  icon_elements[1].classList.remove('is_animating');
  icon_elements[1].classList.remove('on');
  icon_elements[2].classList.remove('is_animating');
  icon_elements[2].classList.remove('on');
  icon_elements[3].classList.add('is_animating');
  icon_elements[3].classList.add('on');
  icon_elements[4].classList.remove('is_animating');
  icon_elements[4].classList.remove('on');
  icon_elements[5].classList.remove('is_animating');
  icon_elements[5].classList.remove('on');
}, true);

icon_elements[4].addEventListener('click', e => {
  icon_elements[0].classList.remove('is_animating');
  icon_elements[0].classList.remove('on');
  icon_elements[1].classList.remove('is_animating');
  icon_elements[1].classList.remove('on');
  icon_elements[2].classList.remove('is_animating');
  icon_elements[2].classList.remove('on');
  icon_elements[3].classList.remove('is_animating');
  icon_elements[3].classList.remove('on');
  icon_elements[4].classList.add('is_animating');
  icon_elements[4].classList.add('on');
  icon_elements[5].classList.remove('is_animating');
  icon_elements[5].classList.remove('on');
}, true);

icon_elements[5].addEventListener('click', e => {
  icon_elements[0].classList.remove('is_animating');
  icon_elements[0].classList.remove('on');
  icon_elements[1].classList.remove('is_animating');
  icon_elements[1].classList.remove('on');
  icon_elements[2].classList.remove('is_animating');
  icon_elements[2].classList.remove('on');
  icon_elements[3].classList.remove('is_animating');
  icon_elements[3].classList.remove('on');
  icon_elements[4].classList.remove('is_animating');
  icon_elements[4].classList.remove('on');
  icon_elements[5].classList.add('is_animating');
  icon_elements[5].classList.add('on');
}, true);
