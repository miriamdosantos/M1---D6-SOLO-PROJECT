/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

let text = "This is a message"

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

let sum = 10 

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random() * 20);
console.log(random)

/* Ex.D
    Create a variable called "me" and assign to it an 
    object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me ={
    name: "Miriam",
    surname: "Santos",
    age: 25
}

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age
console.log (me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

me.skills =["Java", "Javascript"]
console.log(me)
    
// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

function dice (){
    return Math.floor(Math.random() * 6)+1;
}
console.log(dice())

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
function whoIsBigger (number1, number2){
    if (number1 > number2)
    return number1
    else if (number1 === number2){
        return number1
    }
    else{
        return number2
    }
}
console.log(whoIsBigger(11,12));

/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
function splitMe (string){
    let split = string.split (' ')
    return split
}
console.log(splitMe("I Love Coding"));

/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

function deleteOne(myString,flag)
{
    if(flag==true)
    {
        var str = myString.substring(1);
    }
    else{
       var length=myString.length;
       var str=myString.substring(0,length-1);
    }
    return str;
}
console.log(deleteOne("Programming",true));

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

function onlyLetters (myString2){
    return myString2.replace(/[0-9]/g, '');
}
console.log(onlyLetters('I Love 4 Dogs 6'));

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
function isThisAnEmail(email)
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
console.log(isThisAnEmail("hasnain@gmail.com"));

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/

function whatDayisIt()
{
    return new Date().toLocaleString('en-us', {  weekday: 'long' });
}
console.log(whatDayisIt());

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

function rollTheDice(Number)
{
    var sum=0;
    var values=[];
    for (let index = 0; index <Number; index++) {
         var rolled=Math.floor(Math.random() * 6)+1;
         sum=sum+rolled;
         values.push(rolled);
    }
    var data={sum:sum,values:values};
    return data;
}
console.log(rollTheDice(3));

/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/

function howManyDays(date)
{
    
    var ndays;
    var endDate =   new Date();
    date.setMonth(date.getMonth()-1);
  var tv1 = date.valueOf();  // msec since 1970
  var tv2 = endDate.valueOf();

  ndays = (tv2 - tv1) / 1000 / 86400;
  ndays = Math.round(ndays);
  return ndays
}
console.log(howManyDays(new Date(2021,1,23)));


/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
function isTodayMyBirthday()
{   var bdate = new Date('2021-04-23'); 
    var birthdaDae=bdate.getMonth() + 1 + '/' + bdate.getDate() + '/' +  bdate.getFullYear();
    var todate=new Date();
    var todayDate=todate.getMonth() + 1 + '/' + todate.getDate() + '/' +  todate.getFullYear();
    if(birthdaDae==todayDate)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log(isTodayMyBirthday());

// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, 
   and returns the given object after deleting its property named as the given string.
*/

function deleteProp(obj,mystring)
{
    delete obj[mystring];
    return obj;
}
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
  };
  
console.log(deleteProp(person,"age"));

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
function olderMovie()
{
    const movies = [
        {
          Title: "The Lord of the Rings: The Fellowship of the Ring",
          Year: "2001",
          imdbID: "tt0120737",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Return of the King",
          Year: "2003",
          imdbID: "tt0167260",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Two Towers",
          Year: "2002",
          imdbID: "tt0167261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Lord of War",
          Year: "2005",
          imdbID: "tt0399295",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "Lords of Dogtown",
          Year: "2005",
          imdbID: "tt0355702",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings",
          Year: "1978",
          imdbID: "tt0077869",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1990",
          imdbID: "tt0100054",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
        },
        {
          Title: "The Lords of Salem",
          Year: "2012",
          imdbID: "tt1731697",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
          Year: "1984",
          imdbID: "tt0087365",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1963",
          imdbID: "tt0057261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
        },
        {
          Title: "The Avengers",
          Year: "2012",
          imdbID: "tt0848228",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Infinity War",
          Year: "2018",
          imdbID: "tt4154756",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Age of Ultron",
          Year: "2015",
          imdbID: "tt2395427",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Endgame",
          Year: "2019",
          imdbID: "tt4154796",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        },
      ]
      var max = movies[0].Year;
      var olderMovie=[];
    //   console.log(max);
      movies.forEach(movie => {
        if (movie.Year < max) {
            max = movie.Year;
            olderMovie=movie;
          }
      });
      return olderMovie;
}
console.log(olderMovie());

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
function countMovies()
{
    const movies = [
        {
          Title: "The Lord of the Rings: The Fellowship of the Ring",
          Year: "2001",
          imdbID: "tt0120737",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Return of the King",
          Year: "2003",
          imdbID: "tt0167260",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Two Towers",
          Year: "2002",
          imdbID: "tt0167261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Lord of War",
          Year: "2005",
          imdbID: "tt0399295",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "Lords of Dogtown",
          Year: "2005",
          imdbID: "tt0355702",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings",
          Year: "1978",
          imdbID: "tt0077869",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1990",
          imdbID: "tt0100054",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
        },
        {
          Title: "The Lords of Salem",
          Year: "2012",
          imdbID: "tt1731697",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
          Year: "1984",
          imdbID: "tt0087365",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1963",
          imdbID: "tt0057261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
        },
        {
          Title: "The Avengers",
          Year: "2012",
          imdbID: "tt0848228",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Infinity War",
          Year: "2018",
          imdbID: "tt4154756",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Age of Ultron",
          Year: "2015",
          imdbID: "tt2395427",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Endgame",
          Year: "2019",
          imdbID: "tt4154796",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        },
      ]
      return movies.length;
}
console.log(countMovies());

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies 
    provided in the array at the end of the file.
