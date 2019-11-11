function rollDice() {
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

function mainView() {
  g.clear();
  g.setFontAlign(0, 0); // center font
  g.setFont("Vector", 30); // vector font, 80px
  g.drawString("Roll", g.getWidth() / 2, g.getHeight() / 4);
  g.drawString("HP", g.getWidth() / 2, g.getHeight() / 4 * 3);

  setWatch(() => {
    rollView();
  }, BTN1, {repeat:true});
  
  setWatch(() => {
    hpView();
  }, BTN3, {repeat:true});
}

function rollView() {
  g.clear();
  g.setFont("Vector", 20); // vector font, 80px
  var roll = rollDice();
  g.drawString("You rolled:", g.getWidth() / 2, g.getHeight() / 3);
  g.drawString(roll, g.getWidth() / 2, g.getHeight() / 3 * 2);

  setWatch(() => {
    mainView();
  }, BTN2, {repeat:true});
}

function hpView() {
  var hp = 20;
  
  g.clear();
  g.setFont("Vector", 60); // vector font, 80px
  g.drawString(hp, g.getWidth() / 2, g.getHeight() / 2);
  
  setWatch(() => {
    mainView();
  }, BTN2, {repeat:true});
  
  setWatch(() => {
    hp++;
  }, BTN1, {repeat:true});
  
  setWatch(() => {
    hp--;
  }, BTN3, {repeat:true});
}

mainView();
