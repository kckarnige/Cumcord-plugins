import { log } from '@cumcord/utils/logger';
// Thanks to creatable for helping out :)
const plugid = "serverlogos";
const container_class = "container-1-ERn5";
const headid = "serverlogos-logo";

var oldURL = "";
var currentURL = window.location.href;
var clearURLChange = () => {};
function checkURLchange(currentURL) {
    if (currentURL != oldURL) {
        oldURL = currentURL;
    }

    oldURL = window.location.href;
    let timeoutID = setTimeout(() => {
        checkURLchange(window.location.href);
        if (!document.getElementsByClassName(container_class)[0].hasAttribute('data-guild-id')) {
          document.getElementsByClassName(container_class)[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
          log("[CSL] Injected attribute!");
        }
    }, 1);
    
    clearURLChange = () => clearTimeout(timeoutID);
}

var injectStyle = function () {
    const style = document.createElement('style');
    style.textContent = "@import url('https://kckarnige.is-a.dev/custom-server-logos/base.css');";
    style.setAttribute('id', plugid);
    document.head.append(style);
    document.getElementsByClassName(container_class)[0].setAttribute('id', headid);
    log("[CSL] Injected CSS!")
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
    clearURLChange();
    document.getElementById(headid).removeAttribute("data-guild-id");
    document.getElementById(headid).removeAttribute("id");
    log("[CSL] Successfully disabled!")
  }
}
