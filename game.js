const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(nestArr) {
    this.fieldArr = nestArr;
    this.field = nestArr.join("\n").replace(/,/g, "");
    this.FieldDimensions = {
      Height: nestArr.length,
      Width: nestArr[0].length,
      Area: nestArr.length * nestArr[0].length + nestArr.length - 1,
    };
  }

  play() {
    let win = false;
    let loss = false;
    let card = (() => {
      return this.field;
    })();
    console.log(card);

    while (win != true && loss != true) {
      let move = prompt("Where will you move? (right, left, up, down)");
      let newCardArr = [];
      //Position
      let playerPotition = card.indexOf(pathCharacter);
      let toTheLeft = playerPotition - 1;
      let toTheRight = playerPotition + 1;
      let toTheTop = playerPotition - this.FieldDimensions.Width - 1;
      let toTheBottom = playerPotition + this.FieldDimensions.Width + 1;
      console.log("to the right = " + toTheRight);
      if (move === "right") {
        if (card[toTheRight] == fieldCharacter) {
          for (let i = 0; i < card.length; i++) {
            if (i === toTheRight) {
              newCardArr.push(card[playerPotition]);
            } else if (i === playerPotition) {
              newCardArr.push(card[toTheRight]);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
        } else if (card[toTheRight] == hole) {
          for (let i = 0; i < card.length; i++) {
            if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          loss = true;
        } else if ((toTheRight + 1) % (this.FieldDimensions.Width + 1) === 0) {
          for (let i = 0; i < card.length; i++) {
            if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          loss = true;
        } else if (card[toTheRight] == hat) {
          for (let i = 0; i < card.length; i++) {
            if (i === toTheRight) {
              newCardArr.push("†");
            } else if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          win = true;
        }
      } else if (move === "left") {
        if (card[toTheLeft] == fieldCharacter) {
          for (let i = 0; i < card.length; i++) {
            if (i === toTheLeft) {
              newCardArr.push(card[playerPotition]);
            } else if (i === playerPotition) {
              newCardArr.push(card[toTheLeft]);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
        } else if (card[toTheLeft] == hole) {
          for (let i = 0; i < card.length; i++) {
            if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          loss = true;
        } else if (
          (toTheLeft + 1) % (this.FieldDimensions.Width + 1) === 0 ||
          toTheLeft === -1
        ) {
          for (let i = 0; i < card.length; i++) {
            if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          loss = true;
        } else if (card[toTheLeft] == hat) {
          for (let i = 0; i < card.length; i++) {
            if (i === toTheLeft) {
              newCardArr.push("†");
            } else if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          win = true;
        }
      } else if (move === "up") {
        if (card[toTheTop] == fieldCharacter) {
          for (let i = 0; i < card.length; i++) {
            if (i === toTheTop) {
              newCardArr.push(card[playerPotition]);
            } else if (i === playerPotition) {
              newCardArr.push(card[toTheTop]);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
        } else if (card[toTheTop] == hole) {
          for (let i = 0; i < card.length; i++) {
            if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          loss = true;
        } else if (toTheTop < 0) {
          for (let i = 0; i < card.length; i++) {
            if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          loss = true;
        } else if (card[toTheTop] == hat) {
          for (let i = 0; i < card.length; i++) {
            if (i === toTheTop) {
              newCardArr.push("†");
            } else if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          win = true;
        }
      } else if (move === "down") {
        if (card[toTheBottom] == fieldCharacter) {
          for (let i = 0; i < card.length; i++) {
            if (i === toTheBottom) {
              newCardArr.push(card[playerPotition]);
            } else if (i === playerPotition) {
              newCardArr.push(card[toTheBottom]);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
        } else if (card[toTheBottom] == hole) {
          for (let i = 0; i < card.length; i++) {
            if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          loss = true;
        } else if (toTheBottom > this.FieldDimensions.Area - 1) {
          for (let i = 0; i < card.length; i++) {
            if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          loss = true;
        } else if (card[toTheBottom] == hat) {
          for (let i = 0; i < card.length; i++) {
            if (i === toTheBottom) {
              newCardArr.push("†");
            } else if (i === playerPotition) {
              newCardArr.push(fieldCharacter);
            } else {
              newCardArr.push(card[i]);
            }
          }
          card = newCardArr.join().replace(/,/g, "");
          win = true;
        }
      }
      console.log(card);
    }
    if (loss === true) {
      console.log("You lost!");
    }
    if (win === true) {
      console.log("You win!");
    }
  }

  static generateField(level = 1) {
    const rows = parseInt(prompt("How many Rows?", "10"));
    const columns = parseInt(prompt("How many Columns?", "4"));
    let generatedField = [];

    function random(item) {
      return Math.floor(Math.random() * item);
    }

    let hatRow = random(rows);
    let playerRow = random(rows);
    let hatCol = random(columns);
    let playerCol = random(columns);
    let holeLevel
    for (let i = 0; i < rows; i++) {
      let generatedRow = [];
      
      if (i === hatRow && hatRow != playerRow) {
        for (let j = 0; j < columns; j++) {
          if (j === hatCol) {
            generatedRow.push(hat);
          } else {
            holeLevel = random (10);
            if(holeLevel < 3){
              generatedRow.push(hole)
            }
            else{
              generatedRow.push(fieldCharacter);
            }
          }
        }
      }
      else if (i === playerRow && playerRow != hatRow){
        for (let j = 0; j < columns; j++) {
          if (j === playerCol) {
            generatedRow.push(pathCharacter);
          } else {
             holeLevel = random (10);
            if(holeLevel < 3){
              generatedRow.push(hole)
            }
            else{
              generatedRow.push(fieldCharacter);
            }
          }
        }
      }
      else if ( playerRow === i && playerRow === hatRow){
        if(playerCol === hatCol){
          console.log("Try Again")
        }
        for (let j = 0; j < columns; j++) {
          if (j === playerCol) {
            generatedRow.push(pathCharacter);
          } 
          else if(j === hatCol){
            generatedRow.push(hat)
          }
          else  {
             holeLevel = random (10);
            if(holeLevel < 3){
              generatedRow.push(hole)
            }
            else{
              generatedRow.push(fieldCharacter);
            }
          }
        }
      }
      else{
        for (let j = 0; j < columns; j++) {
          holeLevel = random (10);
          if(holeLevel < 3){
            generatedRow.push(hole)
          }
          else{
            generatedRow.push(fieldCharacter);
          }
        }
      }

      generatedField.push(generatedRow);
    }
    return generatedField;
  }
}

const myField = new Field([
  ["*", "░", "░", "░", "O", "░", "░", "░", "░"],
  ["░", "O", "O", "O", "O", "O", "░", "O", "O"],
  ["░", "O", "░", "░", "░", "O", "░", "░", "░"],
  ["░", "O", "░", "O", "░", "░", "░", "O", "░"],
  ["░", "░", "░", "░", "O", "░", "░", "O", "^"],
]);

//myField.play()
//Field.generateField();

newField = new Field(Field.generateField(20,20))
newField.play()

