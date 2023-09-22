// Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// const returnFirstTwoDrivers = function(drivers) { 
//     return drivers.slice(0,2)
// }
// //returnFirstTwoDrivers()

//  function returnLastTwoDrivers (drivers) {
//     return drivers.slice(2)
// }
// //returnLastTwoDrivers()

//   const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers] 

  //function selectingDrivers() {}
  function receivesAFunction (spy){
   return  spy();
}
function returnsANamedFunction(){
    return function sayHello(){
        return "Hello"
    }
}
function returnsAnAnonymousFunction(){
    return function (){
        return "Bye"
    }
}