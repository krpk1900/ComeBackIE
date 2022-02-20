let icon = "IE";
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request.message);
  icon = request.message;
});

// ここからスクロール中の処理
window.addEventListener('scroll', function(){
  console.log(icon);
  //console.log(chrome.extension.getURL("/test.png"))
  let g_elements = document.getElementsByTagName('g');
  for(let g_element of g_elements){
    if(g_element.innerHTML == '<path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>'){
      // 塗りつぶされていないハートのとき
      let good_element = g_element.parentNode.parentNode.parentNode.parentNode.parentNode
      let num
      try {
        num = parseInt(g_element.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.innerHTML);
      } catch {
        num = 0
      }
      let icon_element = document.createElement('div');
      let group = document.createElement('div');
      let num_element = document.createElement('div');
      let toggle_plus = true;
      icon_element.classList.add(icon);
      icon_element.addEventListener('click', e => {
        icon_element.classList.toggle('is_animating');
        icon_element.classList.toggle('on');
        num_element.classList.toggle('num_colored');
        if(toggle_plus) {
          num += 1;
          num_element.innerHTML = num;
          toggle_plus = false;
        } else {
          num -= 1;
          num_element.innerHTML = num;
          toggle_plus = true;
        }
        e.stopPropagation();
      }, true);
      num_element.innerHTML = num;
      group.appendChild(icon_element);
      group.appendChild(num_element);
      group.classList.add('flex');
      num_element.classList.add('num');
      good_element.replaceWith(group);
    }else if(g_element.innerHTML == '<path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>'){
      // 塗りつぶされたハートのとき
      let good_element = g_element.parentNode.parentNode.parentNode.parentNode.parentNode
      let num
      try {
        num = parseInt(g_element.parentNode.parentNode.nextElementSibling.firstElementChild.firstElementChild.firstElementChild.innerHTML);
      } catch {
        num = 0
      }
      let icon_element = document.createElement('div');
      let group = document.createElement('div');
      let num_element = document.createElement('div');
      let toggle_plus = false;
      icon_element.classList.add(icon, 'on', 'is_animating');
      num_element.classList.add('num_colored');
      icon_element.addEventListener('click', e => {
        icon_element.classList.toggle('is_animating');
        icon_element.classList.toggle('on');
        num_element.classList.toggle('num_colored');
        if(toggle_plus) {
          num += 1;
          num_element.innerHTML = num;
          toggle_plus = false;
        } else {
          num -= 1;
          num_element.innerHTML = num;
          toggle_plus = true;
        }
        e.stopPropagation();
      }, true);
      num_element.innerHTML = num;
      group.appendChild(icon_element);
      group.appendChild(num_element);
      group.classList.add('flex');
      num_element.classList.add('num');
      good_element.replaceWith(group);
    }
  };
});
