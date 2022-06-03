// "quick question: what the fuck why?" -Creatable 2022
// Stole the toast code from Beefers, cope
import { log } from '@cumcord/utils/logger';
import { manifest as pluginData } from "@cumcord/pluginData";
var showToast = cumcord.modules.webpack.findByProps("showToast").showToast;
pluginData.id = "cumcord-jQuery";
pluginData.enabled = function (boolean) {
if (boolean === true) {
  log(`${pluginData.name} | Injected!`);
  showToast({message: `${pluginData.name} has been enabled! `, id: "plugin-toast", type: 1});
} else if (boolean === false) {
  log(`${pluginData.name} | Removed!`);
  showToast({message: `${pluginData.name} has been disabled! `, id: "plugin-toast", type: 2});
}
}

var injectScript = function () {
    const script = document.createElement('script');
    script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script.id = pluginData.id;
    document.head.append(script);
    pluginData.enabled(true)
};


var removeScript = function () {
    var removeData = document.getElementById(pluginData.id);
    removeData.parentNode.removeChild(removeData);
    pluginData.enabled(false)
};

export default {
  onLoad() {
    injectScript();
  },
  onUnload() {
    removeScript();
  }
}