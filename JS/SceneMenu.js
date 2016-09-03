
function SceneMenu()
{
	console.log("menu Scene")
	isStart = false;
	this.title = "Menu";
	this.init = false;
	//this.buttonGame = new button("gameTitle",game.canvas.width/2-232.5,200,475,175,game.ctx);
	//this.buttonOption = new button("playButton",game.canvas.width/2-132.5,400,275,75,game.ctx)
	this.cursorX;
	this.cursorY;
	this.Setup();
	//document.addEventListener("click", printMousePos);
}
SceneMenu.prototype = Object.create(Scene.prototype); //this inherits from Scene

SceneMenu.prototype.Init = function()
{
	var optionDiv = document.createElement("div");
	var ImgDiv = document.createElement("div");
	//var bodyDiv = document.getElementById("bodyDiv");
	
	var NameImage = document.createElement("img");
	NameImage.setAttribute("src", "MainMenuScene/Game_Title.png");
	NameImage.setAttribute("value", "Play Again");
	NameImage.setAttribute("id", "play-again");
   // NameImage.setAttribute("align", "middle");
	ImgDiv.appendChild(NameImage);

	var optionButton = document.createElement("img");
	optionButton.setAttribute("src", "MainMenuScene/Play_Button.png");
	optionButton.setAttribute("value", "Play Again");
	optionButton.setAttribute("id", "play-again");
    //optionButton.setAttribute("align", "top");
	optionDiv.appendChild(optionButton);
	this.sceneDiv.appendChild(ImgDiv);
	this.sceneDiv.appendChild(optionDiv);

	//this.sceneDiv.style.display = "none";
	optionButton.addEventListener("click", function(evt)
	{

		sceneManager.GoToScene(1);

	}, false);
}

SceneMenu.prototype.Setup = function()
{
	if(!this.init)
	{
		Scene.prototype.Setup.call(this);
	}
}
SceneMenu.prototype.Update = function()
{
	//console.log("Menu");

    if(touchable) 
    {	
		for(var i=0; i<touches.length; i++)
		{
			//alert("sdsds")
			var touch = touches[i]; 
			//if(touch.clientX !== -111111)
			//{
			//	alert("ahhh");
			//}
		}
	}
}
function printMousePos(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
}

SceneMenu.prototype.Start = function()
{
	
	this.sceneDiv.style.display = "block";
}
SceneMenu.prototype.Stop = function()
{
	this.sceneDiv.style.display = "none";
}