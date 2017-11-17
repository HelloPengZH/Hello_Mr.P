  var p = {
        "each": function (arr, fn) {
            if (arr.length) {
                for (var i = 0; i < arr.length; i++) {
                    fn(i, arr[i])
                }
            } else if (typeof arr === "number") {
                for (var i = 0; i < arr; i++) {
                    fn(i)
                }
            }
        },
        "id": function (id) {
            return document.getElementById(id)
        },
        "ajax": function (mothed, adress, param, fn) {
            var xhr
            if (XMLHttpRequest) {
                xhr = new XMLHttpRequest()
            } else {
                xhr = new ActiveXObject("Microsoft.XMLHTTP")
            }
            if (mothed == 'post') {
                xhr.open(mothed, adress, true)
                xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
                xhr.send(param)
            } else if (mothed == 'get') {
                xhr.open(mothed, adress + "?" + encodeURI(param), true)
                xhr.send(null)
            }
            xhr.onreadystatechange = function () {
                if (xhr.status == 200 && xhr.readyState == 4) {
                    var date = xhr.responseText
                    fn(date)
                }
            }
        },
        't':function(tag,obj) {
        	if (obj) {
        		return obj.getElementByTagName ('')
        	} else {
        		return document.getElementByTagName('')
        	}
        } ,
        "c": document.createElement,
        'q': document.querySelector,
        'qAll': document.querySelectorAll,
        //变量
        "name": "Mr.Peng"
    }
function test () {
	var inset =  p.c.call (document ,'p' )
	return {
		inset : inset
	}
}
test ()
