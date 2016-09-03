function Animation(path, collAmount, rowAmount, fps, canvasID)
{
	this.image = new Image();
	this.path = path;
	this.cellWidth;
	this.cellHeight;
	this.listOfCells = [];
	this.collumnAmount = collAmount;
	this.rowAmount = rowAmount;
	var self = this;
	
	this.image.onload = function()
	{
		cellWidth = self.image.width / collAmount;
		cellHeight = self.image.height / rowAmount;
		self.init();
	};
	
	this.image.src = path;
	
	this.canvas = document.createElement('canvas');
	this.canvas.id = canvasID;
 	this.canvas.setAttribute("background-color", "blue");
 	this.canvas.setAttribute("style", "top:0px;left:0px;position:absolute;");
 	this.canvas.setAttribute("id", "AnimationCanvas");
	this.canvas.width = window.innerWidth;
	this.canvas.height = window.innerHeight;
	this.ctx = this.canvas.getContext("2d");
	this.canvas.style.zIndex = -1;
	
	//document.body.appendChild(this.canvas);
	
 	this.rec = new Rectangle(0, 0, self.cellWidth, self.cellHeight);
 	this.tickAmount = fps;
 	this.tick = 0;
 	this.cellid = 0;
 	this.rowId = 0;
 	this.ListOfAnimations = [];
 	this.IsLooping = true;
 	this.x = 0;
 	this.y = 0;
 	this.scale = 1;
 	this.rotation = 0;
 	this.isVisible = true;
 	this.atEndFrame = false;
 	this.isDead = false;
 	
}

Animation.prototype.update = function()
{

}

Animation.prototype.setRunningAnimation = function(name)
{
	for (var i = 0; i < this.ListOfAnimations.length; i++) 
	{
		if(this.ListOfAnimations[i]["name"] == name)
		{
			this.rowId = this.ListOfAnimations[i]["id"];
		}
	};

	for (var i = 0; i < this.listOfCells.length; i++) 
	{
		this.listOfCells[i].y = self.cellHeight*this.rowId;
	};
}

Animation.prototype.setVisiblity = function(isVisible)
{
	this.isVisible = isVisible;
}

Animation.prototype.stop = function()
{
	this.IsLooping = false;
}

Animation.prototype.start = function()
{
	this.IsLooping = true;
}

Animation.prototype.setPosition = function(x,y)
{
	this.x = x;
	this.y = y;
}

Animation.prototype.setRotation = function(angle)
{
	this.rotation = angle;
}

Animation.prototype.setScale = function(scale)
{
	this.scale = scale;
}

Animation.prototype.addAnimation = function(rowid,name)
{
	this.ListOfAnimations.push({"name":name, "id": rowid});
}

Animation.prototype.init = function()
{
	for (var i = 0; i < this.collumnAmount; i++) 
	{
		this.rec = new Rectangle(self.cellWidth * i,self.cellHeight * this.rowId, self.cellWidth, self.cellHeight);
		this.listOfCells.push(this.rec);
	};
}

Animation.prototype.draw = function()
{

	if(this.IsLooping)
	{
		//c.clearRect(0,0,this.canvas.width,this.canvas.height);
		this.tick++;
		if(this.tick > this.tickAmount)
		{
			this.tick = 0;
			this.cellid++
			if(this.cellid === this.collumnAmount)
			{
				this.atEndFrame = true;
				this.cellid = 0;
			}
			else
			{
				this.atEndFrame = false;
			}
		}
		c.save();
	    c.translate(this.x, this.y);
	    c.rotate(this.rotation * Math.PI / 180);
	    if(this.isVisible)
	    {
	    	c.drawImage(this.image, this.listOfCells[this.cellid].x, this.listOfCells[this.cellid].y, 
						this.listOfCells[this.cellid].width, this.listOfCells[this.cellid].height,
						-self.cellWidth / 2, -self.cellHeight / 2, self.cellWidth * this.scale, self.cellHeight * this.scale);
		}
		c.restore();
	}
}

Animation.prototype.clean = function()
{
	this.canvas.remove();
	this.isDead = true;
}