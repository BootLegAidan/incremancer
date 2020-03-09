var model = GameModel;
var cheats = document.getElementByID('cheats');

cheats.getElementsByTagName('button')[0].onclick = function(){
  model.addBlood(1000000)
}
