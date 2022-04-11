var CumcordManifest = document.location.href + "/cumcord_manifest.json"
$.ajax({
    url: CumcordManifest,
    type: 'HEAD',
    success: function () {
        document.location.href = "https://send.cumcord.com/#" + document.location.href
    },
    error: function () {
        document.location.href = "https://kckarnige.is-a.dev/cumcord-plugins"
    }
});