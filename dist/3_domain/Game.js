"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
class Game {
    setFairRandomComputerHand() {
        const MAXIMUMHANDVALUE = 3;
        const randomPick = Math.floor(Math.random() * (MAXIMUMHANDVALUE + 1));
        if (randomPick === 0)
            this.computerHand = 0 /* Hand.Paper */;
        else if (randomPick === 1)
            this.computerHand = 1 /* Hand.Rock */;
        else if (randomPick === 2)
            this.computerHand = 2 /* Hand.Scissors */;
        else if (randomPick === 3)
            this.computerHand = 3 /* Hand.Well */;
        else {
            console.log("Error");
        }
    }
    setClientHand(value) {
        if (value === 0)
            this.clientHand = 0 /* Hand.Paper */;
        else if (value === 1)
            this.clientHand = 1 /* Hand.Rock */;
        else if (value === 2)
            this.clientHand = 2 /* Hand.Scissors */;
        else {
            this.clientHand = 3 /* Hand.Well */;
        }
    }
    setGameResult(result) {
        this.gameResult = result;
    }
    getClientHand() {
        return this.clientHand;
    }
    getComputerHand() {
        return this.computerHand;
    }
    getGameResult() {
        return this.gameResult;
    }
    evaluate() {
        // Well beats Scissor and Rock
        // Paper beats Well and Rock
        // Rock beats Scissor
        // Scissor beats Paper
        // fix the switch expression to make it work, true causes error
        //#region Switch Case
        /*
        switch(true)
        {
           case this.clientHand === this.computerHand:
              return Result.Draw;
           case this.clientHand === Hand.Paper && this.computerHand === Hand.Rock || this.computerHand === Hand.Well:
              return Result.Won;
           case this.clientHand === Hand.Rock && this.computerHand === Hand.Scissors:
              return Result.Won;
           case this.clientHand === Hand.Scissors && this.computerHand === Hand.Paper:
              return Result.Won;
           case this.clientHand === Hand.Well && this.computerHand === Hand.Rock || this.computerHand === Hand.Scissors:
              return Result.Won;
           default:
              return Result.Lost;
        }
        */
        //#endregion
        //#region else if statements
        if (this.clientHand === this.computerHand) {
            return 0 /* Result.Draw */;
        }
        else if (this.clientHand === 0 /* Hand.Paper */ && this.computerHand === 1 /* Hand.Rock */ || this.computerHand === 3 /* Hand.Well */) {
            return 1 /* Result.Won */;
        }
        else if (this.clientHand === 1 /* Hand.Rock */ && this.computerHand === 2 /* Hand.Scissors */) {
            return 1 /* Result.Won */;
        }
        else if (this.clientHand === 2 /* Hand.Scissors */ && this.computerHand === 0 /* Hand.Paper */) {
            return 1 /* Result.Won */;
        }
        else if (this.clientHand === 3 /* Hand.Well */ && this.computerHand === 1 /* Hand.Rock */ || this.computerHand === 2 /* Hand.Scissors */) {
            return 1 /* Result.Won */;
        }
        else {
            return -1 /* Result.Lost */;
        }
        //#endregion
    }
    displayResultInOneLine(value) {
        let line = "<html><body><h1>";
        // User
        //#region Switch case
        /*
        switch(true)
        {
           case this.clientHand === Hand.Paper:
              return line = line + "User: Paper. <hr/> ";
           case this.clientHand === Hand.Rock:
              return line = line + "User: Rock. <hr/> ";
           case this.clientHand === Hand.Well:
              return line = line + "User: Well. <hr/>";
           case this.clientHand === Hand.Scissors:
              return line = line + "User: Scissors. <hr/>";
  
           case this.computerHand === Hand.Paper:
              return line = line + "Computer: Paper. <hr/> ";
           case this.computerHand === Hand.Rock:
              return line = line + "Computer: Rock. <hr/> ";
           case this.computerHand === Hand.Well:
              return line = line + "Computer: Well. <hr/>";
           case this.computerHand === Hand.Scissors:
              return line = line + "Computer: Scissors. <hr/>";
  
           case value === Result.Draw:
              return line = line + "Same option chosen. DRAW!";
           case value === Result.Won:
              return line = line + "User WON!";
           case value === Result.Lost:
              return line = line + "User LOST!";
           default:
              return line = line + "Something went wrong!";
        }
        */
        //#endregion
        //#region else if statements
        // let is to declare variable that is changed, instead of const
        // let line : string = "<html><body><h1>"; // Makes it html and puts it into body and makes it header 1
        // User
        if (this.clientHand === 0 /* Hand.Paper */) {
            line = line + "User: Paper. <hr/> ";
        }
        else if (this.clientHand === 1 /* Hand.Rock */) {
            line = line + "User: Rock. <hr/> ";
        }
        else if (this.clientHand === 3 /* Hand.Well */) {
            line = line + "User: Well. <hr/>";
        }
        else {
            line = line + "User: Scissors. <hr/> ";
        }
        // Computer
        if (this.computerHand === 0 /* Hand.Paper */) {
            line = line + "Computer: Paper. <hr/>";
        }
        else if (this.computerHand === 1 /* Hand.Rock */) {
            line = line + "Computer: Rock. <hr/>";
        }
        else if (this.computerHand === 3 /* Hand.Well */) {
            line = line + "Computer: Well. <hr/>";
        }
        else {
            line = line + "Computer: Scissors. <hr/>";
        }
        if (value === 0 /* Result.Draw */) {
            line = line + "Same option chosen. DRAW!";
        }
        else if (value === 1 /* Result.Won */) {
            line = line + "User WON!";
        }
        else {
            line = line + "User LOST!";
        }
        //#endregion
        line = line + "</h1></body></html>"; // ends the header, body and html that was started in first line
        return line;
    }
}
exports.Game = Game;
//# sourceMappingURL=Game.js.map