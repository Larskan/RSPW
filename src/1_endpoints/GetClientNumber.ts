import { BaseHandler } from "./BaseHandler";

// Reads the choise of the client
class GetClientNumber extends BaseHandler
{

    // assignment: There is a minor bug in the code if you try to  play/ggjhgg!! can this be fixed?
    // Option: Typeof check
    public handle(request:any, response:any):any
    {
        console.debug("GetClientNumber handler...");
        let clientNumber : number;
        try
        {
            clientNumber = parseInt(request.params.uid,10);  // radix = 10
        }catch(e)
        {
            response.status(404).json("Error, the value must be an integer");
        }
        if (clientNumber < 0 || clientNumber > 3 || isNaN(clientNumber))
        {
           response.status(404).json("Error, choose a value from 0 to 3");
        } else
        {
           super.getGame().setClientHand(clientNumber);
           super.getNext().handle(request, response); // GameEndPoint has which is Next
        }
    }
}
export {GetClientNumber}