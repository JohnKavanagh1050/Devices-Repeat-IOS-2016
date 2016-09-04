
GameScene.prototype = Object.create(Scene.prototype); //this inherits from Scene

function GameScene()
{
	this.title = "Playing";
	this.init = false;

	this.backgroundImg = new Background(0, 0, "GameScene/Background.png");
	
	this.playerOne = new Player(300,400,"GameScene/ninja1.png");				

	this.collManager = new CollisionManager();
						
	this.Setup();
}

GameScene.prototype.Init = function()
{
	var ImgDiv = document.createElement("div");

	var PauseButton = document.createElement("img");
	PauseButton.setAttribute("src", "MainMenuScene/Pause_Button.png");
	PauseButton.setAttribute("value", "Play Again");
	PauseButton.setAttribute("id", "play-again");
    PauseButton.setAttribute("align", "left");
	ImgDiv.appendChild(PauseButton);
	ImgDiv.style.position = "absolute";
	this.sceneDiv.appendChild(ImgDiv);

	PauseButton.addEventListener("click", function(evt)
	{
		sceneManager.GoToScene(3);
	}, false);
}

GameScene.prototype.Setup = function()
{
	if(!this.init)
	{
		Scene.prototype.Setup.call(this);
	}
}
 
 GameScene.prototype.Update = function(targetX, targetY, canMove, deltatime)
{
	var x = targetX ;
	var y =  targetY;

	if(canMove)
	{
		this.playerOne.movement(x, y, deltatime);
	}
	this.backgroundImg.movement();
	this.render();
}
 
GameScene.prototype.render = function()
{
	c.clearRect(0, 0, canvas.width, canvas.height);
	this.backgroundImg.render();
	this.playerOne.render();
	
}

GameScene.prototype.Start = function()
{
	this.sceneDiv.style.display = "block";
}

GameScene.prototype.Stop = function()
{
	this.sceneDiv.style.display = "none";
}