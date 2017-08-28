var width = $(document).width();
console.log(width);
//navbar link
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
		// mobile
		case "#m_learning":
			document.getElementById("learningsidepage").style.width = "100vw";
			break;
		case "#m_note":
			document.getElementById("notesidepage").style.width = "100vw";
			break;
		case "#m_signup":
			document.getElementById("signupsidepage").style.width = "100vw";
			break;
		case "#m_login":
			document.getElementById("loginsidepage").style.width = "100vw";
			break;
		case "#":
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
			break;
	}
	switch (idvar) {
		case "backslide":
			document.getElementById("learningsidepage").style.width = "0";
			document.getElementById("notesidepage").style.width = "0";
			break;
		case "changetologin":
			if (width < 600)
				document.getElementById("loginsidepage").style.width = "100vw";
			else
				document.getElementById("loginsidepage").style.width = "350px";
			document.getElementById("signupsidepage").style.width = "0";
			break;
		case "changetosignup":
			if (width < 600)
				document.getElementById("signupsidepage").style.width = "100vw";
			else
				document.getElementById("signupsidepage").style.width = "350px";
			document.getElementById("loginsidepage").style.width = "0";
			break;
		// mobile
		case "changetoindex":
			document.getElementById("mobilemenu").style.display = "none";
			$(location).attr('href', 'http://localhost:3000/')
			break;
	}
});
