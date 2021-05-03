function copyText(id){
	var toCopy = document.querySelectorAll(id)[0].outerText;

	const el = document.createElement('textarea');
	el.value = toCopy;
	el.textContent = toCopy;
	document.body.appendChild(el);
	el.select();

	document.execCommand('copy');
	document.body.removeChild(el);
}
