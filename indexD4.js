/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/
let listOfFiveNumbers = [2,3,4,5,6]

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let myInformation = {
    name: "Miriam ",
    surname: "Santos",
    email: "mii.santos@yahoo.com.br",
    age: 25,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/
myInformation.hasDriveLicense = true
console.log(myInformation)

/* EXERCISE 4
Remove from the previously created object the age property.
*/
delete myInformation.age
console.log(myInformation)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
let myInformation2 = {}
Object.assign (myInformation2, myInformation)
myInformation2.email = "josiariasoft@gmail.com"
console.log(myInformation2)
console.log (myInformation)

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/
let totalShoppingCart = 10
let percentTax = 10
if ((totalShoppingCart > 50)){
    console.log("Free Shipping")
}else{
    totalShoppingCartWithShipp = totalShoppingCart + percentTax

    console.log (`Your order, ${totalShoppingCart} , will be shipp in 10 and total of the order is ${totalShoppingCartWithShipp}`)
}

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let discount = totalShoppingCart * 0.2
let discountShipp = totalShoppingCartWithShipp * 0.2
 totalShoppingCart = 10
if ((totalShoppingCart > 50)){
    console.log("Free Shipping")
    totalShoppingCartWithDiscount = totalShoppingCart - discount
    console.log (`Your order is free Shipping and with discoutnt for black friday you will pay ${totalShoppingCartWithDiscount}`)

}else{
   let totalShoppingCartWithShipp = totalShoppingCart + percentTax

    console.log (`Your order, ${totalShoppingCart} , will be shipp in 10 and total of the order is ${totalShoppingCartWithShipp}`)
    console.log (`Today is black Friday, you have total 20% in your order, ${totalShoppingCartWithShipp} 
    price: ${totalShoppingCartWithShipp += - discountShipp }`)

}

/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
    brand: "bmw",
    model: 2008,
    licensePlate: "mw22"
}
console.log(car)
let car2 = {}
Object.assign(car2, car)
car2.licensePlate = "nn22"   
console.log(car2)
let car3 = {}
Object.assign(car3, car)
car3.licensePlate = "jj77"
let car4 = {}
Object.assign(car4, car)
car4.licensePlate ="dd88"
console.log(car4)
let car5 ={}
Object.assign(car5,car)
car5.licensePlate = "qq99"
console.log (car5)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = []
    carsForRent.push(car)
    carsForRent.push(car2)
    carsForRent.push(car3)
    carsForRent.push(car4)
    carsForRent.push(car5)


console.log("cars for rents:" , carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

let removeLastItem = carsForRent.pop()
console.log (carsForRent)
let removeFirstItem = carsForRent.shift()
console.log(carsForRent)

/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/
console.log(car.brand, car.model, car.licensePlate)

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/

let cadrsForSale =[car, car2, car3]
let totalCars = cadrsForSale.length + carsForRent.length
console.log("total cars:" , totalCars)

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/
console.log(cadrsForSale[0].licensePlate)
console.log(cadrsForSale[1].licensePlate)
console.log(cadrsForSale[2].licensePlate)

// extra
/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/



