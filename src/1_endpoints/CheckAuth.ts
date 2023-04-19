import { BaseHandler } from "./BaseHandler";
import {Guard} from "./Guard";


// Controls that the user is authorized to play
class CheckAuth extends BaseHandler{
    public handle(request:any, response:any):any{
        console.debug("CheckAuth handler...");

        if (Guard.hasSession)
        {
            super.getNext().handle(request, response);
        }
    }
}
export{CheckAuth}