function jsonDecode(jsonString) {
	try {
		return JSON.parse(jsonString);
	} catch (e) {
		alert('JSON sai dinh dang!');
	}
}

function jsonEncode(jsObject) {
	try {
		return JSON.stringify(jsObject);
	} catch (e) {
		console.error('JS object is not valid');
	}
}

function loadAjaxCourses(method, url){
	var lessonsRequest = new XMLHttpRequest();
	lessonsRequest.open(method, url);

	lessonsRequest.onreadystatechange = function() {
		if(lessonsRequest.readyState === 4) {
			var courses = jsonDecode(this.responseText);
			renderCourses(courses);	
		}
	}
	lessonsRequest.send();
}


function callAPI(method, url, callback, params) {
	if (!params) {
		params = {}
	}
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4) {
			if (typeof callback === 'function') {
				callback(jsonDecode(this.responseText), this.status);
			}
		}
	};
	xhttp.open(method, url, true);
	xhttp.setRequestHeader(
		"Content-type",
		"application/x-www-form-urlencoded"
		);
	xhttp.send(
		objectToQueryString(params)
		);
}


function objectToQueryString(object) {
	var objectKeys = Object.keys(object);
	var queryArray = [];
	for (var objectKey of objectKeys) {
		var objectValue = object[objectKey];
		queryArray.push(objectKey + '=' + objectValue);
	}
	return queryArray.join('&');
}



// callAPI(
// 		'post',
// 		'http://superdev.sondn.com/api/v1/courses',
// 		function(newCourse) {
// 			console.log('newCourse --> ', newCourse);
// 			console.log('\n');
// 		},
// 		{
// 			name: getInputValue('#name'),
// 			description: getInputValue('#description'),
// 			is_active: "active",
// 			priority: 90,
// 		}
// 		);




function onUpperCase(element) {
	var string = element.value;
	string = upperCase(string);
	element.value = string;    
}

function setUpperCase(string) {
	return string.toUpperCase(); 
}

function validationMaxLength(string, length) {
	return string.trim().length > length;
}

function validationMinLength(string, length) {
	return string.trim().length < length;
}

function redirect(url) {
	location.href = url;
}

function getAttr(element,attr) {
	return element.getAttribute(attr);
}

function getElements(selector) {
	return document.querySelectorAll(selector);
}

function setHTML(selector, html) {
	var element = document.querySelector(selector);
	element.innerHTML = html;
}

function getHTML(selector) {
	var element = document.querySelector(selector);
	return element.innerHTML;
}

 function setText(selector, html) {
    var element = document.querySelector(selector);
    element.innerText = html;
  }

 function getText(selector) {
    var element = document.querySelector(selector);
    return element.innerText;
  }

function setInputValue(selector, value) {
	var element = document.querySelector(selector);
	element.value = value;
}

function getInputValue(selector) {
	var element = document.querySelector(selector);
	return element.value;
}

function isNumber(string) {
	return !isNaN(parseInt(string));
}

