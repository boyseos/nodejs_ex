function Initalizer(){
	this.animal = function(){
		Animal.prototype.setName = function(name){_name = name}
		Animal.prototype.getName = function(){return _name}
	}
	this.human = function(){
		Human.prototype = new Animal()
		Human.prototype.test = function(){return _name}
	}
	this.superHero = function(){
		SuperHero.prototype = new Human()
		SuperHero.prototype.exam = function(){return _name}
	}
}