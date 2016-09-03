
function SceneManager()
{
	this.sceneOver = new SceneOver();
	this.sceneMenu = new SceneMenu();
	this.sceneMenu.Init();
	this.scenePlaying = new GameScene();
	this.scenePlaying.Init();
	this.scenePause = new PauseMenu();
	this.scenePause.Init();
	this.sceneArray = [this.sceneMenu, this.scenePlaying, this.sceneOver, this.scenePause]
	this.sceneArrayIndex = 0;
	this.currentScene = this.sceneArray[this.sceneArrayIndex];
	this.currentScene.Start();
}

SceneManager.prototype.AddScene = function(newScene)
{
	this.sceneArray.push(newScene);
}

SceneManager.prototype.GoToScene = function(sceneIndex)
{
	c.clearRect(0, 0, canvas.width, canvas.height);
	this.currentScene.Stop();
	this.currentScene = this.sceneArray[sceneIndex];
	this.currentScene.Start();
}

SceneManager.prototype.GoToNextScene = function()
{
	this.currentScene.Stop();
	this.sceneArrayIndex++;
	if (this.sceneArrayIndex == this.sceneArray.length) 
	{
		this.sceneArrayIndex = 0;
	}
	this.currentScene = this.sceneArray[this.sceneArrayIndex];
	this.currentScene.Start();
}

SceneManager.prototype.CurrentScene = function()
{
	return this.currentScene;
}
