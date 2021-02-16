import {customerData} from "./data1";
import {accountData} from "./data1";
import Customer from "./customer";

export default class Accounts extends Customer{
    a_id:number;
    customer2:Customer;
    balance:number;
   constructor(obj3:accountData,obj:customerData,customer2:Customer){
       super(obj);
     this.a_id = obj3.a_id;
     this.balance= obj3.balance;
     this.customer2 = customer2;
   }

   getAccountID():number{
       return this.a_id;
   }

   getBalance():number{
       return this.balance;
   }

    getCustomer():customerData{
     return this.customer2;
    }
   
   setBalance(value:number):void{
     this.balance = value;
   }

   toString1():string{
      return this.toString() +"balance="+ this.balance; 
   }

   getCustomerName():string{
       return this.name;
   }

   deposit(damount:number):number{
       this.balance = this.balance + damount; 
       return this.balance;
   }

   withdraw(wAmount:number):number{
      if(this.balance >= wAmount){
        this.balance= this.balance - wAmount;
        return this.balance;
      }
      else {
        console.log("Withdraw amount exceeds the current balance.");
       return -1;
    }
   }
}
