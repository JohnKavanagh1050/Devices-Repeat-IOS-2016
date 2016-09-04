function Player(x, y, filename)
{
	this.x = x;
	this.y = y;
	this.velo = [0,0];
	this.radius = 300;
	this.img = new Image();
	this.img.src = filename;
	this.endPointX;
	this.endPointY;
	this.deltaX;
	this.deltaY;
	this.angleInDegrees;
	this.angleInRad;
	this.speed = 300;
	this.distance = 0;
	this.targetX;
	this.targetY;
}

Player.prototype.movement = function(destX, destY, deltatime)
{
	this.endPointX = destX;
		this.endPointY = destY;
		this.deltaX = destX - this.x;
		this.deltaY = destY - this.y;
		this.angleInDegrees = Math.atan2(this.deltaY, this.deltaX) * 180 / Math.PI;
		this.angleInRad = Math.atan2(this.deltaY, this.deltaX);
	    var currentX = this.endPointX - window.innerWidth/2;
		var currentY = this.endPointY - window.innerHeight/2;
		currentDistance = Math.floor(Math.sqrt(currentX * currentX + currentY * currentY));

		if(currentDistance > 5)
		{
			if(this.x < destX)
			{
				this.x += (this.speed * Math.cos(this.angleInRad)) * deltatime;
			}
			else if(this.x > destX)
			{
				this.x -= -(this.speed * Math.cos(this.angleInRad)) * deltatime;
			}
			if(this.y < destY)
			{
				this.y += (this.speed * Math.sin(this.angleInRad)) * deltatime;
			}
			if(this.y > destY)
			{
				this.y -= -(this.speed * Math.sin(this.angleInRad)) * deltatime;
			}
		}
		//world boundaries to stop player from walking off the side
	
}

Player.prototype.render = function()
{

	c.drawImage(this.img, 0, 0, 200, 200, this.x, this.y, this.radius, this.radius);//needs to get
}