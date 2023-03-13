let myLuckyNymber = 02;
let myVar = 6;
let myName = "Carol";


//document.write(myName + ' ' + myName.toUpperCase()); //
/*let userName = prompt ("Qual o seu nome? ");
let age = prompt ("Qual sua idade? ");

if( age> 30) {
    document.write("Senhora" + userName);
}
else {
    document.write("Ola menina "+ userName);
}
*/


const daysOfWeek = ["segunda", "terça", "quarta", "quinta", "sexta"];

let dayOfWeek = prompt ("Que dia da semana é hoje? ");

switch (dayOfWeek.toLocaleLowerCase())  {
    case daysOfWeek[0]:
            document.write("Uma otima semana!!!");
            break
    case daysOfWeek[1]:
            document.write(" Quase no meio da semana");
            break;
    case daysOfWeek[2]:
            document.write("QUARTOU");
            break;
    case daysOfWeek[3]:
            document.write("ALELUIA");
            break;
    case daysOfWeek[4]:
            document.write("SEXTOU ");
            break;
  }



/* let dayOfWeek = prompt ("Qual o dia da semana?");

if (dayOfWeek == "Segunda"){ 
    document.write("FORÇA PARA A SEMANA! " + myName );
}
else {
    document.write(" Ta quase!!! "); 
}
*/ 

