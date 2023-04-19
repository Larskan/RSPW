import { Result } from "../3_domain/Result";
import { DisplayStrategy } from "./DisplayStrategy";


class Html implements DisplayStrategy{
    display(gameResult:Result):string
    {
        let line:string = "<html<body><h2>"
        line = line + gameResult;
        line = line + "</h2></body></html>"
        return line;
    }
}export{Html}