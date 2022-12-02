var root = document.querySelector(':root');
var lightModeV = getCookie("lightMode");

function Main() {
    if (lightModeV == "false")
        darkMode();
    else  if (lightModeV == "true")
        lightMode();
    else if (lightModeV == "")
    {
        lightModeV = "true";
        setCookie("lightMode", lightModeV, 70000, "/");
    }
}

Main()

function changeLightMode() {
    if (lightModeV == "true")
    {
        lightModeV = "false";
        darkMode();
    }
    else if (lightModeV == "false")
    {
        lightModeV = "true";
        lightMode();
    }

    setCookie("lightMode", lightModeV, 70000, "/");
}

function darkMode() {
    root.style.setProperty('--text-c', 'white');
    root.style.setProperty('--background-c', 'black');
    root.style.setProperty('--bacground-nav-c', 'rgb(53, 53, 53)');
    root.style.setProperty('--text-nav-c', 'rgb(107, 107, 107)');
    root.style.setProperty('--background-footer-c', 'rgb(24, 23, 23)');
    root.style.setProperty('--text-footer-c', 'white');
    root.style.setProperty('--background-button-mode-c', 'rgb(70, 70, 70)');
    root.style.setProperty('--background-button-mode-i', 'url(/style/Images/Logos/LightMode.png)');
}

function lightMode() {
    root.style.setProperty('--text-c', 'black');
    root.style.setProperty('--background-c', 'white');
    root.style.setProperty('--bacground-nav-c', 'rgb(85, 85, 85)');
    root.style.setProperty('--text-nav-c', 'rgb(204, 204, 204)');
    root.style.setProperty('--background-footer-c', 'rgb(24, 23, 23)');
    root.style.setProperty('--text-footer-c', 'white');
    root.style.setProperty('--background-button-mode-c', 'rgb(143, 143, 143)');
    root.style.setProperty('--background-button-mode-i', 'url(/style/Images/Logos/DarkMode.png)');
}

function getCookie(cookieName) {
    let name = cookieName + "=";
    let cookie = decodeURIComponent(document.cookie);

    let ca = cookie.split(';');

    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function setCookie(name, value, expires, path, domain){
    cookieStr = `${name}=${escape(value)};`;

    if(expires) {
        expires = Date.now() * expires;
        cookieStr += `expires=${expires};`;
    }

    if(path) {
        cookieStr += `path=${path};`;
    }

    if (domain) {
        cookieStr += `domain=${domain};`;
    }

    document.cookie = `${cookieStr} secure`;
}