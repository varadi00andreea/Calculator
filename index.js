let result=document.getElementById("result")
let operation=0
var ok=0
var number=0


function zero() {
	verifyOk()
	result.textContent+="0"
}

function one() {
	verifyOk()
    result.textContent+="1"

}

function two() {
	verifyOk()
	result.textContent+="2"
}

function three() {
	verifyOk()
	result.textContent+="3"
}

function four() {
	verifyOk()
	result.textContent+="4"
}

function five() {
	verifyOk()
	result.textContent+="5"
}

function six() {
	verifyOk()
	result.textContent+="6"
}

function seven() {
	verifyOk()
	result.textContent+="7"
}

function eight() {
	verifyOk()
	result.textContent+="8"
}

function nine() {
	verifyOk()
	result.textContent+="9"
}

function del() {
	result.textContent=null;
	enableBtns()
}

function point() {
	result.textContent+="."
}

function plus() {
	result.textContent+="+"
	operation=1
	ok=0
	disableBtns()

}

function minus() {
	result.textContent+="-"
	operation=2
	ok=0
	disableBtns()
}

function division() {
	result.textContent+="/"
	operation=3
	ok=0
	disableBtns()
}
function multiply() {
	result.textContent+="*"
	operation=4
	ok=0
	disableBtns()
}

function erase() {

	if(result.textContent.charAt(result.textContent.length-1)=='+' || result.textContent.charAt(result.textContent.length-1)=='-' || result.textContent.charAt(result.textContent.length-1)=='*' || result.textContent.charAt(result.textContent.length-1)=='/') {
		enableBtns()
	}

result.textContent=result.textContent.substring(0,result.textContent.length-1)

}

function inverse() {
	getNumber()
	result.textContent=1/number
}

function power() {
	getNumber()
	result.textContent=number*number
}

function sqrtx() {
	getNumber()
	result.textContent=Math.sqrt(number)
}

function percentage() {
	getNumber()
	result.textContent=number/100
}

function signcng() {
	if(result.textContent[0]!='-') {
		result.textContent="-"+result.textContent
	}
	else {
		result.textContent=result.textContent.substring(1)
	}
}

function equal() {
	ok=1
	enableBtns()
	switch(operation){
		case 1:
		var firstNumber=parseFloat(result.textContent.substring(0,result.textContent.indexOf("+")))
		var secondNumber=parseFloat(result.textContent.substring(result.textContent.indexOf("+")+1,result.textContent.length))
		var finalResult=firstNumber+secondNumber
		result.textContent=finalResult
		break;
		case 2:
		var firstNumber=parseFloat(result.textContent.substring(0,result.textContent.indexOf("-")))
		var secondNumber=parseFloat(result.textContent.substring(result.textContent.indexOf("-")+1,result.textContent.length))
		var finalResult=firstNumber-secondNumber
		result.textContent=finalResult
		break;
		case 3:
		var firstNumber=parseFloat(result.textContent.substring(0,result.textContent.indexOf("/")))
		var secondNumber=parseFloat(result.textContent.substring(result.textContent.indexOf("/")+1,result.textContent.length))
		var finalResult=firstNumber/secondNumber
		result.textContent=finalResult
		break;
		case 4:
		var firstNumber=parseFloat(result.textContent.substring(0,result.textContent.indexOf("*")))
		var secondNumber=parseFloat(result.textContent.substring(result.textContent.indexOf("*")+1,result.textContent.length))
		var finalResult=firstNumber*secondNumber
		result.textContent=finalResult
		break;
	}

}

function verifyOk() {

	if(ok==1){
		result.textContent=null
		ok=0
	}
	
}


function getNumber() {
	number=parseFloat(result.textContent)
	ok=1
}

function enableBtns() {
	document.getElementById("plus-btn").disabled=false
	document.getElementById("minus-btn").disabled=false
	document.getElementById("div-btn").disabled=false
	document.getElementById("multiply-btn").disabled=false
}

function disableBtns() {
	document.getElementById("plus-btn").disabled=true
	document.getElementById("minus-btn").disabled=true
	document.getElementById("div-btn").disabled=true
	document.getElementById("multiply-btn").disabled=true

}