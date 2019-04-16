var Explorer = DomElement(document.body, Explorer, 'div', "explorer");

	var Rapper = DomElement(Explorer, Rapper, 'div', "rapper");
	var Header = DomElement(Rapper, Header, 'div', "header");

		var HeaderLeft = DomElement(Header, HeaderLeft, 'div', "header-left");
			AddClass("inline-block", HeaderLeft);
			AddClass("width50", HeaderLeft);
			AddClass("left", HeaderLeft);

			var Paragraph = DomElement(HeaderLeft, Paragraph, 'p', "");
				var ParagraphText = DomText(Paragraph, ParagraphText, current[0].title);

		var HeaderRight = DomElement(Header, HeaderRight, 'div', "header-right");
			AddClass("inline-block", HeaderRight);
			AddClass("width50", HeaderRight);
			AddClass("right", HeaderRight);

			var SpanA1 = DomElement(HeaderRight, SpanA1, 'span', "");
			var SpanB1 = DomElement(HeaderRight, SpanA1, 'span', "");
			var SpanC1 = DomElement(HeaderRight, SpanA1, 'span', "");
			var SpanD1 = DomElement(HeaderRight, SpanA1, 'span', "");
				SpanA1.setAttribute("id","minimization");
				SpanB1.setAttribute("id","fullscreen");
				SpanC1.setAttribute("id","closescreen");AddClass("hidden", SpanC1);
				SpanD1.setAttribute("id","closebutton");

			var SpanA2 = DomElement(SpanA1, SpanA2, 'span', "white");
			var SpanB2 = DomElement(SpanB1, SpanB2, 'span', "white");
			var SpanC2 = DomElement(SpanC1, SpanC2, 'span', "white");
			var SpanD2 = DomElement(SpanD1, SpanD2, 'span', "red");
				AddClass("light", SpanA2);
				AddClass("light", SpanB2);
				AddClass("light", SpanC2);
				AddClass("light", SpanD2);

			var A2Text = DomText(SpanA2, A2Text, "－");
			var B2Text = DomText(SpanB2, B2Text, "□");
			var C2Text = DomText(SpanC2, C2Text, "❐");
			var D2Text = DomText(SpanD2, D2Text, "✖");

	var SearchBox = DomElement(Explorer, SearchBox, 'div', "search-box");

	do {
		var Folder1 = DomElement(SearchBox, Folder1, 'span', "");
		var Folder1Anchor = DomElement(Folder1, Folder1Anchor, 'a', "");
		Folder1Anchor.href = "https://fogcadtox.github.io/index.html";
		var Folder1Text = DomText(Folder1Anchor, Folder1Text, "TOP");
		if (current[0].title === "TOP") { break; }

		if (parent[0]) {
		var Folder2 = DomElement(SearchBox, Folder2, 'span', "");
		var Folder2Text = DomText(Folder2, Folder2Text, parent[0].title);

		var Folder3 = DomElement(SearchBox, Folder3, 'span', "");
		var Folder3Text = DomText(Folder3, Folder3Text, current[0].title);
		}
		if (!(parent[0])) {
		var Folder2 = DomElement(SearchBox, Folder2, 'span', "");
		var Folder2Text = DomText(Folder2, Folder2Text, current[0].title);
		}
	} while(false);