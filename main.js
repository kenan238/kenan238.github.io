/* By⠀kenan238 */
// CLASSES
class vector2d{
	constructor(x, y){
		this.x = x;
		this.y = y;
	}
}
class html_window{
	constructor(title, isDraggable, darkMode, w, h){
		this.config = {
			"title": title,
			"isDraggable": isDraggable,
			"darkMode": darkMode,
			"WidthHeight": [w,h],
			"xyOffset": new vector2d(0, 0),
			"innerHTML": ""
		};
		this.html_element = null;
		this.setHtmlElem();
	} 
	setTitle(f)             { this.config["title"]       = f;          }
	setIsDraggable(f)       { this.config["isDraggable"] = f;          }
	setXYOffset(f)          { this.config["xyOffset"]    = f;          }
	getConfig(f)            { return this.config[f];                   }
	setCssStyle(style, val) { this.html_element.style[style] = val;    }
	setInnerHTML(inner)     { this.config["innerHTML"]       = inner;  }
	resizeContent(){
		for(let i=0; i<this.html_element.childNodes; i++){
			this.html_element.childNodes[i].style.width  = this.html_element.style.width;
			this.html_element.childNodes[i].style.height = this.html_element.style.height;
		}
	}
	setXYOffsets(){
		this.setCssStyle("position", "absolute");
		// Handle X axis
		if(this.getConfig("xyOffset").x >= 0) 
			this.setCssStyle("left", this.getConfig("xyOffset").x + "px");
		else if(this.getConfig("xyOffset").y < 0)
			this.setCssStyle("right", this.getConfig("xyOffset").x + "px");
		// Handle Y axis
		if(this.getConfig("xyOffset").y >= 0)
			this.setCssStyle("top", this.getConfig("xyOffset").y + "px");
		else if(this.getConfig("xyOffset").y < 0)
			this.setCssStyle("bottom", this.getConfig("xyOffset").y + "px");
	}
	setHtmlElem(){
		this.html_element = document.createElement("DIV");
		// white mode windows coming soon
		// if(this.getConfig("darkMode")) this.html_element.background = "assets/imgs/window_black.png";
		// else this.html_element.background = "assets/imgs/window_white.png";
		this.setCssStyle("backgroundImage",  "url('assets/imgs/window_black.png')");
		this.setCssStyle("backgroundRepeat", "no-repeat");
		this.setCssStyle("width",            this.getConfig("WidthHeight")[0]+"px");
		this.setCssStyle("height",           this.getConfig("WidthHeight")[1]+"px");
		this.setXYOffsets();
		document.body.appendChild(this.html_element);
	}
	update(){
		this.html_element.innerHTML = `
		<p>⠀⠀⠀⠀⠀${this.getConfig("title")}</p>
		${this.getConfig("innerHTML")}
		`;
		this.setCssStyle("width",            this.getConfig("WidthHeight")[0]+"px");
		this.setCssStyle("height",           this.getConfig("WidthHeight")[1]+"px");
		// this.resizeContent();
		this.setXYOffsets();
	}
}
// CLASSES
const setupAbout1 = () => {
	document.getElementById('about1').innerHTML = `
		<br /><br />⠀⠀⠀⠀⠀I am a passionate programmer who 
	has been programming for <i>${new Date().getFullYear() - 2019} years</i>
	and i am really enjoy it since then... 
		<br />----------<br />	⠀⠀⠀⠀⠀⠀I like programming in <strong>C++, Python and JS</strong> but i know many other languages, here is all i know:<br />
		⠀⠀⠀C++, C, C#, Python, JS, Shell (if it's even considered a language), Batch ⠀(if it's even considered a language), Lua, x86 asm (i know the instructions and stuff but no clue how to write in it), HTML, CSS, JSON, JAVA
		<br />----------<br />	I've been doing little projects (not neccessarely "little") and more stuff y'know, here are my projects: 
		`;
	// setTimeout(()=>{
	// 	let o = document.getElementById('about1').offsetHeight+'px';
	// 	document.getElementById('about1_group').style.height = o;
	// 	document.getElementById('about1_img').style.height = o;
	// 	o = document.getElementById('about1').offsetWidth+'px';
	// 	document.getElementById('about1_group').style.width = o;
	// 	document.getElementById('about1_img').style.width = o;

	// }, 1500);
};
const addProject = (img, imgwh, text) => {
	let prepared = document.createElement("div");
	prepared.innerHTML = `
	<img src="${img}" width="${imgwh[0]}" height="${imgwh[1]}"></img>
	<p style="word-wrap: break-word; width: 100px;">${text}</p>
	`;
	document.getElementsByClassName('projects')[0].appendChild(prepared);
};
window.onload = () => {
	setupAbout1();
	addProject("assets/imgs/Json++.png",   [100,100], "<strong>Json++</strong> a little JSON parser i am making for fun in C++ :).")
	addProject("assets/imgs/beepboop.png", [100,100], "<strong>BeepBoop</strong> a simple music compositor i made in HTML/CSS/JS, you can upload your notes in it and have whatever.")
	addProject("assets/imgs/CAP.png",      [100,100], "<strong>CAP</strong> a little chatting app prototype i made with my friend in python.")
	addProject("assets/imgs/Xype.png",     [100,100], "<strong>Xype</strong> a screen recorder i made in electron.")
	addProject("assets/imgs/noImg.png",    [100,100], "<strong>Blideyz</strong> a game engine im making in C++.")
	addProject("assets/imgs/noImg.png",    [100,100], "<strong>VirixOS</strong> an OS i will continue making once i am better at x86 and C++.")
	addProject("assets/imgs/noImg.png",    [100,100], "<strong>RunPythonCodeFromDocx</strong> something i made in a few hours that can run python code from DOCX files.")
	addProject("assets/imgs/noImg.png",    [100,100], "<strong>Aetheria</strong>, a game i've been working on with my 2 friends, kind of forgotten but i'll get back to working soon. <strong>THERE IS NO LOGO YET</strong>")
};