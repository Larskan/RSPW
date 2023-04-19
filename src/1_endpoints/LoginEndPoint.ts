import { Session } from "./Session";


class LoginEndPoint
{
    public static evaluate(request:any, response:any)
    {
        try{
            // action 0 removes previous tokens
            if(request.cookies){
                request.cookies.tokenKey=null;
            }

            // action 1
            const userName:string = request.params.uid;

            // action 2
            let accepted:boolean = false; // You arent accepted yet

            if(userName===process.env.USER1 || userName===process.env.USER2)
            {
                accepted=true;
            }
            else{
                return response.status(403).json("Error, this user is not authorized");
            }

            // action 3,4,5
            if(accepted)
            {
                const token:string = request.cookies.tokenKey;
                // Session.getUserName(token);

                if(token)
                {
                    // response.cookie('tokenKey',Session.updateCounter(token));

                }else{
                    const thisToken:string = Session.generateToken(userName);
                    console.debug(Session.getUserName(thisToken));
                    response.cookie('tokenkey',thisToken);
                }
                return response.status(200).json("The user is logged in");
            }


        } catch(e){
            console.error(e);
        }
    }
}export{LoginEndPoint}