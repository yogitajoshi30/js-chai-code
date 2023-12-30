const marvelHeros = ["thor", "Ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

//marvelHeros.push(dcHeros); =>agr hmne ye soch k push ka use kiya hai ki marvelHeros or dcHeros merge ho jayenge to ye glt hai kyuki push krne se marvelHeros k andar dcHeros aa gya mtlb array mein array aa gya.

//console.log(marvelHeros); => [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] =>(dcHeros ko marvelHeros mein push krne pe hmein ye mila, or hm dekh skte hai ki marvelHeros mein dcHeros ek element ki trh push hua hai, mtlb ki dcHeros marvelHeros ke 3rd index pe hai )
//console.log(marvelHeros[3]); => [ 'superman', 'flash', 'batman' ]
//console.log(marvelHeros[3][1]); => flash

//const allHeros = marvelHeros.concat(dcHeros); => 2 arrays ko ek mein convert krne k liye concat ka use kr skte hai, iske liye hmein ek new variable mein use store krana pdta hai
//console.log(allHeros); => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//const allNewHeros = [...marvelHeros, ...dcHeros] => ye spread operator hai, iski help se bhi hm 2 arrays ko ek mein convert kr skte hai, iske liye hm  array k naam k phle 3 dots lgayenge jisse ki vo array nahi rahega or uske sare elements ab individual elements ban jayenge, or dono arrays k elements merge ho jayenge. (isko yaad rkhne ka example hai ek glass ka drop hoke tootna, jse glass ke alag alag tukde ho jate hai vse hi ye hai, ek array ke tukde kr deta hai)

//console.log(allNewHeros); => [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

//const realAnotherArray = anotherArray.flat(2); //=>  =>agr kbhi aisa ho ki array ke andar array ke andar array ho or hmein us poore array ko ek single array banana ho to flat ka use krenge, ye puchta hai ki hmein kitni depth tk array ko solve krna hai to vo bhi de skte hai.
//console.log(realAnotherArray);

//console.log(Array.isArray("Yogita")) => false(yha pe hm pooch rahe hai ki Yogita array hai kya)
//console.log(Array.from("Yogita")) => [ 'Y', 'o', 'g', 'i', 't', 'a' ]( agr hmein Yogita ko array mein convert krna hai to from ka use krenge, iski help se hm kisi bhi data type ko array mein convert kr skte hai)

//console.log(Array.from({name: "hitesh"})) => [](agr hm ismein object pass krte hai to vo use directly convert nahi kr pata, kyuki hmne btaya hi ni ki keys ka array bnana hai ya values ka, to aise mein vo empty array deta hai)

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); //=>[ 100, 200, 300 ](agr hm multiple elements ka array bnana chahte hai to Array.of ka use krenge)
console.log(Array.of("Yogita")); //=> [ 'Yogita' ]
