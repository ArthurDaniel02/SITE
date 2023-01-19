class Player {
    constructor() {//Serve para definir as propriedades do jogador
      this.name = null;
      this.sc = null;
      this.positionX = 0;
      this.positionY = 0;
      this.rank = 0;
      this.fuel = 185;
      this.score = 0;
    }
  
    addPlayer() {//Serve para aplicar as propriedades do jogador e definir o spawn do player
      var playerIndex = "players/player" + this.sc;
  
      if (this.sc === 1) {
        this.positionX = 1500;
      } else {
        this.positionX = 1700;
      }
  
      database.ref(playerIndex).set({
        name: this.name,
        positionX: this.positionX,
        positionY: this.positionY,
        rank: this.rank,
        score: this.score
      });
    }
  
    getDistance() {// Trazendo os jogadores para as posições que foram definidas
        database.ref("players/player" + this.sc).on("value", data => {
        var data = data.val();
        this.positionX = data.positionX;
        this.positionY = data.positionY;
      });
    }
  
    getCount() {// Serve para trazer o número que define cada jogador
        database.ref("selectCharacter").on("value", data => {
        selectCharacter = data.val();
      });
    }
  
    updateCount(count) {// Serve para mandar o número de cada jogador de volta para a database
      database.ref("/").update({
        selectCharacter: count
      });
    }
  
    update() {// Serve para atualizar constantemente os dados de cada jogador na database
      database.ref("players/player" + this.sc).update({
        positionX: this.positionX,
        positionY: this.positionY,
        rank: this.rank,
        score: this.score,
      });
    }
  
    static getPlayersInfo() {// Serve para trazer as informações e armazenar na nova variável
      database.ref("players").on("value", data => {
        allPlayers = data.val();
      });
    }
  
    getMotosAtEnd() {// Serve para reconhecer o rank final de cada jogador
      database.ref("motosAtEnd").on("value", data => {
        this.rank = data.val();
      });
    }
  
    static updateMotosAtEnd(rank) {// Serve para mandar a informação do rank final para a database
      database.ref("/").update({
        motosAtEnd: rank
      });
    }
  }
  