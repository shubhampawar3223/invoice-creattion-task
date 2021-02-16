import {customerData} from "./data1";
import {invoiceData} from "./data1";
import {accountData} from "./data1";
import Customer from "./customer";
import Invoice from "./invoice";
import Accounts from "./accounts"; 

let i=1;
let customer,accountObj;
let putBalance= document.createElement("span");
let bal= document.querySelector(".checkBalance");
putBalance.style.padding ="4px";
putBalance.style.border = "2px solid  black";
let ele = document.querySelector(".cb");

let name, a_id;
bal.addEventListener("click",()=>{
    
    if(name === undefined || a_id === undefined){
        createObj();
   }
    
   putBalance.innerHTML = "Balance: "+ accountObj.getBalance()
   ele.append(putBalance);   
    

})

let damount= document.querySelector(".dAmount ");
damount.addEventListener("click",()=>{
    if(name === undefined || a_id === undefined){
        createObj();
       }
    
      let da = +(<HTMLInputElement>document.querySelector("#deposit")).value; 
})



let wamount= document.querySelector(".wAmount");
wamount.addEventListener("click",()=>{

    if(name === undefined || a_id === undefined){
        createObj();
       }
    
    let wa = +(<HTMLInputElement>document.querySelector("#Withdraw")).value; 
    if(accountObj.withdraw(wa) === -1){
        alert("Withdraw amount exceeds the current balance.");
    }
})

function createObj(){
    name = (<HTMLInputElement>document.getElementById("_name")).value;
    a_id = +(<HTMLInputElement>document.getElementById("a_id")).value;
    i++;
    let obj:customerData={
        ID:i,
        name,
        discount:0
    }  

    let obj3:accountData={
        a_id,
        balance:0
    }
    customer = new Customer(obj);
    accountObj = new Accounts(obj3,obj,customer);
    putBalance.innerHTML = "Balance: "+ accountObj.getBalance()
    ele.append(putBalance);
}

let k = document.getElementById("gInvoice")
k.addEventListener("click",()=>{
    let name = (<HTMLInputElement>document.getElementById("name")).value;
    let discount = +(<HTMLInputElement>document.getElementById("discount")).value;
    let amount = +(<HTMLInputElement>document.getElementById("amount")).value;
        let obj1:invoiceData={
            i_ID:i,
            amount
        }
            
        let obj:customerData={
            ID:i,
            name,
            discount
        }
        
        let obj3:accountData={
            a_id: i,
            balance:0
        
        }
        
        i++;
        let customer = new Customer(obj);
        let invoiceObj = new Invoice(obj, obj1,customer);
        let total=invoiceObj.getAmountAfterDiscount();
        let accountObj = new Accounts(obj3,obj,customer);
        createInvoice(i,name, discount,amount,total);
})

// })
        

//})
let invoiceDiv = document.createElement("div");
function createInvoice(i:number,name:string, discount:number, amount:number,total:number){
    invoiceDiv.innerHTML="";
    invoiceDiv.setAttribute("class","offset-md-1 offset-lg-3 offset-xl-3 col-12 col-md-10 col-lg-6 col-xl-6 border border-dark bg-warning" )
    invoiceDiv.style.marginTop= "5%"
    let headerDiv = document.createElement("div");
    let idElement = document.createElement("span");
    idElement.innerHTML = "Invoice Id.: " + i;

    let pElement = document.createElement("p");
    pElement.setAttribute("class","text-center");
    pElement.style.fontSize= "35px";
    pElement.innerHTML = "Invoice";
    pElement.style.fontWeight="bold";
    pElement.style.fontFamily="'element1eader', serif";
    headerDiv.append(idElement,pElement)

    let invoiceRowElement = document.createElement("div");
    invoiceRowElement.setAttribute("class","offset-1 col-10");
    
    let nameElement = document.createElement("div");
    let nameElement1=createInvoiceElements("p","inline","25px","'element1eader', serif","Name: ")  
    let nameElement2 = createInvoiceElements("p","inline","20px","'Ubuntu', sans-serif",name)
    nameElement.style.borderBottom ="thin solid black";
    nameElement.append(nameElement1,nameElement2);
    
    let billElement1 =  document.createElement("div")
    let billElement11=createInvoiceElements("p","inline","25px","'element1eader', serif","Original Amount: ") 
    let billElement12 = createInvoiceElements("p","inline","20px","'Ubuntu', sans-serif",""+amount);
    billElement1.append(billElement11,billElement12);
    let billElement2 =  document.createElement("div")
    let billElement21=createInvoiceElements("p","inline","25px","'element1eader', serif","Discount Percentage: ") 
    let billElement22 = createInvoiceElements("p","inline","20px","'Ubuntu', sans-serif",""+discount);
    billElement2.append(billElement21,billElement22);
    billElement2.style.borderBottom ="thin solid black"; 
    let billElement3 =  document.createElement("div")
    billElement3.setAttribute("class","mb-3")
    let billElement31=createInvoiceElements("p","inline","25px","'element1eader', serif","Payable Amount: ") 
    let billElement32 = createInvoiceElements("p","inline","20px","'Ubuntu', sans-serif",""+total);
    //billElement3.style.borderBottom ="thin solid black";
    billElement3.append(billElement31,billElement32);

       let mainClass = document.querySelector(".main");
     mainClass?.append(invoiceDiv);  
    invoiceDiv.append(headerDiv,invoiceRowElement);
    invoiceRowElement.append(nameElement,billElement1,billElement2,billElement3)
    
}

function createInvoiceElements(element:string, display:string,fontsize:string, fontfamily:string,content:string){
    let element1 = document.createElement(element)
    element1.style.display =display;
    element1.style.fontSize =fontsize;
     element1.style.fontFamily =fontfamily;
    element1.innerHTML = content;
    return element1;
}



