var str = 'HAMZAMALIK'

console.log(str.toUpperCase())


console.log(str.toLowerCase())


console.log(str.indexOf('a'))


console.log(str.lastIndexOf('a'))



var username = 'HAMZA'
console.log(username.charAt(0).toUpperCase() + username.slice(1))
 var firstLetter = username.charAt(0)
 console.log("firstLetter=>", firstLetter)

 firstLetter = firstLetter.toUpperCase()
 console.log("firstLetter UpperCase=>", firstLetter)

 firstLetter = firstLetter.toUpperCase()
 console.log("firstLetter LOWERCase=>", firstLetter)



 var copyAll = username.slice(1)
 console.log("Copy All=>", copyAll)

 var capitilize = firstLetter + copyAll
 console.log("Capitilize=>", capitilize)


var string = ' HAMZA is very cute..'

string = string.replace('HAMZA', 'FAIQ')

string = string.replaceAll('HAMZA', 'FAIQ')
console.log(string)


var email = '  HM446811@gmail.com  '
console.log("Email Lenght=>", email.length)

//trim
email = email.trim()
console.log("Email Lenght=>", email.length)




var string = 'Ubaid is very cute.Ubaid always very loud in the class.'

var count = 0
for (var i = 0; i < string.length; i++) {
    if (string.charAt(i).toLowerCase() == 'u') {
        count++
    }
}

console.log("Number of A's are " + count)