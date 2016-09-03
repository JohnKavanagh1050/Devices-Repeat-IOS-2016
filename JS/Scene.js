
function Scene()
{
	this.title = "ParentScene";
	this.init = false;
	//bodyDiv.appendChild(sceneDiv)
}

Scene.prototype.Update = function()
{
	c.fillText("Current Scene = " + this.title, 600, 300);
}

Scene.prototype.Setup = function()
{
	this.init = true;
	var sceneDiv = document.createElement("div");
	this.sceneDiv = sceneDiv;
	this.sceneDiv.id=this.title;
	//this.sceneDiv.style.verticalAlign = "middle";
	this.sceneDiv.setAttribute("align", "center");
	//this.sceneDiv.setAttribute("verticalAlign", "center");

	document.body.appendChild(this.sceneDiv);
	this.Stop();
}

Scene.prototype.Start = function()
{
	this.sceneDiv.style.display = "block"
}

Scene.prototype.Stop = function()
{
	this.sceneDiv.style.display = "none"
}