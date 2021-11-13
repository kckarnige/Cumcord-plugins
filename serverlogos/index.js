const plugid = "serverlogos";
const container_class = "container-3w7J-x";
const headid = "serverlogos-logo";

var oldURL = "";
var currentURL = window.location.href;
function checkURLchange(currentURL) {
    if (currentURL != oldURL) {
        oldURL = currentURL;
    }

    oldURL = window.location.href;
    setTimeout(function () {
        checkURLchange(window.location.href);
        document.getElementsByClassName(container_class)[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
    }, 1);
}

var injectStyle = function () {
    const style = document.createElement('style');
    style.textContent = "@import url('https://kckarnige.is-a.dev/custom-server-logos/base.css');";
    style.setAttribute('id', plugid);
    document.head.append(style);
    document.getElementsByClassName(container_class)[0].setAttribute('id', headid);
};


var removeStyle = function () {
    var ecsl = document. getElementById(plugid);
    ecsl. parentNode. removeChild(ecsl);
    
};

export default {
  onLoad() {
    injectStyle();
    checkURLchange();
  },
  onUnload() {
    removeStyle();
    checkURLchange(null);
    document.getElementById(headid).removeAttribute("data-guild-id");
    document.getElementById(headid).removeAttribute("id");
  }
}
