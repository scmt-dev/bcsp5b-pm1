// ** comment **
document.write('Hello world!')
console.log('Hell world!, from console')
let name = 'Mark';
document.writeln(name);
console.log(name)
name = 'Max';
console.log(name)
// const variable
const PI = 3.14;
console.log(PI)
// array
const colors = ['red', 'green', 1];
console.warn(colors)
console.log(colors[1])
console.table(colors)
console.error(1)
// boolean
const isAdmin = true;
const isUser = !isAdmin && isAdmin;
const isAnonymous = !!isUser;
console.log(isAdmin);
console.log(isUser);
console.log(isAnonymous);
// object
const person = {
    name: 'Mark',
    phone: '9787 7777',
    address: {
        village: 'Nongborn',
        district: 'Saysatha',
        province: 'vietiance'
    },
    social: ['faecbook', 'youtube']
}
console.warn(person.name)
console.warn(person.phone)
console.warn(person.address.village)
console.warn(person.social[0])
console.warn(person)

// how to create function
// create funtion fetch data from api
async function getApi() {
    try {
        const url = 'https://api.publicapis.org/entries'
        // request api from server
        const req = await fetch(url, {
            method: 'GET',
        })
        console.log(req)
        const res = await req.json() // convert to JSON data
        console.log(res.count)
        document.getElementById('total').innerText = res.count
        for(const item of res.entries) {
            // document.writeln(item.Category)
        }
        // add to body (DOM)
    } catch (error) {
        console.error(error)
    }
}
getApi() // call function 
