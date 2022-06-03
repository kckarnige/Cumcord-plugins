// Thanks to creatable for the original URL check method :D

import { log } from '@cumcord/utils/logger';
var pluginData = cumcord.pluginData.manifest;
const plugid = "serverlogos";
const container_class = "container-1-ERn5";
const headid = "serverlogos-logo";

var injectStyle = function () {
    const style = document.createElement('style');
    style.textContent = "@import url('https://kckarnige.is-a.dev/custom-server-logos/base.css');";
    style.id = plugid;
    document.head.append(style);
    document.getElementsByClassName(container_class)[0].setAttribute('id', headid);
    log(`${pluginData.name} | Injected CSS!`)
};


var removeStyle = function () {
    var removeData = document.getElementById(plugid);
    removeData.parentNode.removeChild(removeData);    
};

var checkAttributeInjection = function () {
  if ((!window.location.pathname.split('/')[2] == "@me") && (!document.getElementsByClassName(container_class)[0].hasAttribute('data-guild-id'))) {
    document.getElementsByClassName(container_class)[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
    log(`${pluginData.name} | Injected attribute!`);
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
    log(`${pluginData.name} | Successfully disabled!`)
  }
}