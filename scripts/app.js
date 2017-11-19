window.addEventListener("scroll", function() {
	if (document.querySelector(".logo .second-half").textContent != "umami") {
		document.querySelector(".logo .first-half").textContent = "buy";
		document.querySelector(".logo").style.flexDirection = "column";
		document.querySelector(".logo .second-half").style.marginTop = "-5rem";
		document.querySelector(".logo .second-half").textContent = "umami";
		document.querySelector(".logo .second-half").style.fontWeight = 600;
	}
});

document.querySelector("button").addEventListener("click", function() {
	document.querySelector("#stream").style.display = "inherit";
});
