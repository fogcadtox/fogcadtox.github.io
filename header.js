var Explorer = document.createElement('div');
	document.body.appendChild(Explorer);
	Explorer.classList.add("explorer");

	var Rapper = document.createElement('div');
		Explorer.appendChild(Rapper);
		Rapper.classList.add("rapper");

	var Header = document.createElement('div');
		Rapper.appendChild(Header);
		Header.classList.add("header");

		var HeaderLeft = document.createElement('div');
			Header.appendChild(HeaderLeft);
			HeaderLeft.classList.add("header-left");
			HeaderLeft.classList.add("inline-block");
			HeaderLeft.classList.add("width50");
			HeaderLeft.classList.add("left");

			var Paragraph = document.createElement('p');
			HeaderLeft.appendChild(Paragraph);

				var ParagraphText = document.createTextNode(current[0].title);
				Paragraph.appendChild(ParagraphText);

		var HeaderRight = document.createElement('div');
			Header.appendChild(HeaderRight);
			HeaderRight.classList.add("header-right");
			HeaderRight.classList.add("inline-block");
			HeaderRight.classList.add("width50");
			HeaderRight.classList.add("right");

			var	SpanA1 = document.createElement('span');
			var	SpanA2 = document.createElement('span');
			var	SpanB1 = document.createElement('span');
			var	SpanB2 = document.createElement('span');
			var	SpanC1 = document.createElement('span');
			var	SpanC2 = document.createElement('span');
			var	SpanD1 = document.createElement('span');
			var	SpanD2 = document.createElement('span');

			HeaderRight.appendChild(SpanA1);SpanA1.appendChild(SpanA2);
			HeaderRight.appendChild(SpanB1);SpanB1.appendChild(SpanB2);
			HeaderRight.appendChild(SpanC1);SpanC1.appendChild(SpanC2);
			HeaderRight.appendChild(SpanD1);SpanD1.appendChild(SpanD2);

			SpanA1.setAttribute("id","minimization");
			SpanB1.setAttribute("id","fullscreen");
			SpanC1.setAttribute("id","closescreen");SpanC1.classList.add("hidden");
			SpanD1.setAttribute("id","closebutton");

			SpanA2.classList.add("white");SpanA2.classList.add("light");
			SpanB2.classList.add("white");SpanB2.classList.add("light");
			SpanC2.classList.add("white");SpanC2.classList.add("light");
			SpanD2.classList.add("red");  SpanD2.classList.add("light");

			var A2Text = document.createTextNode("－");	SpanA2.appendChild(A2Text);
			var B2Text = document.createTextNode("□");	SpanB2.appendChild(B2Text);
			var C2Text = document.createTextNode("❐");	SpanC2.appendChild(C2Text);
			var D2Text = document.createTextNode("✖");	SpanD2.appendChild(D2Text);

	var SearchBox = document.createElement('div');
		Explorer.appendChild(SearchBox);
		SearchBox.classList.add("search-box");

	if (current[0].title !== "TOP") {
		if (parent[0]) {
			var Folder1 = document.createElement('span');var Folder1Text = document.createTextNode("TOP");
			SearchBox.appendChild(Folder1);Folder1.appendChild(Folder1Text);
			var Folder2 = document.createElement('span');var Folder2Text = document.createTextNode(parent[0].title);
			SearchBox.appendChild(Folder2);Folder2.appendChild(Folder2Text);
			var Folder3 = document.createElement('span');var Folder3Text = document.createTextNode(current[0].title);
			SearchBox.appendChild(Folder3);Folder3.appendChild(Folder3Text);
		} else {
			var Folder1 = document.createElement('span');var Folder1Text = document.createTextNode("TOP");
			SearchBox.appendChild(Folder1);Folder1.appendChild(Folder1Text);
			var Folder2 = document.createElement('span');var Folder2Text = document.createTextNode(current[0].title);
			SearchBox.appendChild(Folder2);Folder2.appendChild(Folder2Text);
		}
	} else {
		var Folder1 = document.createElement('span');var Folder1Text = document.createTextNode("TOP");
		SearchBox.appendChild(Folder1);Folder1.appendChild(Folder1Text);
	}