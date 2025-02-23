function greet(name){
    // console.log(`Hello ${name}`);
    
}
greet("Hitesh");
greet("Piyush");

let globalVar = "I am global";

function modifyGlobal(){
    globalVar = "I am modified";
    let blockScopedVar = "I am Blocked-scoped";
    // console.log(blockScopedVar);
    
}

modifyGlobal();
// console.log(globalVar);

let config = function(){
    let settings = {
        theme: "dark"
    }
    return settings
}()     // -> IIFE

// (()=>{})()   //-> IIFE - one time execution

let person1 = {
    name: "Ravi",
    greet: function(){
        console.log(`Hello ${this.name}`);
        
    }
}

let person2 = {
    name: "hitesh",
    greet: function(){
        console.log(`Hello ${this.name}`);
        
    }
}
person1.greet.call(person2);  // 
//console.log(person1.greet.bind(person2));  // bind -> return new function
let bindGreet = person1.greet.bind(person2);
//bindGreet();  // call return function by bind

;
// this -> context means Area of working

let person3 = {
    name: "akshat",
    greet: function(){
        //console.log(`Hello ${name}`);  // -> give error because js not know where name is that why we context
        console.log(`Hello ${this.name}`);
        
    }
}
let person4 = {
    name: "Piyush"
}
// when we use call then we change the context of that object
//person3.greet.call({name: "Mikul"})    // change context
//person3.greet.call(person4)   
//person3.greet()  
// console.log(person3);
