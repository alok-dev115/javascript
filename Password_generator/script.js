const password_box = document.getElementById("password")
// const copy_btn = document.getElementById("copy")
// const generate_btn = document.getElementById("generate")

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let numbers = "0123456789"
let symbols = "!@#$%^&*()_+[]{}|;:,.<>?`~"

let password_length = 12;
let random_chr = uppercase + lowercase + numbers + symbols


function generate_password(password_length=12){
    password = ""
    password += uppercase[Math.floor(Math.random() * uppercase.length)]
    password += lowercase[Math.floor(Math.random() * lowercase.length)]
    password += numbers[Math.floor(Math.random() * numbers.length)]
    password += symbols[Math.floor(Math.random() * symbols.length)]  
    while(password.length<password_length){
        let random_index = Math.floor(Math.random() * random_chr.length);
        password += random_chr[random_index];        
    }
    password_box.value = password
}

function copy(){
    let val = password_box.value;
    navigator.clipboard.writeText(val);
}