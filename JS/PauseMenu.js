
function PauseMenu()
{
	this.title = "PauseMenu";
	this.init = false;
	this.Setup();
}
PauseMenu.prototype = Object.create(Scene.prototype); //this inherits from Scene

PauseMenu.prototype.Init = function()
{
	var resumeDiv = document.createElement("div");
	var MainMenuDiv = document.createElement("div");

	var resumeButton = document.createElement("img");
	resumeButton.setAttribute("src", "PauseMenuScene/Resume_Button.png");
	resumeButton.setAttribute("value", "Play Again");
	resumeButton.setAttribute("id", "play-again");
	resumeButton.setAttribute("align", "middle");
	resumeDiv.appendChild(resumeButton);

	var MainMenuButton = document.createElement("img");
	MainMenuButton.setAttribute("src", "MainMenuScene/Menu_Button.png");
	MainMenuButton.setAttribute("value", "Play Again");
	MainMenuButton.setAttribute("id", "play-again");
	MainMenuButton.setAttribute("align", "middle");
	MainMenuDiv.appendChild(MainMenuButton);

	this.sceneDiv.appendChild(resumeDiv);
	this.sceneDiv.appendChild(MainMenuDiv);

	resumeButton.addEventListener("click", function(evt)
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