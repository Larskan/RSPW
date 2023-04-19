import { Hand } from "./Hand";
import { Result } from "./Result";

class Game
{
   private clientHand : Hand;
   private computerHand : Hand;
   private gameResult : Result;

   public setFairRandomComputerHand():void
   {
    const MAXIMUMHANDVALUE : number = 3;
    const randomPick : number = Math.floor(Math.random() * (MAXIMUMHANDVALUE+1));
    if (randomPick === 0)
       this.computerHand = Hand.Paper;
    else if(randomPick === 1)
       this.computerHand = Hand.Rock;
    else if(randomPick === 2)
       this.computerHand = Hand.Scissors;
    else if(randomPick === 3)
       this.computerHand = Hand.Well;
    else
    {
      console.log("Error");
    }
   }

   public setClientHand(value:number):void
   {
      if (value === 0)
         this.clientHand = Hand.Paper;
      else if(value === 1)
         this.clientHand = Hand.Rock;
      else if(value === 2)
         this.clientHand = Hand.Scissors
      else
      {
        this.clientHand = Hand.Well;
      }
   }

   public setGameResult(result:Result)
   {
      this.gameResult=result;
   }

   public getClientHand():Hand
   {
     return this.clientHand;
   }

   public getComputerHand():Hand
   {
    return this.computerHand;
   }

   public getGameResult():Result
   {
      return this.gameResult;
   }


   public evaluate() : Result
   {
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

     if (this.clientHand === this.computerHand)
     {
        return Result.Draw;
     }
     else if(this.clientHand === Hand.Paper && this.computerHand === Hand.Rock || this.computerHand === Hand.Well)
     {
        return Result.Won;
     }
     else if(this.clientHand === Hand.Rock && this.computerHand === Hand.Scissors)
     {
        return Result.Won;
     }
     else if(this.clientHand === Hand.Scissors && this.computerHand === Hand.Paper)
     {
        return Result.Won;
     }
     else if(this.clientHand === Hand.Well && this.computerHand === Hand.Rock || this.computerHand === Hand.Scissors)
     {
      return Result.Won;
     }
     else
     {
        return Result.Lost;
     }

    //#endregion

   }

   public displayResultInOneLine(value : Result) : string
   {

      let line : string = "<html><body><h1>";

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


      if (this.clientHand === Hand.Paper)
      {
         line = line + "User: Paper. <hr/> ";
      }
      else if (this.clientHand === Hand.Rock)
      {
         line = line + "User: Rock. <hr/> ";
      }
      else if(this.clientHand === Hand.Well)
      {
         line = line + "User: Well. <hr/>";
      }
      else
      {
         line = line + "User: Scissors. <hr/> ";
      }


      // Computer

      if (this.computerHand === Hand.Paper)
      {
         line = line + "Computer: Paper. <hr/>";
      }
      else if (this.computerHand === Hand.Rock)
      {
         line = line + "Computer: Rock. <hr/>";
      }
      else if(this.computerHand === Hand.Well)
      {
         line = line + "Computer: Well. <hr/>";
      }
      else
      {
         line = line + "Computer: Scissors. <hr/>";
      }


      if (value === Result.Draw)
      {
         line = line +  "Same option chosen. DRAW!";
      }
      else if (value === Result.Won)
      {
         line = line + "User WON!";
      }
      else
      {
         line = line + "User LOST!";
      }


     //#endregion

      line = line + "</h1></body></html>"; // ends the header, body and html that was started in first line
      return line;
   }

}export {Game}