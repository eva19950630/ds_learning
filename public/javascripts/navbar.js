$("body a").on("click", function(e){
	e.preventDefault();
	var hrefvar = $(this).attr("href");
	var idvar = $(this).attr("id");
	// console.log("href: " + hrefvar + ", id: " + idvar);
	switch (hrefvar) {
		case "#menu":
			document.getElementById("menusidepage").style.width = "350px";
			break;
		case "#learning":
			document.getElementById("learningsidepage").style.width = "345px";
			break;
		case "#note":
			document.getElementById("notesidepage").style.width = "345px";
			break;
		case "#signup":
			document.getElementById("signupsidepage").style.width = "350px";
			break;
		case "#login":
			document.getElementById("loginsidepage").style.width = "350px";
			break;
		case "#":
			closesidepage(idvar);
			break;
	}
	switch (idvar) {
		case "backslide":
			document.getElementById("learningsidepage").style.width = "0";
			document.getElementById("notesidepage").style.width = "0";
			break;
		case "changetologin":
			document.getElementById("signupsidepage").style.width = "0";
			document.getElementById("loginsidepage").style.width = "350px";
			break;
		case "changetosignup":
			document.getElementById("loginsidepage").style.width = "0";
			document.getElementById("signupsidepage").style.width = "350px";
			break;
	}
});

function closesidepage(idvar) {
	// console.log(idvar);
	switch (idvar) {
		case "closemenu":
			document.getElementById("menusidepage").style.width = "0";
			break;
		case "closesignup":
			document.getElementById("signupsidepage").style.width = "0";
			break;
		case "closelogin":
			document.getElementById("loginsidepage").style.width = "0";
			break;
	}
}