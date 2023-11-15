const passLength = document.getElementById('length')
const reqPass = document.getElementById('reqPass');
const upperCase = document.getElementById('uppercase')
const lowercase = document.getElementById('lowercase')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
let generateButton = document.querySelector('.generate')
const copyClipBoard = document.querySelector('.copy');
let arr = [upperCase, lowercase, numbers, symbols];
let charSet = "";


//this is function to generate password
function generateMypassword() {
     let password = "";
       function generatePass(length) {
        for (let i = 0; i < length; i++) {
            let index = Math.floor(Math.random() * charSet.length);
            password += charSet[index];
        }
        return password;

    }

    const passwordAns = generatePass(passLength.value);
    reqPass.value = passwordAns;//setting the value in our answer field
    console.log(passwordAns);

}




//event listener function



generateButton.addEventListener('click', () => {

    //to check if the passwordlength field is not empty
    if (passLength.value === '') {
        alert('passlength can not be empty')
    }

    //filtering the boxes that are marked checked 
    const result = arr.filter((ele) => ele.checked === true);

    // adding char set which we are selecting password
    for (let ele of result) {
        if (ele === upperCase) {
            charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        }
        if (ele === lowercase) {
            charSet += "abcdefghijklmnopqrstuvwxyz";
        }
        if (ele === numbers) {
            charSet += "123456789";
        }
        if (ele === symbols) {
            charSet += "!@#$%^&*()_-+=<>?";
        }
        console.log(charSet);

    }

    generateMypassword()//calling function generate password


    charSet = "";//setting charset to zero 
})



copyClipBoard.addEventListener('click', () => {
   
    console.log('clicked hahahahhaha');
    function copy() {
        let copyText = document.querySelector("#reqPass");
        copyText.select();
        document.execCommand("copy");
    }

    copy();
 

})
