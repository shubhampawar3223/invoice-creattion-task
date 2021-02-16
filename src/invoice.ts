import {customerData} from "./data1";
import {invoiceData} from "./data1";
import Customer from "./customer";

export default class Invoice extends Customer{
    i_ID:number;
    cust:Customer;
    amount:number;
    constructor(obj:customerData, obj1:invoiceData, customer:Customer){
           super(obj);   
          this.i_ID=  obj1.i_ID; 
          this.amount= obj1.amount;
          this.cust= customer;

    }
    
    getInvoiceID():number{
          return this.i_ID;
    }

    getInvoiceAmount():number{
        return this.amount;
    }

    setAmount(amount:number):void{
        this.amount=amount;
    }

    getCustomerName():string{
        return this.getName();
    }

    getAmountAfterDiscount():number{
       let discount = this.getDiscount();
       let amount = this.amount;
       let cost = amount- ((discount*amount)/100)
       return cost;            
    }

    setCustomer(settingObj:Customer):void{
       this.cust = settingObj;          
    }

    getCustomer():customerData{
        return this.cust;
    }
}
