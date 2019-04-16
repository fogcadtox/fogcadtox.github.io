// function CrtE(elements) { return document.createElement(elements); }
// function CrTN(texts) { return document.createTextNode(texts); }
// function ApdC(parent, child) { parent.appendChild(child); }
function AddClass(classes, vars) { vars.classList.add(classes); }

function DomElement(parent, vars, elements, classes) {
	vars = document.createElement(elements);
	parent.appendChild(vars);
	if(classes){	vars.classList.add(classes);	}
	return vars;
}

function DomText(parent, vars, text) {
	vars = document.createTextNode(text);
	parent.appendChild(vars);
	return vars;
}