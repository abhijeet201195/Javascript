// let a = 10;
// let b = 20;
// console.log(a===b);

// let c = 100;
// let d = 20;
// console.log(c/d);


// let e = 40;
// let d = 20;
// if (e>d) {
//     alert("value of e:"+e);
// } else {
//     alert("value of d:"+d);
// }........

 
// function hello () {
//     console.log ("hello everyone");
// }
// hello();
// hello();
// hello();


// let z = 1;
// while(z<= 10){
//     console.log("hello abhijeet");
//     z = z+1 
// }


// let x = 1;
// do{
//     console.log("abhijeet nalage")
//     x = x + 1;
// }while(x<=10);


// let v = 1;
// for (let v = 1; v<10; v++){
//     console.log("abhijeeeeeet");
// }


// for(let b = 1; b <=10; b++){
//     if(b % 2 == 0){
//         console.log(b +" " );
//     }
// }



// for(let n = 1; n <=30; n++){
//     if(n % 2 != 0){
//         console.log(n +" " );
//     }
// }

// for (let m = 1; m <= 20; m = m + 10){
// for (let s = m; s < m + 10; s++  ){
// console.log(s+ " ");
// }
// console.log(" ");
// }


// for (let f = 1; f <= 8; f = f ++){
// for (let g = 1; g < f + 10; g++ ){
// console.log(g+ " ");
// }
// console.log(" ");
// }


// let ary = [
//     ["abhi",28,"male","M.A"],
//     ["sopan",28,"male","B.S.C"],
//     ["yuva",28,"male","Mech"]
// ]
// console.log("<tableborder='1px'>");
// for(let p = 0; p<4; p++ ){
//     console.log("tr>");
//     for(let I = 0; I<4; I++);
//     console.log("td>"+ary[p][I]+" ");
//     console.log("</tr");
//     console.log("</table")
// }...


// ARRAY METHODS :-

// let a = ["abhijeet","sopan","yuva","shashank"];
// console.log(a+" ");
// a.sort();
// console.log(a+" ");


// let b = ["abhijeet","sopan","yuva","shashank"];
// b.reverse();
// console.log(b+" ");


// let C = ["abhijeet","sopan","yuva","shashank"];
// C.pop();
// console.log(C+" ");


// let d = ["abhijeet","sopan","yuva","pratik"];
// d.push("ravi");
// console.log(d+" ");


// let a = ["abhijeet","sopan","yuva","pratik"];
// a.shift();
// console.log(a+" ");


// let a = ["abhijeet","sopan","yuva","pratik"];
// a.unshift("abhijeeeeeet");
// console.log(a+" ");


// let a = ["abhijeet","sopan","yuva","pratik"];
// let b = ["swapnil","shreyas","anna"];
// let c = a.concat (b);
// console.log(c);


// let a = ["abhijeet","sopan","yuva","pratik"];
// let b = a.join("---");
// console.log(b);


// let a = ["abhijeet","sopan","yuva","pratik"];
// let b = a.slice(1,3);
// console.log(b+" ");


// let a = ["abhijeet","sopan","yuva","pratik"];
// console.log(a+" ");
//  a.splice(2,0,"vishal","aditya");
// console.log(a+" ");


// let a = ["abhijeet","sopan","yuva","pratik"];
// console.log(a+" ");
// a.splice(2,3,"abhi","bhaiya");
// console.log(a+" ");


// let a = ["abhijeet","sopan","yuva","pratik"];
// console.log(a+" ");
// let b = Array.isArray(a);
// console.log(b);
// ......


// let a = ["abhijeet","sopan","yuva","pratik","shashank"];
// console.log(a+" ")
// let b = a.indexOf("shashank",0);
// console.log(b+" ")

// let a = ["abhijeet","sopan","yuva","pratik","shashank"];
// console.log(a+" ")
// let b = a.lastIndexOf("sopan");
// console.log(b+" ")
// ......


// let a = ["abhijeet","sopan","yuva","pratik","shashank"];
// console.log(a+" ");
// let b = a.includes("kolhe");
// console.log(b+" ");


// let age = [20,22,35,100,78,95];
// console.log(age+" ");
// let b = age.some(15);
// console.log(b+" ");
// functioncheckadult(15); {
//     return age>=15;
// }
// ... ... 

// let ages = [100,200,125,1236,500];
// console.log(ages+" ");
// let b = ages.every(checkadult);
// console.log(b+" ");
// function checkadult(age){
//     return age >= 25;
// }


// let ages = [125,150,199,542,560];
// console.log(ages+" ");
// let b = ages.every(checkadult);
// console.log(b+" ");
// function checkadult(age){
//     return age >= 50;
// }


// let ages = [10,20,30,40,50,60];
// console.log(ages + " ");
// let b = ages.find(checkadult);
// console.log(b + " ")
// function checkadult(age){
//     return age >= 15
// }


// let ages = [15,20,25,30,35,40];
// console.log(ages + " ");
// let b = ages.find(checkadult);
// console.log(b + " " );
// function checkadult(age){
//     return age >= 19
// }


// let ages = [10,20,30,40,50,60,70];
// console.log(ages + " ");
// let b = ages.findIndex(check);
// console.log(b + " ");
// function check (age){
//     return age >= 30
// }


// let ages = [10,15,20,30,40,50,60];
// console.log(ages + " ")
// let b = ages.filter(check);
// console.log(b + " ");
// function check (ages){
//     return ages <= 20 
// }


// let a = ["abhijeet","swapnil","sopan","pratik","bhaiya"];
// a.toString();
// console.log(a);

// let a = ["abhijeet","swapnil","sopan","pratik","bhaiya"];
// a.valueOf();
// console.log(a);

// let a = ["abhijeet","swapnil","sopan","pratik","bhaiya"];
// a.fill("abhi");
// console.log(a);


// let a = ["abhijeet","swapnil","sopan","pratik","bhaiya"];
// a.forEach (function(value){
//     console.log(value +" ");
// })

// let a = ["abhijeet","swapnil","sopan","pratik","bhaiya"];
// a.forEach(function(value,index){
//     console.log(index   + value + "     ");
// })





