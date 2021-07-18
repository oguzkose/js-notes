## Let kullanımı
* Let keyword'unu kullanarak herhangi bir tipte değişken atayabilirim
```Js
let fullName;
fullName="Oğuz";
fullName+=" Köse";
console.log(fullName);  //Output : Oğuz Köse
// şu şekilde de kullanılabilir
let city ="Istanbul" , district="Kadikoy";
console.log(city + " " + district)

```
## Const     kullanımı
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
```Js
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
