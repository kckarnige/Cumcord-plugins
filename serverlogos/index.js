import { log } from '@cumcord/utils/logger';
import { manifest as pluginData } from "@cumcord/pluginData";
var showToast = cumcord.modules.webpack.findByProps("showToast").showToast;
pluginData.id = pluginData.name.replace(/\s/g, '');
pluginData.enabled = function (boolean) {
if (boolean === true) {
  log(`${pluginData.name} | Injected!`);
  showToast({message: `${pluginData.name} has been enabled! `, id: "plugin-toast", type: 1});
} else if (boolean === false) {
  log(`${pluginData.name} | Removed!`);
  showToast({message: `${pluginData.name} has been disabled! `, id: "plugin-toast", type: 2});
}
}
const container_class = "container-1-ERn5";
const logoid = pluginData.id + "-logo";

var injectScript = function () {
  pluginData.enabled(true)
    const style = document.createElement('style');
    style.textContent = "@import url('https://kckarnige.is-a.dev/custom-server-logos/base.css');";
    style.id = pluginData.id;
    document.head.append(style);
};


var removeScript = function () {
  pluginData.enabled(false)
    var removeData = document.getElementById(pluginData.id);
    removeData.parentNode.removeChild(removeData);
    document.getElementById(logoid).removeAttribute("data-guild-id");
    document.getElementById(logoid).removeAttribute("id", logoid);
};

// Sacred saus
var inrvul = setInterval(function () {
  if ((!window.location.pathname.split('/')[2] == "@me") || (!document.getElementsByClassName(container_class)[0].hasAttribute('data-guild-id'))) {
    document.getElementsByClassName(container_class)[0].setAttribute('data-guild-id', window.location.pathname.split('/')[2]);
    document.getElementsByClassName(container_class)[0].id = logoid;
    log(`${pluginData.name} | Injected guild ID attribute!`);
    clearInterval(inrvul);
  }
}, 1);



export default {
  onLoad() {
    injectScript();
  },
  onUnload() {
    removeScript();
  }
}