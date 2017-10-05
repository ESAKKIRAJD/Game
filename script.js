var x;
var y;
var z;
var a;
function myNumber () {

	x = Math.round(Math.random() * 100);
	y = Math.round(Math.random() * 100);
	document.getElementById("inp1").value = x;
	document.getElementById("inp2").value = y;
	z=x+y;
}


function mySubmit() {
	 a = parseInt(document.getElementById("inp3").value);
		if(z == a){
			alert('You are a pass');	
		}else{		
		alert('fail');
	}
};