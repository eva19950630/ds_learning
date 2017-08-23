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
			document.getElementById("learningsidepage").style.width = "350px";
			break;
		case "#note":
			document.getElementById("notesidepage").style.width = "350px";
			break;
	}
	switch (idvar) {
		case "closeslide":
			document.getElementById("menusidepage").style.width = "0";
			break;
		case "backslide":
			document.getElementById("learningsidepage").style.width = "0";
			document.getElementById("notesidepage").style.width = "0";
			break;
	}
});