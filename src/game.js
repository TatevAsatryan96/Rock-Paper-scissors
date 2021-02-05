class Warrior {
    constructor(minPower, maxPower, health) {
      this.minPower = minPower;
      this.maxPower = maxPower;
      this.health = health;
    }
    attack = () => {
      return (
        Math.floor(Math.random() * (this.maxPower - this.minPower)) +
        this.minPower
      );
    };
  }
  
  /*class B extends Warrior {      // inheritnce
      
      constructor() {
        super();
        this.name = " ";
      }
    }
  */
  const player1 = new Warrior(10, 20, 30); //instance
  const player2 = new Warrior(10, 20, 30);
  
  const play = () => {
    while (player1.health > 0 && player2.health > 0) {
      let attack1 = player1.attack();
      let attack2 = player2.attack();
  
      if (attack1 > attack2) {
        player2.health--;
        console.log(
          "Player1 health : " +
            player1.health +
            " " +
            "Player2 health : " +
            player2.health
        );
      } else if (attack1 < attack2) {
        player1.health--;
        console.log(
          "Player1 health : " +
            player1.health +
            " " +
            "Player2 health : " +
            player2.health
        );
      } else {
        player1.health--;
        player2.health--;
        console.log(
          "Player1 health : " +
            player1.health +
            " " +
            "Player2 health : " +
            player2.health
        );
      }
    }
  
    if (player1.health === 0 && player2.health === 0) {
      console.log("Draw, You can play again");
    } else if (player1.health === 0) {
      console.log(" Winner is player2 !!!");
    } else {
      console.log(" Winner is player1 !!!");
    }
  };
  
  play();