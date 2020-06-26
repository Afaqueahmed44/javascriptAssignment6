//chap 21-25




////task1
//var fname=prompt("Enter your first name");
//var lname=prompt("Enter your last name");
//var sum=fname+lname;
//alert("Wellcome" + sum)
//


//taask2

//var model=prompt("Enter your fav mobile phone")
//var c=model.length
//alert(c)



//task3
//
//var a="Pakistani"
//var b=a.indexOf("n")
//alert(b)



////task4
//var app="Hello World"
//var c=app.lastIndexOf("l")
//alert(c)


//task5
//var a="Pakistani"
//var b=a.charAt(3)
//alert(b)


//task7
//
//var a="Hyderabad"
//
//var c="Islam"+a.slice(5,9)
//alert(c)



//task8

//
//var msg="Ali and Sami are best friends. They play cricket and football together."
//for(var i=0;i<msg.length;i++){
//    
//    if(msg.slice(i,i+3)=== "and"){
//    msg=msg.slice(0,i) + "&" + msg.slice(i+2)
//    msg=msg.slice(0,i) + "&" + msg.slice(i+2)
//
//        alert(msg)
//}
//


//}



//task9
//
//var a=472
//
//console.log(typeof(a))
//
//var c=a.toString()
//console.log(c)
//console.log(typeof(c))




//task 10

//
//var a=prompt("Enter the text")
//document.write(a.toUpperCase())





//task11

//
//var a= prompt("Enter Name of your city")
//var b=a.slice(0,1)
//b=b.toUpperCase()
//var c=a.slice(1)
//
//c=c.toLowerCase()
//
//a=b+c;
//console.log(a)


//task12
//
//var a="35.36"
//var c=a.parseInt()
//console.log(c)







//task 13

//var uname=prompt("Enter user name")
//
//var d=uname.length;
//for(var i=0;i<d;i++){
//
//if(uname.slice(1,4) === "@"){
//    
//    
//    alert("Special Char are not allowed")
//
//
//}
//else{
//    
//alert("UserName Created Successfuly!")
//    
//}}



//task14

//
//var city= prompt('Enter what u wanna search')
//var first=city.slice(0,1)
//first=first.toUpperCase()
//var othr= city.slice(1)
//othr=othr.toLowerCase()
//city= first+othr;
//var f=city.indexOf(ar)
//console.log(city)
//console.log(f)
//var ar=['Chips','Apple','Cookie','Cake']
//for(var i=0;i<ar.length;i++){
//    
//    
//    if(ar[i]==city){
//        alert("Found")
//    }
//    else{
//        alert("Could not found")
//    }
//}
//

//task 16


//
//var uni= "University of Karachi"
//
//var res= uni.split("")
//        document.write(res)



//task17
//
//var r="pakistan"
//var c=r.charAt(r.length-1)
//console.log(c)
//






//task18
//
//var word="the quick brown fox jumps over the lazy  dog"
//
//console.log(word.match(/the/g) ||[]).length
//"the quick brown fox jumps over the lazy dog".split("the").length-1
//






















//chap 26-30    Math Methods










//task1

//var value=prompt("Enter the value")
//var rnd=Math.round(value)
//console.log(rnd)
// var value=prompt("Enter the value")
//var flor=Math.floor(value)
//console.log(flor)

//var value=prompt("Enter the value")
//var cel=Math.ceil(value)
//console.log(cel)

 


//task2
//
//var value=prompt("Enter the value")
//var rnd=Math.round(value)
//console.log(rnd)
//
//
//
//
////task3
//
//
//var rnd= Math.abs(-4)
//console.log("The absoulte value of -4 is ", rnd)









//task4
//
//var rnd= Math.random()*6
//console.log( rnd)








//task5
//
//var head= prompt("Enter the name of head  user")
//
//var tail= prompt("Enter the name of tail  user")
//var toss=Math.random() * 2
//var tss=Math.floor(toss)
//console.log(tss)
//if (toss==0){
//    console.log("The head won the toss")
//}
//else{
//    console.log(tail+"The tail won the toss")
//}







//task6

//
//var rnd= Math.random() * 100
//console.log( rnd)


//task8
//
//var gues= prompt("Guess the word")
//var rnd= Math.random() * 10
//var flor=Math.floor(rnd)
//console.log( flor)
//if(gues==flor){
//    console.log("The guess matched")
//}
//else{
//    console.log("Try again")
//}











//chap 31-34




//task1


//
//var curent= new Date();
//console.log(curent)
//
//
//
//
//
////task2
//
//var curent= new Date();
//var mnth= curent.getMonth()
//console.log(mnth)
//
//
//var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//var now= new Date(); 
//var get=months[now.getMonth()];
// console.log(get)









//task4
//
//var dys=['Monday','Tues','Wed','Thur','Fri','Sat','Sun']
//var curent= new Date()
//var dy=dys[curent.getDay()]
//console.log(dy)
//
//if(dy=='Sat'|| dy=='Sun'){
//    console.log("It is fun day")
//}


//task5

