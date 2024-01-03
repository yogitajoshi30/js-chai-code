// const tinderUser = new Object() => singleton object
const tinderUser = {}; //non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser); => { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "yogita",
      lastname: "joshi",
    },
  },
}; //object ke andar hm kitne bhi objects bna skte hai

//console.log(regularUser.fullname.userfullname.firstname); =>yogita

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

//const obj4 = { obj1, obj2 }; =>agr hm 2 objects ko merge krna chahte hai to ye glt hai

//console.log(obj4); =>{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }=>yha pe dono objects merge hone k bajaye alg alg dikh re hai

//To merge objects => Object.assign(target, source);

//const obj4 = Object.assign(obj1, obj2, obj3);
//console.log(obj4); => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj4 = Object.assign({}, obj1, obj2, obj3);
//console.log(obj4); => { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' } =>upar hmne object assign mein {} curly braces nhi diye or neeche diye hai, dono ka output ek dm same aaya hai, but zyada acchi practice hai ki hm {} curly braces de, isse guarantee rehti hai ki merge krke hi dega, curly braces target ki trh act krte hai, or sare objects source ki trh

//const obj4 = { ...obj1, ...obj2 }; => we can also use spread operator to merge objects

const users = [
  {
    id: 1,
    email: "y@gmail.com",
  },
  {
    id: 2,
    email: "o@gmail.com",
  },
  {
    id: 3,
    email: "g@gmail.com",
  },
];

//console.log(users[0].id); => 1
//console.log(users[0].email); => y@gmail.com

// console.log(tinderUser);

//console.log(Object.keys(tinderUser)); => [ 'id', 'name', 'isLoggedIn' ]
//console.log(Object.values(tinderUser)); => [ '123abc', 'Sammy', false ]
//console.log(Object.entries(tinderUser)); => [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

//console.log(tinderUser.hasOwnProperty("isLoggedIn")); => true

//console.log(tinderUser.hasOwnProperty("isLogged")); => false

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// course.courseInstructor

const { courseInstructor: instructor } = course;

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[{}, {}, {}];
