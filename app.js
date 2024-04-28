// EXERCISE 2
// let personName: string= "ERIC";
// console.log(`Hello ${personName}, would you like to learn some Python today?`);
// EXERCISE 3
// lower case
// let personName: string = "Yashna"
// console.log("lowercase:", personName.toLowerCase());
// upper case
// console.log("uppercase:", personName.toLocaleUpperCase());
// title case
// console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase())); 
// EXERCISE 4
// let quote: string= "A person who never made a mistake never tried anything new.";
// let author: string="Albert Einstein"
// console.log(`${author} once said, "${quote}"`); 
// EXERCISE 5
// let quote: string= "A person who never made a mistake never tried anything new.";
// let famous_person= "Albert Einstein";
// let message=`${famous_person} once said, "${quote}"`;
// console.log(message);
// EXERCISE 6
// let personName: string =`\n\t IQRA AZIZ\t\n`;
// console.log(personName);
// let stripped: string = personName.trim();
// console.log(stripped); 
// EXERCISE 7,8
// console.log(5 +3);
// console.log(11 -3);
// console.log(4 *2);
// console.log(16 /2);
// EXERCISE 9
// let favouriteNumber: number = 4;
// console.log(`My favourite number is ${favouriteNumber}`);
// EXERCISE 10
// my name is YASHNA
// Date:06/04/2024
// console.log(`hello world simple program`);
// EXERCISE 11
// let members: string[] =['puneet','jaish','eshan','bhavesh','khushil'];
// for(let i=0; i<members.length; i++) {
//     console.log(members[i]);
// }
// EXERCISE 12
// let members: string[]= ['puneet','jaish','eshan','bhavesh','khushil'];
// let message: string='thankyou for joinig us:';
// for(let i=0; i<members.length; i++){
//    console.log(message + members[i]);
// }
// EXERCISE 13
// let transportation : string [] = ['bicycle','bike','car','bus','van'];
// for(let i=0; i<transportation.length; i++){
//    console.log('I would like to own a ' + transportation[i]);
// }
// EXERCISE 14 
// let guest_list : string [] = ['Usha','Parbha','Arti','Radhika','Sadhna'];
// for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\n\nThank You.\n')
// }
// EXERCISE 15
// let guest_list : string [] =  ['Usha','Parbha','Arti','Radhika','Sadhna'];
// for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThankyou.\n')
// }
// let not_present : string = 'Sadhna';
// let new_guest :string = 'Alia Bhatt';
// guest_list[4] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThankyou.\n')
// }
// console.log(`Miss.${not_present} will not come tomorrorw on dinner. `) 
// EXERCISE 16
// let guest_list : string [] = ['Usha','Parbha','Arti','Radhika','Sadhna'];
// for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThankyou.\n')
// }
// let not_present : string = 'Sadhna';
// let new_guest :string = 'Alia Bhatt';
// guest_list[4] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Madam ' + guest_list[i] + '.\nWe invited you on a dinner tomorrow. \nThankyou.\n')
// }
// guest_list.unshift('Piya','Deepa','Muskan');
// for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + '.\nWe invited you on a dinner tomorrow. we found a big table so we decided to invite 3 more guest. \nThankyou.\n')
// }
// EXERCISE 17
// let guest_list : string [] = ['Usha','Parbha','Arti','Radhika','Sadhna'];
// for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\nThankyou.\n')
// }
// let not_present : string = 'Sadhna';
// let new_guest :string = 'Alia Bhatt';
// guest_list[4] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Madam ' + guest_list[i] + '.\nWe invited you on a dinner tomorrow. \nThankyou.\n')
// }
// guest_list.unshift('Piya','Deepa','Muskan');
// for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + '.\nWe invited you on a dinner tomorrow. we found a big table so we decided to invite 3 more guest. \nThankyou.\n')
// }
// console.log('\nUnfortunately we can not arrange a big table , Only two people are allow.') 
// while(guest_list.length>2){
//    let remove_guest = guest_list.pop();
//    console.log(`Sorry Madam,${remove_guest} you are not invited for dinner.`);
// }
// for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + '.\nYes you are still invited for dinner tomorrow. \nThankyou.\n')
// }
// guest_list.splice(0,2)
// console.log(guest_list) 
// EXERCISE 18
// let places : string [] = ['Canada','Punjab','China','lahore','Turkey']
// console.log('original ' + places);
// Print your array in alphabetical order without modifying the actual list.
// console.log('copy ' + [...places].sort());
// . Show that your array is still in its original order by printing it.
// console.log('copy ' + [...places].sort());
// . Print your array in reverse alphabetical order without changing the order of the original list
// console.log('copy ' + [...places].sort().reverse());
// . Show that your array is still in its original order by printing it again.
// console.log('copy ' + [...places].sort().reverse());
// . Reverse the order of your list. Print the array to show that its order has Changed.
// console.log('copy ' + [...places].sort());
// . Reverse the order of your list again. Print the list to show it's back to its original order.
// console.log('copy ' + [...places].sort().reverse());
// EXERCISE 19
// let guest_list : string [] = ['Usha','Parbha','Arti','Radhika','Sadhna'];
// for(let i=0; i<guest_list.length; i++){
//    console.log('Respected Madam ' + guest_list[i] + ',\nWe invited you on a dinner tomorrow.\n\nThank You.\n')
// }
// console.log(`\nPRINTING NUMBER OF GUEST INVITED`)
// console.log(`we had finally invited ${guest_list.length} from exercise 14`)
// EXERCISE 20
// let languages : string [] = ['English','Urdu','Hindi','French','Arabic']
// console.log("list of languages:")
// for(let top of languages){
//    console.log(top)
// }
// EXERCISE 21
// interface item {
//    name: string
//    price: number
// }
//create two objects
// const book: item = {
//    name: 'ESSENTIAL TYPESCRIPT',
//    price: 450
// }
// const apple: item = {
//    name: 'Apple',
//    price: 200
// }
// console.log(`book name: ${book.name}, price: $${book.price}`)
// console.log(`apple name: ${apple.name}, price: $${apple.price}`)  
// EXERCISE 22
// let array: (string | number) [] = ['Ayush','Sameer',4,6,8,'Riya']
// console.log(array[0])
// console.log(array[1])
// console.log(array[2])
// console.log(array[3])
// console.log(array[4])
// console.log(array[5])
// EXERCISE 23
// let car: string = 'subaru';
// Test 1: Equality Comparsion (True)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car =='subaru'); // True
// Test 2: Strict Equality Comparsion (True)
// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === 'subaru'); // True
// Test 3: Inequality Comparsion (False)
// console.log("Is car != 'subaru'? I predict False.");
// console.log(car != 'subaru'); // False 
// Test 4: Strict Inequality Comparsion (False)
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru'); // False 
// Test 5: Less Than Comparsion (False)
// console.log("Is car < 'subaru'? I predict False.");
// console.log(car < 'subaru'); // False 
// Test 6: Greater Than Comparsion (False)
// console.log("Is car > 'subaru'? I predict False.");
// console.log(car > 'subaru'); // False (lexicographic comparsion)
// Test 7: Less Than Or Equal Comparsion (True)
// console.log("Is car <= 'subaru'? I predict True.");
// console.log(car <= 'subaru'); // True
// Test 8: Greater Than Or Equal Comparsion (True)
// console.log("Is car >= 'subaru'? I predict True.");
// console.log(car >= 'subaru'); // True
// Test 9: Checking Truthiness (True)
// console.log("Is car? I predict True.");
// console.log(car); // True (non-empty string is truthy)
// Test 10: Checking Falsiness (False)
// console.log("Is !car? I predict False.");
// console.log(!car); // False (negation of a truthy value)
// EXERCISE 24
// Define Variables
// let apple = "apple";
// let uppercaseApple = "APPLE";
// let ten = 10;
// let twenty = 20;
// let fruits = ["apple", "banana", "orange"];
// Tests For Equality And Inequality With Strings
// console.log("Is apple is equal to apple?");
// console.log(apple == "apple");
// console.log("\nIs apple is not equal to apple?");
// console.log(apple != "apple");
// Tests Using The Lower Case Function
// console.log("\nIs APPLE is equal to apple after converting to Lowercase?");
// console.log(uppercaseApple.toLowerCase() == "apple");
// console.log("\nIs APPLE is not equal to apple after converting to Lowercase?");
// console.log(uppercaseApple.toLowerCase() != "apple");
// Numerical Tests
// Equal To
// console.log("\nIs ten is equal to twenty?");
// console.log(ten == twenty);
// Not Equal To
// console.log("\nIs ten is not equal to twenty?");
// console.log(ten != twenty);
// Greater Than
// console.log("\nIs ten is greater than zero?");
// console.log(ten > 0);
// Less Than
// console.log("\nIs twenty is less than 10?");
// console.log(twenty < 10);
// Greater Than Or Equal To
// console.log("\nIs ten is greater than or equal to 5?");
// console.log(ten >= 5);
// Less Than Or Equal To
// console.log("\nIs twenty is less than or equal to 10?");
// console.log(twenty <= 10);
// Tests Using "AND" & "OR" Operators
// Using && (And)
// console.log("\nIs twenty is not equal to 10 and twenty is greater than 10?");
// console.log(twenty != 10 && twenty > 10);
// console.log("\nIs twenty is not equal to 10 and twenty is greater than 10?");
// console.log(twenty != 10 && twenty > 30);
// Using || (Or)
// console.log("\nIs 20 is greater than 50 OR 20 is equal to 20?");
// console.log(20 > 50 || 20 == 20);
// console.log("\nIs 20 is greater than 50 OR 20 is not equal to 20?");
// console.log(20 > 50 || 20 != 20);
// Test whether an item is include in array
// console.log("\nIs orange include in my Fruits array?");
// console.log(fruits.includes("orange"));
// Not Include
// console.log("\nIs orange is not include in my Fruits array?");
// console.log(!fruits.includes("orange"));
// EXERCISE 25
// Define Variable
// let alienColor = "White";
// if (alienColor === "Black"){
// Code Block
//    console.log("Alien color is Black player just earned 5 points.");
// }
// if (alienColor === "White"){
//   console.log("Alien Color is White"); 
// }
// EXERCISE 26
// Define Variable
// let alienColor = "green";
// if (alienColor === "green"){
//    console.log("player just earned 5 points for shooting the alien.");
// }
// else{
//    console.log("player just earned 10 points.");
// }
// Second Version
// if (alienColor === "green"){
//    console.log("I am come from IF Statement.");
// }
// else{
//    console.log("I am come from ELSE Statement.");
// }
// EXERCISE 27
// Define Variable
// let alienColor = "green";
// Using IF and ELSE-IF Statements
// if(alienColor === "green"){
//    console.log("(Version 1) you shot down green alien you have earned 5 points.");
// }
// else if(alienColor === "yellow"){
//    console.log("you shot down yellow alien you have earned 10 points.");
// }
// else if(alienColor === "red"){
//    console.log("you shot down red alien you have earned 15 points.");
// }
// Version #2
// let alienColor2 = "yellow";
// if(alienColor2 === "green"){
//    console.log("you shot down green alien you have earned 5 points.");
// }
// else if(alienColor2 === "yellow"){
//    console.log("(Version 2) you shot down yellow alien you have earned 10 points.");
// }
// else if(alienColor2 === "red"){
//    console.log("you shot down red alien you have earned 15 points.");
// }
// Version 3
// let alienColor3 = "red";
// if(alienColor3 === "green"){
//    console.log("you shot down green alien you have earned 5 points.");
// }
// else if(alienColor3 === "yellow"){
//    console.log("you shot down yellow alien you have earned 10 points.");
// }
// else if(alienColor3 === "red"){
//    console.log("(Version 3) you shot down red alien you have earned 15 points.");
// }
// EXERCISE 28
// Creating a Variable
// let age = 22;
// let age = 1;
// let age = 2;
// let age = 4;
// let age = 100;
// Creating A Program For Determining The Stage Of Life Using IF-ELSE Chain
// if (age < 2){
//   console.log("You are a Baby.");
// }
// else if (age >= 2 && age < 4){
//    console.log("You are a Toddler.");
//}
// else if (age >= 4 && age < 13){
//    console.log("You are a kid.");
// }
// else if (age >= 13 && age < 20){
//    console.log("You are a Teenager.");
// }
// else if (age >= 20 && age < 65){
//    console.log("You are an Adult.");
// }
// else if (age >= 65){
//    console.log("You are an Elder.");
// }
// EXERCISE 29
// Creating Array
// let Favorite_Fruits = ["Mango", "Strawberry", "Banana"];
// Using 5 Independent IF Statements
// if (Favorite_Fruits.includes("Mango")){
//    console.log("I Really Like Mangoes.");
// }
// if (Favorite_Fruits.includes("Strawberry")){
//    console.log("I Really Like Strawberries.");
// }
// if (Favorite_Fruits.includes("Cherry")){
//    console.log("I Really Like Cherries.");
// }
// if (Favorite_Fruits.includes("Banana")){
//    console.log("I Really Like Bananas.");
// }
// if (Favorite_Fruits.includes("Apple")){
//    console.log("I Really Like Apples.");
// }
// EXERCISE 30
// Creating Array
// let userNames = ["Sameer", "Zain", "Admin", "Reehan", "Shaiz"];
// Using ForEach Loop On Array
// userNames.forEach(oneUser =>{
//    if(oneUser === "Admin"){
//        console.log(`Hello ${oneUser}, would you like to see a status report?`)
//    }else{
//        console.log(`Hello ${oneUser}, thank you for logging in again.`)
//    }
// })
// EXERCISE 31
// let userNames = ["Sameer", "Zain", "Admin", "Reehan", "Shaiz"];
// userNames = []
// if (userNames.length === 0){
//    console.log("Your Array in Empty We need to find some users!")
// }else{
// Using ForEach Loop On Array
//    userNames.forEach(oneUser =>{
//    if(oneUser === "Admin"){
//        console.log(`Hello ${oneUser}, would you like to see a status report?`)
//    }else{
//        console.log(`Hello ${oneUser}, thank you for logging in again.`)
//    }
// })
// }
// EXERCISE 32
// Array Of Current Users
// let current_users = ["Ayan", "Alia", "Zamda", "Dua", "Eshal"]
// Array Of New Users
// let new_users = ["Leena", "Anna", "Zamda", "Neha", "Eshal"]
// Loop Through New_Users To Check For Usernames Avaibility
// new_users.forEach(new_one_user => {
// Making A Condition For Username Already Exist And Save In Our_Condition Variable
//   let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
// Print Different Messages Using IF-Else Statement
//   if(our_condition){
//       console.log(`Sorry ${new_one_user} is already taken!`)
//    }else{
//        console.log(`This Username ${new_one_user} is available`)
//    }
//    })
// EXERCISE 33
// Creating Array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Using For-Loop
// for(let oneNumber of numbers){
//    let ordinalEnding: string;
//    if(oneNumber === 1){
//        ordinalEnding = "st"
//    }
//    else if(oneNumber === 2){
//        ordinalEnding = "nd"
//    }
//    else if(oneNumber === 3){
//        ordinalEnding = "rd"
//    }
//    else{
//        ordinalEnding = "th"
//    }
//    console.log(`${oneNumber}${ordinalEnding}`);
// } 
// EXERCISE 34 
// Creating Array
// let pizza = ["Chicken Tikka", "Malai Cheese", "Fajita"]
// Using For-Loop
// for (let onePizza of pizza){
//    console.log(`I Like ${onePizza} pizza `);
// }
// Print A Message Outside Of The For-Loop
// console.log("Pizza is Love")
// EXERCISE 35
// let petAnimals = ["Cat", "Dog", "Rabbit"]
// Using For-Loop
// for (let onePet of petAnimals){
//    console.log(`A ${onePet} would make a great pet.`)
// }
// Print A Message Out Side Of For-Loop
// console.log("Any of these animals would make a great pet!")
// EXERCISE 36
// function make_shirt (size: string, printMessage: string){
//    console.log(`You Selected ${size} size shirt with ${printMessage} prints on shirt`)
// }
// make_shirt("Large", "Stay Positive")
// make_shirt("Small", "Yashna")
// EXERCISE 37
// Making A Function
// function make_shirt (size: string = "Large", printMessage: string = "I Love Typescript"){
//    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
// }
// Calling A Function With By-Default Values
// make_shirt();
// Calling A Function Now With Medium Size And Default Message
// make_shirt("Medium")
// Calling A Function Now With Small Size And Also Different Print Message
// make_shirt("Small", "I Love Javascript")
// EXERCISE 38
// Creating A Function
// function describe_city (city: string, country: string = "Pakistan"){
//    console.log(`${city} is in ${country}`);
// }
// Calling The Function
// describe_city("Karachi");
// describe_city("Lahore");
// describe_city("Berlin", "Germany");
// EXERCISE 39
// Creating A Function With Parameters Which Return A Values In String
// function city_country(city: string, country: string) : string{
//    return`${city} , ${country}`;
// }
// Calling A Function And Print The Returned Value
// console.log(city_country("Karachi", "Pakistan"));
// console.log(city_country("Tokyo", "Japan"));
// console.log(city_country("Berlin", "Germany")); 
// EXERCISE 40
// Define The Make_Album Funtion
// function make_album(artist_name: string, album_title: string, tracks?: number){
//    let album:{artist: string, title: string, tracks?: number} = {
//        artist: artist_name,
//        title: album_title,
//    };
//    if (tracks !== undefined){
//        album.tracks = tracks;
//  }
// return album;
// }
// Calling Three Functions And Creating 3 Variables With Different Values
// let album1 = make_album("Yashna", "Album title 1");
// let album2 = make_album("Eshal", "Album title 2");
// Calling A Make_Album Function With Third Parameter
// let album3 = make_album("Yashvi", "Album title 3", 10);
// Print The Variable
// console.log(album1);
// console.log(album2);
// console.log(album3);
// EXERCISE 41
// Define A Function To Print Each Magician Name From An Array
// function show_magicians(magicians: string[]){
//    magicians.forEach(name => console.log(name));
// }
// Define An Array Containing Magicians Name
// let magicians_names = ["Bella", "Gala", "Tina"] 
// Call The Function To Print Each Magician Name
// show_magicians(magicians_names);
// EXERCISE 42
// Define The Function To Show Magicians Names
// function show_magicians(magicians: string[]){
//    magicians.forEach(name => console.log(name));
// }
// Function To Make Magicians Great Through .map() It Will Modify Array
// function make_great(magicians: string[]){
//   return magicians.map(name => `The Great ${name}`);
// }
// Define An Array Of Magicians Names
// let magician_names = ["Bella", "Gala", "Tina"]
// Call Make_great Function To Modify Magicians Names
// let great_magicians = make_great(magician_names);
// Call Show_Magicians That Show Modify List Of Magicians
// show_magicians(great_magicians) 
// EXERCISE 43
// Define The Function To Show Magicians Names
// function show_magicians(magicians: string[]){
//    magicians.forEach(name => console.log(name));
// }
//Function To Make Magicians Great Through .map() It Will Modify Array
// function make_great(magicians: string[]){
//    return magicians.map(name => `The Great ${name}`);
// }
// Define An Array Of Magicians Names 
// let magicians_names =["Bella", "Gala", "Tina"];
// Making A Copy Of Original Array Through .Slice() Function
// let copy_magician_names = magicians_names.slice()
// Modify The Copied Array To Include "The Great" With Their Names
// let copy_great_magicians = make_great(copy_magician_names);
// Show Both Arrays Original And Copied
// Original
// console.log("Orignal Array\n")
// show_magicians(magicians_names);
// Copied
// console.log("\nCopied Array\n")
// show_magicians(copy_great_magicians);
// EXERCISE 44
// Define A Function With A Rest Parameter That Accept Items Arguments Representing Our Sandwich
// function makeSandwich(...items: string[]){
//    console.log("Making A Sandwich With The Following items: \n");
//    items.forEach(singleItem => console.log(singleItem)); 
//    console.log("\nNow Enjoy Sandwich");
// }
// Call The Function 3 Times With 3 Different Number Of Arguments
// makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
// makeSandwich("Bread", "Butter");
// makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato", "Onion");
// EXERCISE 45
// Define A Function To Create A Car Object With Optional Options...
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
