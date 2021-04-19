function copyText(id){
	var toCopy = document.querySelectorAll("#oneko_pid_handler")[0].outerText;
	
	const el = document.createElement('textarea');
	el.value = toCopy;
	document.body.appendChild(el);
	el.select();

	document.execCommand('copy');
	document.body.removeChild(el);
}
