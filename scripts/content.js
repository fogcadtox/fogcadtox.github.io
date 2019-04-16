var Content = DomElement(Explorer, Content, 'div', "");
	Content.setAttribute("id","content");

for (var i = 0; i < FileName.length; i++) {
	var Float = DomElement(Content, Float, 'div', "float");

		var Center = DomElement(Float, Center, 'div', "center");
			AddClass("inline-block", Center);

			var Anchor = DomElement(Center, Anchor, 'a', "");
				Anchor.href = "img/" + FileName[i].data + ".png";

				var Img = DomElement(Anchor, Img, 'img', "");
					Img.src = "img/" + FileName[i].data + ".png";

				var H1 = DomElement(Anchor, H1, 'h1', "");
				
					var H1Text = DomText(H1, H1Text, ImgName[i].data);
}

	var Clear = DomElement(Content, Clear, 'div', "");
		Clear.style = "clear: both";