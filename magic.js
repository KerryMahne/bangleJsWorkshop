require("Storage").write("+d20",{
  "name":"Digital D20 man",
  "src":"-d20"
});

require("Storage").write("-d20",`
  function rollDice() {
    return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  }

  function mainView() {
    g.clear();
    g.setFontAlign(0, 0);
    g.setFont("Vector", 30);
    g.drawString("Roll", g.getWidth() / 2, g.getHeight() / 4);
    g.drawString("HP", g.getWidth() / 2, g.getHeight() / 4 * 3);

    setWatch(() => {
      clearWatch();
      rollView();
    }, BTN1, {repeat:true});

    setWatch(() => {
      clearWatch();
      hpView(20);
    }, BTN3, {repeat:true});
  }

  function rollView() {
    g.clear();
    g.setFont("Vector", 20);
    var roll = rollDice();
    g.drawString("You rolled:", g.getWidth() / 2, g.getHeight() / 3);
    g.drawString(roll, g.getWidth() / 2, g.getHeight() / 3 * 2);

    setWatch(() => {
      clearWatch();
      mainView();
    }, BTN2, {repeat:true});
  }

  function hpView(hp) {

    g.clear();
    g.setFont("Vector", 60);
    g.drawString(hp, g.getWidth() / 2, g.getHeight() / 2);
    if (hp == 0) {
      g.clear();
      g.setFont("Vector", 30);
      g.drawString("You die!", g.getWidth() / 2, g.getHeight() / 2);
      setTimeout(() => {
        clearWatch();
        mainView();
      }, 1000);
    }

    setWatch(() => {
      clearWatch();
      mainView();
    }, BTN2, {repeat:true});

    setWatch(() => {
      clearWatch();
      hpView(++hp);
    }, BTN1, {repeat:true});

    setWatch(() => {
      clearWatch();
      hpView(--hp);
    }, BTN3, {repeat:true});
  }

  mainView();
`);
