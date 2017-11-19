window.addEventListener("scroll", function() {
	if (document.querySelector(".logo .second-half").textContent != "umami's") {
		document.querySelector(".logo .first-half").remove();
		document.querySelector(".logo .second-half").textContent = "umami's";
		document.querySelector(".logo .second-half").style.fontWeight = 600;
	}
});

document.querySelector("button").addEventListener("click", function() {
	document.querySelector("#stream").style.display = "inherit";
});
