import { A } from "./A";

export class B extends A{
    public prop: string;
    constructor(){
        super();
        this.prop = 'B:delivered'
    }
}