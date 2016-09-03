function CollisionManager()
{

}

CollisionManager.prototype.CheckCollision = function(objectA, objectB)
{
	if (objectA.x < objectB.x + objectB.radius &&
		objectA.x + objectA.radius > objectB.x &&
		objectA.y < objectB.y + objectB.radius &&
		objectA.radius + objectA.y > objectB.y) 
	{
		return true;
	}
	
	return false;
}