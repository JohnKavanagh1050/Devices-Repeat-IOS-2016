function Camera(x, y, Width, Height)
{
	this.x = x;
	this.y = y;
	this.camWidth = Width;
	this.camHeight = Height;
	this.viewport = new Rectangle(x, y, this.camWidth, this.camHeight);
	this.target;
}

Camera.prototype.resetTarget = function(e)
{
	this.x = e.x - this.camWidth;
	this.y = e.y - this.camHeight;
}

Camera.prototype.follow = function(e)
{
	if(this.x > e.x)
	{
		this.x = e.x;
	}
	else if(this.x + this.camWidth / 2 < e.x + e.radius)
	{
		this.x = e.x + e.radius - this.camWidth;
	}
	
	if(this.y > e.y)
	{
		this.y = e.y;
	}
	else if(this.y + this.camHeight / 2 < e.y + e.radius)
	{
		this.y = e.y + e.radius - this.camHeight;
	}
}