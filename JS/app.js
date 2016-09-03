var sceneManager;
var canvas;
var c;
var touchable = 'createTouch' in document,
touches = []; // array of touch vectors
var touchX, touchY;
var mouseX, mouseY;

function main()
{
	this.timeprev = 0;
	this.timecur = 0;
	this.touching = false;
	sceneManager = new SceneManager();
	sceneManager.CurrentScene().Update();
	
	setupCanvas() ;
	setupTouch();
	update();

}

function loadLevel(jsondata)
{
	sceneManager = new SceneManager(jsondata);
	sceneManager.CurrentScene().Update();
	
	setupCanvas();
	setupTouch();
	update();
}

function setupTouch()
{
	if(touchable) 
	{
		canvas.addEventListener('touchstart', onTouchStart, false);
		canvas.addEventListener('touchmove', onTouchMove, false);
		canvas.addEventListener('touchend', onTouchEnd, false);
		window.onorientationchange = resetCanvas;  
		window.onresize = resetCanvas;  
	} 
	else 
	{
		console.log("not touchable");
		canvas.addEventListener('mousedown', onMouseDown, false);
		canvas.addEventListener('mousemove', onMouseMove, false);
		canvas.addEventListener('mouseup', onMouseUp, false);
	}
}
function resetCanvas (e) 
{  
  	canvas.width = window.innerWidth; 
	canvas.height = window.innerHeight;
	
	window.scrollTo(0,0); 
}

function update()
{
	this.timecur = Date.now();
    var dt = (this.timecur - this.timeprev) / 1000; // seconds since last frame
    this.timeprev = this.timecur;
	
	if(sceneManager.sceneArrayIndex = 1)
	{
		if(touchable) 
		{
			sceneManager.currentScene.Update(touchX, touchY, main.touching, dt);
		}
		else
		{
			sceneManager.currentScene.Update(mouseX, mouseY, main.touching, dt);
		}
	}
	else
	{
		sceneManager.currentScene.Update();
	}
	
	window.requestAnimationFrame(this.update);
}

function initCanvas()
{
	var c = document.getElementById("myCanvas");
	c.width = window.innerWidth;
	c.height = window.innerHeight;

	return c;
}

function rgb(r, g, b) 
{ 
	return 'rgb(' + clamp(Math.round(r), 0, 255) + ', ' + 0 + ', ' + 0 + ')';
}
/*helper function*/
function clamp(value, min, max)
{ 
	if(max < min) 
	{ 
		var temp = min; 
		min = max; 
		max = temp; 
	}
	return Math.max(min, Math.min(value, max)); 
}

function onTouchStart(e) 
{
    e.preventDefault();
	touches = e.touches; 
	
	var touch = touches[0];
	touchX = touch.clientX;
	touchY = touch.clientY;
	
	main.touching = true;
}

function onTouchMove(e) 
{
	e.preventDefault();
	touches = e.touches; 
	var touch = touches[0];
	if(main.touching)
	{
		touchX = touch.clientX;
		touchY = touch.clientY;
	}
	
} 
function onTouchEnd(e) 
{ 
    e.preventDefault();
   	touches = e.touches; 
	main.touching = false;
}

function onMouseDown(event) 
{
	mouseX = event.offsetX;
	mouseY = event.offsetY;
	main.touching = true;
}

function onMouseMove(event) 
{
	if(main.touching === true)
	{
		mouseX = event.offsetX;
		mouseY = event.offsetY;
	}
}

function onMouseUp(event) 
{
	main.touching = false;
}

function setupCanvas() 
{
	canvas = document.createElement( 'canvas' );
	c = canvas.getContext( '2d' );
	container = document.createElement( 'div' );
	container.className = "container";

	canvas.width = window.innerWidth; 
	canvas.height = window.innerHeight; 
	document.body.appendChild( container );
	container.appendChild(canvas);	
	
	c.strokeStyle = "#ffffff";
	c.lineWidth =2;	
}