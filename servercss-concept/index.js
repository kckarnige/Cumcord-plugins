// Thanks to creatable for the original URL check method :D

import { log } from '@cumcord/utils/logger';
const plugid = "servercss-plugin";

var injectStyle = function() {
  const style = document.createElement('style');
  style.textContent = "@import url('https://kckarnige.is-a.dev/server-specific-css-concept/base.css');";
  style.setAttribute('plugid', plugid);
  document.head.append(style);
  log("[CSC] Injected CSS!")
};


var removeStyle = function () {
    var ecsl = document. getElementById("app-mount");
    ecsl. parentNode. removeChild(ecsl);  
};

var checkAttributeInjection = function () {
  if (!document.getElementById("app-mount").hasAttribute('app-guild-id')) {
    document.getElementById("app-mount").setAttribute('app-guild-id', window.location.pathname.split('/')[2]);
    log("[CSC] Injected attribute!");
    clearInterval();
  }
};

setInterval(checkAttributeInjection, 0.01);

export default {
  onLoad() {
    injectStyle();
  },
  onUnload() {
    removeStyle();
    document.getElementById("app-mount").removeAttribute("app-guild-id");
    log("[CSC] Successfully disabled!")
  }
}