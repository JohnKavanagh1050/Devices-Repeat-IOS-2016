
function PauseMenu()
{
	this.title = "PauseMenu";
	this.init = false;
	this.Setup();
}
PauseMenu.prototype = Object.create(Scene.prototype); //this inherits from Scene

PauseMenu.prototype.Init = function()
{
	var optionDiv = document.createElement("div");
	var ImgDiv = document.createElement("div");
	var MainMenuDiv = document.createElement("div");
	
	var PauseButton = document.createElement("img");
	PauseButton.setAttribute("src", "MainMenuScene/Pause_Button.png");
	PauseButton.setAttribute("value", "Play Again");
	PauseButton.setAttribute("id", "play-again");
    PauseButton.setAttribute("align", "left");
	ImgDiv.appendChild(PauseButton);

	var optionButton = document.createElement("img");
	optionButton.setAttribute("src", "MainMenuScene/Resume_Button.png");
	optionButton.setAttribute("value", "Play Again");
	optionButton.setAttribute("id", "play-again");
	optionButton.setAttribute("align", "middle");
	optionDiv.appendChild(optionButton);

	var MainMenuButton = document.createElement("img");
	MainMenuButton.setAttribute("src", "MainMenuScene/Menu_Button.png");
	MainMenuButton.setAttribute("value", "Play Again");
	MainMenuButton.setAttribute("id", "play-again");
	MainMenuButton.setAttribute("align", "middle");
	MainMenuDiv.appendChild(MainMenuButton);

	this.sceneDiv.appendChild(ImgDiv);
	this.sceneDiv.appendChild(optionDiv);
	this.sceneDiv.appendChild(MainMenuDiv);

	optionButton.addEventListener("click", function(evt)
	{

		sceneManager.GoToScene(1);

	}, false);

	MainMenuButton.addEventListener("click", function(evt)
	{

		sceneManager.GoToScene(0);

	}, false);
}

PauseMenu.prototype.Setup = function()
{
	if(!this.init)
	{
		Scene.prototype.Setup.call(this);
	}
}

PauseMenu.prototype.Update = function()
{
	
}

PauseMenu.prototype.Start = function()
{
	this.sceneDiv.style.display = "block";
}

PauseMenu.prototype.Stop = function()
{
	this.sceneDiv.style.display = "none";
}