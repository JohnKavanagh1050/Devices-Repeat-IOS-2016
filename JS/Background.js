function Background(x, y, filename)
{
	this.img = new Image();
	this.img.src = filename;
	this.endPointX;
	this.endPointY;
	this.deltaX;
	this.deltaY;
	this.distance = 0;
	this.targetX;
	this.targetY;
	this.width = window.innerWidth;
	this.height = window.innerHeight;
	this.x = x;
	this.y = y;
	this.x2 = x-this.width;
	this.moveSpeed = 3;
}

Background.prototype.movement = function(destX, destY, deltatime)
{
	this.x += this.moveSpeed;
	this.x2 += this.moveSpeed;
	if (this.x > this.width)
	{
		this.x = -this.width + 5;
	}
	if (this.x2 > this.width)
	{
		this.x2 = -this.width + 5;
	}
}

Background.prototype.render = function()
{
	c.drawImage(this.img, 0, 0, 400, 400, this.x, this.y, this.width, this.height);
	c.drawImage(this.img, 0, 0, 400, 400, this.x2, 0, this.width, this.height);
}