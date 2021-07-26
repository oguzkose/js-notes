// let fullName;
// fullName="Oğuz";
// fullName+=" Köse";
// console.log(fullName);

// let city ="Istanbul" , district="Kadikoy";
// console.log(city + " " + district)

// const SERVER_PASSWORD = "lsdlmv5s23sdk5";
// console.log(SERVER_PASSWORD);

// const PI = 3.14;
// console.log(PI);

// const contact = {
//     contactName:"Oğuz",
//     numbers:"5551234567"
// }
// console.log(contact.contactName + " " + contact.numbers);

// let number = 5
// number++
// console.log(number)

// number--
// console.log(number)

// let kalan = number%2
// console.log(kalan)

// console.log(number**3)

// var number = 1.4
// console.log( Math.floor(number))    //Aşağıya yuvarlar Output: 1
// console.log (Math.ceil(number))     //Yukarı yuvarlar Output: 2
// console.log(Math.round(number))     //Yakın olduğu tarafa yuvarlar Output: 1

// let newNumber = "11"
// console.log(newNumber)              //Output: string 11
// console.log(Number(newNumber))      //Output: int 11

// let firstName ;
// firstName="Oguz"
// console.log(typeof(firstName))

// const PI=3.14;
// console.log(typeof(PI));

// let stringNumber = "15"
// stringNumber= parseInt(stringNumber)
// console.log(typeof(stringNumber))

// let stringNumber= "3.14"
// stringNumber=parseFloat(stringNumber)
// console.log(typeof(stringNumber))

// let number = 15
// number = number.toString()
// console.log(typeof(number))

// let username ="Oguz"
// let message = `Merhaba ${username} Hoşgeldin`
// console.log(message)

//let userName = "Oguz"
//let email= "oguz@info.com"

//console.log(userName.length) //stringin karakter sayısı kaç?

//console.log (email.search("@")) // "@" hangi indexte?

//console.log(userName.toUpperCase()) //Büyük harfe çevir

//console.log(userName.toLowerCase()) //Küçük harfe çevir

//console.log(userName[3]) // [3] index numaralı karakter hangisi

//console.log(email.slice(4)) //[4] ve sonrasını al

//console.log(email.slice(0,9)) //[0] ve [9] aralığı al. [9] Dahil değil

//console.log(userName.indexOf('u')) // u Harfi ilk hangi indexte?
//console.log(email.lastIndexOf("o")) // o Harfi en son hangi indexte?

//newEmail=email.replace('info.com','gmail.com') // info.com kısmını gmail.com ile değiştir
//console.log(newEmail)

//doesItContain = newEmail.includes('gmail') // içeriyor mu?
//console.log(doesItContain);

//console.log(email.startsWith("oguz")) // bununla mı başlıyor
//console.log(email.endsWith("@info.com")) // bununla mı bitiyor

// let header = document.getElementById('title')
// header.innerHTML="Hello Humanity"

// let link = document.querySelector("ul#unordered>li#link-item>a")
// link.innerHTML="Google"

// let firstList=document.querySelector("ol>li:first-child")
// console.log(firstList.innerHTML)

// let lastList=document.querySelector("ol>li:last-child")
// console.log(lastList.innerHTML)

// let orderList = document.querySelector("ol")
// let createList = document.createElement("li")
// createList.innerHTML="yeni eklenen liste elemanı"
// orderList.append(createList)
// console.log(orderList)

// let header = document.querySelector("h3")
// header.classList.add("text-blue","title")
// console.log(header.classList)

// header.classList.remove("text-blue")
// console.log(header.classList)

// let userName = prompt("Kullanıcı adınızı yazınız");
// if(userName.length>0){console.log(userName)}
// else{console.log("Kullanıcı ismi girilmedi")}

// ***************SWİTCH-CASE*******************
// let weatherForecast = prompt("Hava nasıl?")
// switch (weatherForecast) {
//     case "güneşli":
//         console.log("T-Shirt giy")
//         break;
//     case "yağmurlu":
//         console.log("yağmurluk al")
//         break
//     default:
//         console.log(`${weatherForecast.toString()}? Bende böyle bi bilgi yok`)
//         break;
// }

// let userName = prompt("Kullanıcı adınızı yazınız");

// userName.length > 0
//   ? console.log(`Hoşgeldin ${userName}`)
//   : console.log("tanıyamadım");

// **************Functions************************
// function calculateCircleArea(r, PI = 3.14) {
//   var area = PI * r * r;
//   return area;
// }

// console.log(calculateCircleArea(3))
//******************Arrow Function********************* */

// const sayHello = (firstName) => { console.log(`Merhaba ${firstName}`) }
// sayHello("Oğuz")

// const sayHello2 = firstName => console.log(`Merhaba ${firstName}`)
// sayHello2("Oğuz")

// const sayHello3 = (firstName,lastname)=>
// {
//   var info = console.log(`Merhaba ${firstName} ${lastname}`)
//   console.log(`Merhaba ${firstName} ${lastname}`)
// }
// sayHello3("Oğuz","Köse")

//**********************Events*******************/

// let events = document.querySelector("#events") //ID'si events olan elemanı yakaladım
// events.addEventListener("click",domClick)//click event'i ve fonksiyon atadım
// function domClick()
// {
//   console.log("Tıklandı")
// }

// let button = document.querySelector("#button");
// button.addEventListener("click", clickButton);

// function clickButton() {
//   console.log("Butona Tıklandı");
//   this.style.color == "blue"
//     ? (this.style.color = "red")
//     : (this.style.color = "blue");
// }

//**************Local Storage ****************/
// localStorage.setItem("Car","Volvo") //setItem ile key ve value verilip local storage set edilir
// let localStorageKey=localStorage.getItem("Car") // getItem ile çağırılır
// console.log(localStorageKey) //Output: Value
//localStorage.removeItem("Car") // removeItem ile key ismi verilerek storage silinebilir


/************************JSON.stringify() - JSON.parse() ***************/

// let user = { name: "Oğuz", surname: "Köse", isActive: true };

// localStorage.setItem("userLocalStorage",user) //local storage set edildi

// console.log(localStorage.getItem("userLocalStorage")) // Output: [object Object]

// localStorage.setItem("userLocalStorage",JSON.stringify(user)) //Object tipi stringify edildi

// console.log(localStorage.getItem("userLocalStorage")) // Output: {"name":"Oğuz","surname":"Köse","isActive":true}

// let userInfo = localStorage.getItem("userLocalStorage")
// userInfo= JSON.parse(userInfo) // userInfo Parse edildi
// console.log(userInfo) // Output: {name: "Oğuz", surname: "Köse", isActive: true}

/**************FORM-SUBMIT****************** */ 

// let formDOM = document.querySelector("#userForm") // form'u yakaladım
// formDOM.addEventListener("submit",submitForm) //form'a submit event'i atadım


// function submitForm(event) {
//   event.preventDefault(); // GET metotun defaultta yapacağı işlem engellendi
//   console.log(`${content} gönderildi`)
// }