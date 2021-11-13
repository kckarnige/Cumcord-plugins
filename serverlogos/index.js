/// Courtesy of b1nzy :)
import { injectCSS } from "@cumcord/patcher";

let removeStyle;
let clearURLChange = () => {};
let oldURL = "";
let currentURL = window.location.href;

function checkURLchange(currentURL) {
    if (currentURL != oldURL) {
        oldURL = currentURL;
    }

    oldURL = window.location.href;
    let timeoutID = setTimeout(() => {
        checkURLchange(window.location.href);
        document.getElementsByClassName("container-3w7J-x")[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
    }, 1);

    clearURLChange = () => clearTimeout(timeoutID);
}

export default {
  onLoad() {
    removeStyle = injectCSS(`@import url('https://kckarnige.is-a.dev/custom-server-logos/base.css');`);
    checkURLChange();
  },
  onUnload() {
    clearURLChange();
    removeStyle();
  }
}
