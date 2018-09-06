
var mainString='';
var ans;
var exp_string='';


function clickedMe(txt){

	var numb = txt.match(/\d/g);
	if(numb !== null) {

		numb = numb.join("") ;
		window.mainString += numb;
		window.exp_string += numb;
	} 
	console.log(numb);
	if(numb === null){
		window.mainString += "<span class='redred'>"+txt+"</span>";
		window.exp_string += txt;
	}

	document.getElementsByClassName('output_exp')[0].innerHTML = window.mainString;
	console.log(window.exp_string);
	console.log(eval(window.exp_string));
	



}



	document.getElementById("showAns").onclick = function(){
		window.ans = eval(window.exp_string);
		console.log(window.exp_string);
		console.log(window.ans);
		document.getElementsByClassName('output_ans')[0].innerHTML = window.ans;
	}


	function clearMe(){
		document.getElementsByClassName('output_ans')[0].innerHTML = '';
		document.getElementsByClassName('output_exp')[0].innerHTML ='';
		window.ans = '';
		window.exp_string = '';
		window.mainString = '';
	}