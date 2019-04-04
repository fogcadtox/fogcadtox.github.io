var Content = document.createElement('div');
	Explorer.appendChild(Content);
	Content.setAttribute("id","content");

for (var i = 0; i < json_data.length; i++) {

	var Float = document.createElement('div');
		Content.appendChild(Float);
		Float.classList.add("float");
		Float.style = "text-align: center";

		var Center = document.createElement('div');
		Float.appendChild(Center);
		Center.classList.add("center");

			var Anchor = document.createElement('a');
			Center.appendChild(Anchor);
			Anchor.href = home[i].link + "index.html";

				var SpanImage = document.createElement('span');
				Anchor.appendChild(SpanImage);
				SpanImage.style = "font-size: 28px";
					var SpanImageText = document.createTextNode("📁");
					SpanImage.appendChild(SpanImageText);

				var H1 = document.createElement('h1');
				Anchor.appendChild(H1);
				Center.classList.add("inline-block");

					var	H1Text = document.createTextNode(json_data[i].img);
					H1.appendChild(H1Text);
}

	var Clear = document.createElement('div');
		Content.appendChild(Clear);
		Clear.style = "clear: both";
// console.log(json_data);
// console.log(json_data[0]);
// console.log(json_data[0].img);
// console.log(json_data.length);