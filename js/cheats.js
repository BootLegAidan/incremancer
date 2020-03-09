var model = GameModel;
var cheats = document.getElementByID('cheats');

cheats.getElementsByTagName('button')[0].onclick = function(){
  this.model.addBlood(1000000)
  console.log("Added Blood")
}
