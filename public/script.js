(()=>{"use strict";var t={691:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e,n,o){var r=t.call(this,n)||this;return r.a_id=e.a_id,r.balance=e.balance,r.customer2=o,r}return r(e,t),e.prototype.getAccountID=function(){return this.a_id},e.prototype.getBalance=function(){return this.balance},e.prototype.getCustomer=function(){return this.customer2},e.prototype.setBalance=function(t){this.balance=t},e.prototype.toString1=function(){return this.toString()+"balance="+this.balance},e.prototype.getCustomerName=function(){return this.name},e.prototype.deposit=function(t){return this.balance=this.balance+t,this.balance},e.prototype.withdraw=function(t){return this.balance>=t?(this.balance=this.balance-t,this.balance):(console.log("Withdraw amount exceeds the current balance."),-1)},e}(i(n(431)).default);e.default=a},431:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t){this.ID=t.ID,this.name=t.name,this.discount=t.discount}return t.prototype.getID=function(){return this.ID},t.prototype.getName=function(){return this.name},t.prototype.getDiscount=function(){return this.discount},t.prototype.setDiscount=function(t){this.discount=t},t.prototype.toString=function(){return this.name+"("+this.ID+")"},t}();e.default=n},607:function(t,e,n){var o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var r,i,a=o(n(431)),u=o(n(969)),c=o(n(691)),s=1,l=document.createElement("span"),d=document.querySelector(".checkBalance");l.style.padding="4px",l.style.border="2px solid  black";var p,f,m=document.querySelector(".cb");function y(){p=document.getElementById("_name").value,f=+document.getElementById("a_id").value;var t={ID:++s,name:p,discount:0},e={a_id:f,balance:0};r=new a.default(t),i=new c.default(e,t,r),l.innerHTML="Balance: "+i.getBalance(),m.append(l)}d.addEventListener("click",(function(){void 0!==p&&void 0!==f||y(),l.innerHTML="Balance: "+i.getBalance(),m.append(l)})),document.querySelector(".dAmount ").addEventListener("click",(function(){void 0!==p&&void 0!==f||y(),document.querySelector("#deposit").value})),document.querySelector(".wAmount").addEventListener("click",(function(){void 0!==p&&void 0!==f||y();var t=+document.querySelector("#Withdraw").value;-1===i.withdraw(t)&&alert("Withdraw amount exceeds the current balance.")})),document.getElementById("gInvoice").addEventListener("click",(function(){var t=document.getElementById("name").value,e=+document.getElementById("discount").value,n=+document.getElementById("amount").value,o={i_ID:s,amount:n},r={ID:s,name:t,discount:e},i={a_id:s,balance:0};s++;var l=new a.default(r),d=new u.default(r,o,l).getAmountAfterDiscount();new c.default(i,r,l),function(t,e,n,o,r){v.innerHTML="",v.setAttribute("class","offset-md-1 offset-lg-3 offset-xl-3 col-12 col-md-10 col-lg-6 col-xl-6 border border-dark bg-warning"),v.style.marginTop="5%";var i=document.createElement("div"),a=document.createElement("span");a.innerHTML="Invoice Id.: "+t;var u=document.createElement("p");u.setAttribute("class","text-center"),u.style.fontSize="35px",u.innerHTML="Invoice",u.style.fontWeight="bold",u.style.fontFamily="'element1eader', serif",i.append(a,u);var c=document.createElement("div");c.setAttribute("class","offset-1 col-10");var s=document.createElement("div"),l=h("p","inline","25px","'element1eader', serif","Name: "),d=h("p","inline","20px","'Ubuntu', sans-serif",e);s.style.borderBottom="thin solid black",s.append(l,d);var p=document.createElement("div"),f=h("p","inline","25px","'element1eader', serif","Original Amount: "),m=h("p","inline","20px","'Ubuntu', sans-serif",""+o);p.append(f,m);var y=document.createElement("div"),_=h("p","inline","25px","'element1eader', serif","Discount Percentage: "),b=h("p","inline","20px","'Ubuntu', sans-serif",""+n);y.append(_,b),y.style.borderBottom="thin solid black";var g=document.createElement("div");g.setAttribute("class","mb-3");var I=h("p","inline","25px","'element1eader', serif","Payable Amount: "),x=h("p","inline","20px","'Ubuntu', sans-serif",""+r);g.append(I,x);var D=document.querySelector(".main");null==D||D.append(v),v.append(i,c),c.append(s,p,y,g)}(s,t,e,n,d)}));var v=document.createElement("div");function h(t,e,n,o,r){var i=document.createElement(t);return i.style.display=e,i.style.fontSize=n,i.style.fontFamily=o,i.innerHTML=r,i}},969:function(t,e,n){var o,r=this&&this.__extends||(o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)},function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),i=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){function e(e,n,o){var r=t.call(this,e)||this;return r.i_ID=n.i_ID,r.amount=n.amount,r.cust=o,r}return r(e,t),e.prototype.getInvoiceID=function(){return this.i_ID},e.prototype.getInvoiceAmount=function(){return this.amount},e.prototype.setAmount=function(t){this.amount=t},e.prototype.getCustomerName=function(){return this.getName()},e.prototype.getAmountAfterDiscount=function(){var t=this.getDiscount(),e=this.amount;return e-t*e/100},e.prototype.setCustomer=function(t){this.cust=t},e.prototype.getCustomer=function(){return this.cust},e}(i(n(431)).default);e.default=a}},e={};!function n(o){if(e[o])return e[o].exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}(607)})();