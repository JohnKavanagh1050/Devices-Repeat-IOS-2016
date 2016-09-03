function Rectangle(x, y, width, height)
{
	this.left = x;
    this.top = y;
    this.width = width;
    this.height = height;
    this.right = (this.left + this.width);
    this.bottom = (this.top + this.height);
}