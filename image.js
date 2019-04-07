var Content = document.createElement('div');
Explorer.appendChild(Content);
Content.setAttribute("id","content");

	var ImageBox = document.createElement('img');
	Content.appendChild(ImageBox);
	ImageBox.src = "img/" + current[0].title + ".png";