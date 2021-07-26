## Let kullanımı

- Let keyword'unu kullanarak herhangi bir tipte değişken atayabilirim

```JS
let fullName;
fullName="Oğuz";
fullName+=" Köse";
console.log(fullName);  //Output : Oğuz Köse
// şu şekilde de kullanılabilir
let city ="Istanbul" , district="Kadikoy";
console.log(city + " " + district)

```

## Const kullanımı

- Const keyword'u sabit bir veriyi tanımlamak için kullanılır.tanımlandıktan sonra değiştirilemez.

```JS
const PI = 3.14;
console.log(PI);
// şu şekilde de kullanılabilir
const contact = {
    contactName:"Oğuz",
    numbers:"5551234567"
}
console.log(contact.contactName + " " + contact.numbers);
```

## Matematiksel işlemler

```JS
let number = 5
number++                //++ ifadesi 1 artırır
console.log(number)     // Output 6

number--                //-- ifadesi 1 azaltır
console.log(number)     // Output 5

let kalan =number%2     // % ifadesi mod alır
console.log(kalan)      // Output 1

console.log(number**3)  // ** ifadesi ile üstel işlemler yapılır
                        // Output 5 üzeri 3 = 125

var number = 1.4
console.log( Math.floor(number))    //Aşağıya yuvarlar Output: 1
console.log (Math.ceil(number))     //Yukarı yuvarlar Output: 2
console.log(Math.round(number))     //Yakın olduğu tarafa yuvarlar Output: 1

let newNumber = "11"
console.log(newNumber)              //Output: string 11
console.log(Number(newNumber))      //Output: int 11

```

## Tip Dönüşümleri

- Bir değişkene atanmış değerin tipini öğrenmek için typeof kıllanılır

```JS
let firstName ;
firstName="Oguz"
console.log(typeof(firstName))      //Output: string
```

- String bir ifade parsInt() metotu ile number tipine dönüştürülebilir

```JS
let stringNumber = "15"
stringNumber= parseInt(stringNumber)
console.log(typeof(stringNumber))
```

- String bir ifade parsFloat() metotu ile number tipine dönüştürülebilir

```JS
let stringNumber= "3.14"
stringNumber=parseFloat(stringNumber)
console.log(typeof(stringNumber))
```

- Sayısal bir ifade toString() metotu ile string tipine dönüştürülebilir

```JS
let number = 15
number = number.toString()
console.log(typeof(number)
```

## Template Literals

- backtick'ler arasında ${} kullanarak, değer atanmış değişkenlerin ismini yazabilirim

```JS
let username ="Oguz"
let message = `Merhaba ${username} Hoşgeldin`
console.log(message)
//Output: Merhaba Oguz Hoşgeldin
```

## String veri türü işlemleri

- length , search() , toUpperCase() , toLowerCase() , slice(numb) , slice(numb,numb2) , indexOf() , lastIndexOf() , replace() , includes() , startsWith() , endsWith()

```JS
let userName = "Oguz"
let email= "oguz@info.com"

console.log(userName.length) //stringin karakter sayısı kaç?

console.log (email.search("@")) // "@" hangi indexte?

console.log(userName.toUpperCase()) //Büyük harfe çevir

console.log(userName.toLowerCase()) //Küçük harfe çevir

console.log(userName[3]) // [3] index numaralı karakter hangisi

console.log(email.slice(4)) //[4] ve sonrasını al

console.log(email.slice(0,9)) //[0] ve [9] aralığı al. [9] Dahil değil

console.log(userName.indexOf('u')) // u Harfi ilk hangi indexte?
console.log(email.lastIndexOf("o")) // o Harfi en son hangi indexte?

newEmail=email.replace('info.com','gmail.com') // info.com kısmını gmail.com ile değiştir
console.log(newEmail)

doesItContain = newEmail.includes('gmail') // içeriyor mu?
console.log(doesItContain);

console.log(email.startsWith("oguz")) // bununla mı başlıyor

console.log(email.endsWith("@info.com")) // bununla mı bitiyor
```

## DOM(Document Object Model) Manipulation

- getElementById() metotu ile Id'ye göre element seçip manipule edilebilir

Html

```Html
    <h2 id="title">Hello World</h2>
```

Js

```JS
    let header = document.getElementById('title')
    header.innerHTML="Hello Humanity"
```

- QuerySelector ile element seçebilirim

Html

```Html
   <ul id="unordered">
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li id="link" >
            <a href="https://www.google.com" target="_blank">Link</a>
        </li>
    </ul>
```

Js

```JS
    let link = document.querySelector("ul#unordered>li#link>a")//id'si unordered olan ul'nin içindeki , id'si link-item olan li'nin içindeki a elementini seçer.
    link.innerHTML="Google" //seçilen elementin "Link" olan değerini "Google" yapar.
```

- Listenin ilk ve son elemanını bulma (first-child , last-child)

Html

```Html
    <ol>
        <li>Lorem.</li>
        <li>Tenetur?</li>
        <li>Consequuntur!</li>
    </ol>
```

Js

```JS

    let firstList=document.querySelector("ol>li:first-child")
    console.log(firstList.innerHTML) //Output : lorem.

    let lastList=document.querySelector("ol>li:last-child")
    console.log(lastList.innerHTML) //Output : Consequuntur!

```

- CreateElement() ve Append() ile Listeye eleman ekleme

Html

