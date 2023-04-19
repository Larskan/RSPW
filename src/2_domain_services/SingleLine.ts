import { Result } from "../3_domain/Result";
import { DisplayStrategy } from "./DisplayStrategy";

class SingleLine implements DisplayStrategy{
    display(gameResult:Result):string
    {
        let line:string = ""
        line = line + gameResult;
        return line;
    }
}export{SingleLine}