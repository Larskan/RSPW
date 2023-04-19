import { Result } from "../3_domain/Result";

interface DisplayStrategy{
    display(gameResult:Result):string;
}export{DisplayStrategy}