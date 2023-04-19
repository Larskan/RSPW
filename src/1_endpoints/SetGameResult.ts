import { Html } from "../2_domain_services/Html";
import { DisplayStrategy } from "../2_domain_services/DisplayStrategy";
import { Result } from "../3_domain/Result";
import { BaseHandler } from "./BaseHandler";
import { SingleLine } from "../2_domain_services/SingleLine";

// Returns the result of the game
class SetGameResult extends BaseHandler{

     public handle(request:any,response:any):any
     {
         console.debug("SetGameResult handler...");
         const value:Result = super.getGame().getGameResult();

         // When its launched it makes a choice of strategy
         let ds:DisplayStrategy = new Html(); // default
         if(process.env.STRATEGY === '1')
         {
            ds = new SingleLine();
         }

         // response need to be ds
         response.status(200).send(super.getGame().displayResultInOneLine(value));
     }

}export {SetGameResult}