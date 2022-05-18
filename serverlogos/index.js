// Thanks to creatable for the original URL check method :D

import { log } from '@cumcord/utils/logger';
const plugid = "serverlogos";
const container_class = "container-1-ERn5";
const headid = "serverlogos-logo";

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

var checkAttributeInjection = function () {
  if ((!window.location.pathname.split('/')[2] == "@me") && (!document.getElementsByClassName(container_class)[0].hasAttribute('data-guild-id'))) {
    document.getElementsByClassName(container_class)[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
    log("[CSL] Injected attribute!");
    clearInterval();
  }
};

setInterval(checkAttributeInjection, 0);

export default {
  onLoad() {
    injectStyle();
  },
  onUnload() {
    removeStyle();
    document.getElementById(headid).removeAttribute("data-guild-id");
    document.getElementById(headid).removeAttribute("id");
    log("[CSL] Successfully disabled!")
  }
}