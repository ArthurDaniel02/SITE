class Form {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
      this.playButton = createButton("Jogar");
      this.titleImg = createSprite(120, 50);
      this.titleImg.addImg('ae', titleImg)
      this.greeting = createElement("h2");
    }
  
    setElementsPosition() {
     // this.titleImg.position(120, 50);
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        var message = `
        Olá ${this.input.value()}
        </br>espere o outro jogador entrar...`;
        this.greeting.html(message);
        selectCharacter += 1;
        player.name = this.input.value();
        player.index = selectCharacter;
        player.addPlayer();
        player.updateCount(selectCharacter);
        player.getDistance();
       if(selectCharacter==2){
          gameState1 = 1
       }
      
      });
    }
  
    display() {
      this.setElementsPosition();
      this.handleMousePressed();
    }
  }