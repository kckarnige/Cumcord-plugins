const plugid = "serverlogos";

/// Reverted due to the injection not functioning
var oldURL = "";
var currentURL = window.location.href;
function checkURLchange(currentURL) {
    if (currentURL != oldURL) {
        oldURL = currentURL;
    }

    oldURL = window.location.href;
    setTimeout(function () {
        checkURLchange(window.location.href);
        document.getElementsByClassName("container-3w7J-x")[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
    }, 1);
}

var injectStyle = function () {
    const style = document.createElement('style');
    style.textContent = "@import url('https://kckarnige.is-a.dev/custom-server-logos/base.css');";
    style.setAttribute('id', plugid);
    document.head.append(style);
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
    document.getElementById.removeAttribute("data-guild-id");
  }
}
