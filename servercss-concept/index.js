const plugid = "servercss-plugin";

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
        document.getElementById("app-mount").setAttribute('app-guild-id', window.location.pathname.split('/')[2]);
    }, 1);

    clearURLChange = () => clearTimeout(timeoutID);
}

var injectStyle = function() {
    const style = document.createElement('style');
    style.textContent = "@import url('https://kckarnige.is-a.dev/server-specific-css-concept/base.css');";
    style.setAttribute('plugid', plugid);
    document.head.append(style);
};


var removeStyle = function() {
    var ecsl = document.querySelectorAll("[plugid='"+plugid+"']");
    ecsl.parentNode.removeChild(ecsl);

};

export default {
    onLoad() {
        injectStyle();
        checkURLchange();
    },
    onUnload() {
        removeStyle();
        clearURLChange();
        document.getElementById("app-mount").removeAttribute("app-guild-id");
    }
}
