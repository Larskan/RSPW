import { Session } from "./Session";


const MAXNUMBEROFPLAYS:number = 5;
class Guard
{
    public static hasSession(request:any):boolean
    {
        const token:string = request.cookies.tokenKey;
        if(token)
        {
            console.debug("The user: "+Session.getUserName(token)+"can play ");
            return true;
        }
        return false;
    }

    public static canContinue(request:any):boolean
    {
        const token:string = request.cookies.tokenKey;
        // todo
        return false;
    }
}
export {Guard}