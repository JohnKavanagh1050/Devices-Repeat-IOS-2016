
function SceneOver()
{
	this.title = "Game Over";
}
SceneOver.prototype = Object.create(Scene.prototype); //this inherits from Scene

SceneOver.prototype.Update = function()
{
	//console.log("Game Over");
	c.font = "140px jing jing"
	c.fillText("Game Over you Died",game.canvas.width/2-200,game.canvas.height/2);
}

Scene.prototype.Start = function()
{
	window.addEventListener("keydown", game.handelInput);
}
Scene.prototype.Stop = function()
{
	window.removeEventListener("keydown", game.handelInput);
	c.clearRect(0,0,1000,1000);
}