```Html
    <ol>
        <li>Lorem.</li>
        <li>Tenetur?</li>
        <li>Consequuntur!</li>
    </ol>
```

Js

```JS
    let orderList = document.querySelector("ol")

    let createList = document.createElement("li")
    createList.innerHTML="yeni eklenen liste elemanı"

    orderList.append(createList)

    console.log(orderList)
```

- DOM'a add() ve remove() ile class ekleyip, silme

Html

```HTML
    <h3>Class ekleme ve silme</h3>
```

Js

```JS
    let header = document.querySelector("h3")
    header.classList.add("text-blue","title") //Class ekleme
    console.log(header.classList)

    header.classList.remove("text-blue")      //Class silme
    console.log(header.classList)
```

## If-Else

Js

```JS

    let userName = prompt("Kullanıcı adınızı yazınız");
    if(userName.length>0){console.log(userName)} //koşul uygunsa bunu yap
    else{console.log("Kullanıcı ismi girilmedi")}//diğer durumlarda ise bunu yap
```

## Switch-Case

Js

```JS
let weatherForecast = prompt("Hava nasıl?")
switch (weatherForecast) {
    case "güneşli":
        console.log("T-Shirt giy")
        break;
    case "yağmurlu":
        console.log("yağmurluk al")
        break
    default:
        console.log(`${weatherForecast.toString()}? Bende böyle bi bilgi yok`)
        break;
}
```

## Ternary Operator ile short if kullanımı

- condition ? true olma durumu : false olma durumu

```JS
    let userName = prompt("Kullanıcı adınızı yazınız")

    userName.length>0
    ? console.log(`Hoşgeldin ${userName}`)
    : console.log   ("tanıyamadım")
```

## Functions

- Fonksiyonlar parametre alan , almayan ,Değer döndüren ,döndürmeyen olarak ayrılırlar

Js

```JS
    function calculateCircleArea(r, PI = 3.14) {
        var area = PI * r * r;
        return area;
    }

    console.log(calculateCircleArea(3)) //Output : 28.259999999999998

```

## Arrow Function

- const ile birlikte fonksiyonun adı + parametresi + fat Arrow işareti(=>) + fonksiyonun gövdesi şeklinde yazılır. Eğer fonksiyon birden çok parametreye sahipse parantez içinde virgülle ayırarak yazılır. Gövdesinde birden çok işlem yapılacaksa süslü parantez mecburidir.

```JS
    //V1
    const sayHello = (firstName) =>
    { console.log(`Merhaba ${firstName}`) }
    sayHello("Oğuz")

    //V2
    const sayHello2 = firstName =>
    console.log(`Merhaba ${firstName}`)
    sayHello2("Oğuz")
    
    //V3
    const sayHello3 = (firstName,lastname) =>
    {
      var info = console.log(`Merhaba ${firstName} ${lastname}`)
      console.log(`Merhaba ${firstName} ${lastname}`)
    }
    sayHello3("Oğuz","Köse")
```
## Events
```JS
    
    let events = document.querySelector("#events") //ID'si events olan elemanı yakaladım
    events.addEventListener("click",domClick)//click event'i ve fonksiyon atadım
    function domClick()
    {
      console.log("Tıklandı")
    }

```
- tıklandığında style verme

```JS
    let button = document.querySelector("#button");
    button.addEventListener("click", clickButton);

    function clickButton() {
      console.log("Butona Tıklandı");
      this.style.color == "blue"
        ? (this.style.color = "red")
        : (this.style.color = "blue");
    }
```

## Local Storage

- Tarayıcıda önemli olmayan verileri saklamaya yarar

```JS
    localStorage.setItem("Car","Volvo") //setItem ile key ve value verilip local storage set edilir
    let localStorageKey=localStorage.getItem("Car") // getItem ile çağırılır
    console.log(localStorageKey) //Output: Value
    localStorage.removeItem("Car") // removeItem ile key ismi verilerek storage     silinebilir

```
- Local Storage object'ini JSON.stringify() ile string yapıya ve JSON.parse() ile string yapıdan Json yapısına çevirme

```JS
    let user = { name: "Oğuz", surname: "Köse", isActive: true };

    localStorage.setItem("userLocalStorage",user) //local storage set edildi

    console.log(localStorage.getItem("userLocalStorage")) // Output:[object    Object]

    localStorage.setItem("userLocalStorage",JSON.stringify(user)) //Object tipi stringify edildi

    console.log(localStorage.getItem("userLocalStorage")) // Output:    {"name":"Oğuz","surname":"Köse","isActive":true}

    let userInfo = localStorage.getItem("userLocalStorage")
    
    userInfo= JSON.parse(userInfo) // userInfo Parse edildi
    
    console.log(userInfo) // Output: {name: "Oğuz", surname: "Köse", isActive: true}

```
## FORM ,FORM SUBMIT MANAGEMENT
Html

```Html
    <div class="container mt-5">
        <div class="row">
            <div class="col-sm-8">
                <form id="userForm">
                    <input type="number" name="score" id="score">
                    <button type="submit" class="btn btn-success">Gönder</button>
                </form>
            </div>
        </div>
    </div>
```
Js

```JS
    let formDOM = document.querySelector("#userForm") // form'u yakaladım
    formDOM.addEventListener("submit",submitForm) //form'a submit event'i atadım
    
    function submitForm(event) {
      event.preventDefault(); // GET metotun defaultta yapacağı işlem engellendi
      console.log(`${content} gönderildi`)
    }

```