*/
function onlyTitles()
{
    const movies = [
        {
          Title: "The Lord of the Rings: The Fellowship of the Ring",
          Year: "2001",
          imdbID: "tt0120737",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Return of the King",
          Year: "2003",
          imdbID: "tt0167260",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Two Towers",
          Year: "2002",
          imdbID: "tt0167261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Lord of War",
          Year: "2005",
          imdbID: "tt0399295",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "Lords of Dogtown",
          Year: "2005",
          imdbID: "tt0355702",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings",
          Year: "1978",
          imdbID: "tt0077869",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1990",
          imdbID: "tt0100054",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
        },
        {
          Title: "The Lords of Salem",
          Year: "2012",
          imdbID: "tt1731697",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
          Year: "1984",
          imdbID: "tt0087365",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1963",
          imdbID: "tt0057261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
        },
        {
          Title: "The Avengers",
          Year: "2012",
          imdbID: "tt0848228",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Infinity War",
          Year: "2018",
          imdbID: "tt4154756",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Age of Ultron",
          Year: "2015",
          imdbID: "tt2395427",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Endgame",
          Year: "2019",
          imdbID: "tt4154796",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        },
      ]
      titles=[];
      movies.forEach(index => {
          titles.push(index.Title);
      });
      return titles;
}
console.log(onlyTitles());

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
function onlyInThisMillennium()
{
    const movies = [
        {
          Title: "The Lord of the Rings: The Fellowship of the Ring",
          Year: "2001",
          imdbID: "tt0120737",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Return of the King",
          Year: "2003",
          imdbID: "tt0167260",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings: The Two Towers",
          Year: "2002",
          imdbID: "tt0167261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        },
        {
          Title: "Lord of War",
          Year: "2005",
          imdbID: "tt0399295",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "Lords of Dogtown",
          Year: "2005",
          imdbID: "tt0355702",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
        },
        {
          Title: "The Lord of the Rings",
          Year: "1978",
          imdbID: "tt0077869",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1990",
          imdbID: "tt0100054",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
        },
        {
          Title: "The Lords of Salem",
          Year: "2012",
          imdbID: "tt1731697",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
        },
        {
          Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
          Year: "1984",
          imdbID: "tt0087365",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
        },
        {
          Title: "Lord of the Flies",
          Year: "1963",
          imdbID: "tt0057261",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
        },
        {
          Title: "The Avengers",
          Year: "2012",
          imdbID: "tt0848228",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Infinity War",
          Year: "2018",
          imdbID: "tt4154756",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Age of Ultron",
          Year: "2015",
          imdbID: "tt2395427",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
        },
        {
          Title: "Avengers: Endgame",
          Year: "2019",
          imdbID: "tt4154796",
          Type: "movie",
          Poster:
            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
        },
      ]
      var milinumMovies=[];
        movies.forEach(movie => {
          if (movie.Year >= 2000) {
              milinumMovies.push(movie);
            }
        });
        return milinumMovies;
}
console.log(onlyInThisMillennium());