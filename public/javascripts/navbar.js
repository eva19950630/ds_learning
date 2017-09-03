var width = $(document).width();
console.log(width);
//navbar link
function openmenuslide() {
	document.getElementById("menusidepage").style.width = "350px";
}
function closemenuslide() {
	document.getElementById("menusidepage").style.width = "0";
}

function openlearningslide() {
	if (width < 768)
		document.getElementById("learningsidepage").style.width = "100vw";
	else
		document.getElementById("learningsidepage").style.width = "345px";
}

function opennoteslide() {
	if (width < 768)
		document.getElementById("notesidepage").style.width = "100vw";
	else
		document.getElementById("notesidepage").style.width = "345px";
}

function openloginslide() {
	if (width < 768)
		document.getElementById("loginsidepage").style.width = "100vw";
	else
		document.getElementById("loginsidepage").style.width = "350px";
}
function closeloginslide() {
	document.getElementById("loginsidepage").style.width = "0";
}

function opensignupslide() {
	if (width < 768)
		document.getElementById("signupsidepage").style.width = "100vw";
	else
		document.getElementById("signupsidepage").style.width = "350px";
}
function closesignupslide() {
	document.getElementById("signupsidepage").style.width = "0";
}

function backslide() {
	document.getElementById("learningsidepage").style.width = "0";
	document.getElementById("notesidepage").style.width = "0";
}

function changetologin() {
	if (width < 768)
		document.getElementById("loginsidepage").style.width = "100vw";
	else
		document.getElementById("loginsidepage").style.width = "350px";
	document.getElementById("signupsidepage").style.width = "0";
}

function changetosignup() {
	if (width < 768)
		document.getElementById("signupsidepage").style.width = "100vw";
	else
		document.getElementById("signupsidepage").style.width = "350px";
	document.getElementById("loginsidepage").style.width = "0";
}
