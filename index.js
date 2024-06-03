let switchMode = document.getElementById("switchMode");
let theme = document.getElementById("theme");

// Проверяем, сохранена ли выбранная тема в localStorage
const savedTheme = localStorage.getItem('theme');

// Если выбранная тема сохранена, применяем её
if (savedTheme) {
    theme.href = savedTheme;
} else {
    // Проверяем текущую тему устройства
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // Если текущая тема темная, применяем темный стиль
        theme.href = "dark-mode.css";
    } else {
        // Если текущая тема светлая, применяем стандартный стиль
        theme.href = "web.css";
    }
}

switchMode.onclick = function(){
    if (theme.getAttribute("href") === "web.css"){
        theme.href = "dark-mode.css";
    } else {
        theme.href = "web.css";
    }
    
    // Сохраняем выбранную тему в localStorage
    localStorage.setItem('theme', theme.href);
}


document.addEventListener("DOMContentLoaded", function(event) {
    // Скрываем анимацию и показываем контент после загрузки страницы
    document.querySelector('.loader-wrapper').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  });
  /* ANIMATION */

let option= {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback= function(entries, observer) {
  entries.forEach(entry =>{
     if (entry.isIntersecting){
        console.log('find', entry);
        entry.target.classList.add('active');
     }
  });
}
let observer = new IntersectionObserver(callback, option);

let target =  document.querySelectorAll('.anim')
target.forEach(target => {
    observer.observe(target);
});