//var curnt= new Date()
//var dy=curnt.getDate()
//console.log(dy)
//
//if(dy<16){
//    console.log("The First Fifteen Days of the month")
//}
//else{
//    console.log("Last fiften days of the Month")
//}




//task7


//var curnt= new Date()
//var dy=curnt.getHours()
//
//console.log(dy)
//
//if(dy>00 && dy<13){
//    console.log("It is AM")
//}
//else{
//    console.log("It is PM")
//}



//task9
//
//var dys= new Date("Jun 25, 2019")
//
//var today= new Date()
//var ds= today.getDate()
//
//var dif= today-dys
//var difd= dif/(1000*60*60*24)
//console.log(difd)




//task10
//
//var dys= new Date("Dec 25, 2019")
//
//var today= dys.getTime()
//var dss= new Date()
//var ds= dss.getSeconds()
//var dif= today-ds
//var difd=dif/(1000)
//console.log(dif)




//task13
//
//var dys= new Date("Apr 01, 1999")
//
//var today= new Date()
//var ds= today.getDate()
//var dif= today-dys
//var difd= dif/(1000*60*60*24*30*12)
//console.log(difd)









//task14
//var name="Afaque Ahmed"
//var month="May"
//var unit="300"
//var chargrs="16"
//var netbill=chargrs*unit
//var surcharge=+("350")
//var gross= +(netbill+surcharge);
//console.log("Name of Customer",name)
//console.log("Name of month",month)
//console.log("Units Consumed",unit)
//console.log("Charge per Unit",chargrs)
//console.log("Net Bill (Payable Within Due Date)",netbill)
//console.log("late payment Surchargr",surcharge)
//console.log("gross amount Payable(After Due Date)",gross)
//
//
















//chap 35-38





//task1


//function fun(){
//    
//      var date= new Date()
//console.log(date)
//      }
//fun();





//task2
//
//function fun(){
//    var a=prompt("Enter First name")
//    var b=prompt("Enter First name")
//    var c=a+b
//console.log("Wellcome",c)
//    }
//fun()






//task3 
//
//function fun(){
//
//var a=+prompt("Enter First name")
//    var b=+prompt("Enter First name")
//    var c=+(a+b)
//
//console.log(c)
//
//}
//
//fun()











//task4


//function add(){
//
//    var a1=prompt("Enter First number")
//    var a2=prompt("Enter operator")
//    var a3=prompt("Enter Second Number")
//    
//    if(a2== '+' ){
//        var c = a1+a3
//        console.log(c)
//        
//        
//    }
//    
//else if(a2== '-'){
//        var d=a1-a3
//        console.log(d)
//        
//    }
//    
//    else if(a2=='*'){        
//        var e=a1*a3
//        
//        console.log(e)
//
//    }
//    else if(a2=='/'){
//                var f=a1/a3
//        
//        console.log(f)
//}
//    else{
//        console.log("Incorrect choice")    }
//    
//}
//add()


//task5


//function squareIt(num) {
//    var a= Math.pow(4,2);
//console.log(a)
//}
//
//squareIt()





//task6

//function fun(){
//
//var a= prompt("Enter starting numb")
//var b= prompt("Enter the end number")
//
//var c=a
//    for(var i=a;i<=b;i++){
//        console.log(i)
//    }
//    
//    
//    }
//fun()



//task10

//function check_Palindrome(str_entry){
//// Change the string into lower case and remove  all non-alphanumeric characters
//   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//	var ccount = 0;
//// Check whether the string is empty or not
//	if(cstr==="") {
//		console.log("Nothing found!");
//		return false;
//	}
//// Check if the length of the string is even or odd 
//	if ((cstr.length) % 2 === 0) {
//		ccount = (cstr.length) / 2;
//	} else {
//// If the length of the string is 1 then it becomes a palindrome
//		if (cstr.length === 1) {
//			console.log("Entry is a palindrome.");
//			return true;
//		} else {
//// If the length of the string is odd ignore middle character
//			ccount = (cstr.length - 1) / 2;
//		}
//	}
//// Loop through to check the first character to the last character and then move next
//	for (var x = 0; x < ccount; x++) {
//// Compare characters and drop them if they do not match 
//		if (cstr[x] != cstr.slice(-1-x)[0]) {
//			console.log("Entry is not a palindrome.");
//			return false;
//		}
//	}
//	console.log("The entry is a palindrome.");
//	return true
//}
//check_Palindrome('madam');
//check_Palindrome('nurses run');
//check_Palindrome('fox');
//
//








//task11
//
//function fun(){
//    
//    var a= prompt("Enter first some text")
//    var b= a.slice(0,1)
//    var c=a.slice(1)
//    b=b.toUpperCase()
//    c=c.toLowerCase()
//    var a=b+c
//    console.log(a)
//}
//fun()








//task12


//function find_longest_word(str)
//{
//  var array1 = str.match(/\w[a-z]{0,}/gi);
//  var result = array1[0];
//
//  for(var x = 1 ; x < array1.length ; x++)
//  {
//    if(result.length < array1[x].length)
//    {
//    result = array1[x];
//    } 
//  }
//  return result;
//}
//console.log(find_longest_word('Web Development Tutorial'));







//task13

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('JSresource.com', 'o'));
