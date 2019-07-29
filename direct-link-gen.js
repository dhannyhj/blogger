function $(e) {
    return document.getElementById(e)
}

function generatelink() {
    var e = $("dlUrl").value,
        n = e.indexOf("google.com"),
        t = e.indexOf("dropbox.com/s"),
        l = e.indexOf("onedrive.live.com");
    if (-1 != n) {
        var i = e.indexOf("d/"),
            d = e.indexOf("/edit"),
            o = e.slice(i + 2, d),
            a = "https://docs.google.com/$type/d/" + o + "/export?format=pdf"; - 1 !== e.indexOf("document") ? a = a.replace("$type", "document") : -1 !== e.indexOf("spreadsheet") ? a = a.replace("$type", "spreadsheets") : -1 !== e.indexOf("presentation") ? a = a.replace("$type", "presentation") : (d = e.indexOf("/view"), a = "https://drive.google.com/uc?export=download&id=" + (o = e.slice(i + 2, d))), $("dlUrlGen").value = a, $("dlUrlGen").select()
    } else if (-1 != t) {
        a = e.replace("?dl=0", "?dl=1");
        $("dlUrlGen").value = a, $("dlUrlGen").select()
    } else if (-1 != l) {
        a = e.replace("redir", "download");
        $("dlUrlGen").value = a, $("dlUrlGen").select()
    } else $("dlUrlGen").value = "THE URL IS INVALID"
}
window.onload = function() {
    $("dlUrl").focus(), $("dlBut").onclick = generatelink
};
