//Dates

let myDate = new Date();
//console.log(myDate); => 2023-12-29T17:37:58.984Z
//console.log(myDate.toString()); => Fri Dec 29 2023 17:37:58 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString()); =>Fri Dec 29 2023
//console.log(myDate.toISOString()); => 2023-12-29T17:37:58.984Z
//console.log(myDate.toJSON()); => 2023-12-29T17:37:58.984Z
//console.log(myDate.toLocaleDateString()); => 12/29/2023
//console.log(myDate.toLocaleString()); => 12/29/2023, 5:37:58 PM

//console.log(typeof myDate); => object

//let myCreatedDate = new Date(2023, 0, 23); => (month 0 se start hore hai to 0th ka mtlb Jan month hai)
//console.log(myCreatedDate); => 2023-01-23T00:00:00.000Z
//console.log(myCreatedDate.toDateString()); => Mon Jan 23 2023

//let myCreatedDate = new Date(2023, 0, 23, 8, 6); => (ismein hm hours or minutes bhi pass kra re hai)
//console.log(myCreatedDate.toLocaleString()); => 1/23/2023, 8:06:00 AM

// let myCreatedDate = new Date("2023-01-14") => (YY/MM/DD format, ismein month 1 se hi start honge)
let myCreatedDate = new Date("01-14-2023"); //=> (MM/DD/YY format)

let myTimeStamp = Date.now();

//console.log(myTimeStamp); => 1703872703211 (ye aaj ki date hai in terms of milliseconds from January 01, 1970 )
// console.log(myCreatedDate.getTime()); => upar jo myCreatedDate variable hmne create kra hai is date ko time mein convert krke aaj ki date k saath compare kr skte hai agr hm koi hotel booking type app bana rahe hai to
// console.log(Math.floor(Date.now()/1000));=> agr hmein aaj ki date ko jo ki milliseconds mein hmnein milegi, use seconds mein convert krna hai to 1000 se divide krenge, and then uspe math.floor lga diya kyuki divide krne pe date decimal mein aane lgegi

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1); //month get krne k liye
console.log(newDate.getDay()); //day get krne k liye
console.log(newDate.getDate()); //date get krne k liye

newDate.toLocaleString("default", {
  weekday: "long",
});
