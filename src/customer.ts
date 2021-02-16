import {customerData} from "./data1";

export default class Customer{
    ID:number;
    name:string;
    discount:number;
    constructor(obj:customerData){
        this.ID= obj.ID;
        this.name= obj.name;
        this.discount = obj.discount;
    }    

    getID():number{
        return this.ID;
    }

    
    getName():string{
        return this.name;
    }

    getDiscount():number{
        return this.discount;
    }
    
    setDiscount(discount:number):void{
        this.discount = discount;
    }

     
    toString():string{
        return this.name+"("+this.ID+")";
    }
}