var fname = document.getElementById("fname")
var lname = document.getElementById("lname")
var mail = document.getElementById("mail")
var pwd = document.getElementById("pwd")
var phone = document.getElementById("phone")
var bio = document.getElementById("bio")

var fnamep = document.getElementById("fnamep")
var lnamep = document.getElementById("lnamep") 
var mailp = document.getElementById("mailp")
var pwdp = document.getElementById("pwdp") 
var phonep = document.getElementById("phonep") 
var biop = document.getElementById("biop")

const btn = document.getElementById("btn")

var statusOfData ={
    fnameStatus : true,
    lnameStatus : true,
    mailStatus : true,
    pwdStatus :true,
    phoneStatus : true,
    bioStatus : true,
}

// fnamep.innerText = "First name must be alphanumeric and contain 3-16 characters"
// lnamep.innerText = "Last name must be alphanumeric and contain 3-16 characters"
// mailp.innerText = "Email must be valid address, e.g. example@example.com"
// pwdp.innerText = "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters"
// phonep.innerText = "A valid Telephone number (11 digits and 333-333-3334)"
// biop.innerText = "Bio must contain only lowercase letters, underscores,hyphens and be 8 - 50 characters"


function Checkfname(params) {
    if(fname.value == "" || fname.value.length < 3 || fname.value.length > 16 || /^[A-Z]*$/.test(fname.value[0]) == false){
        fnamep.innerText = "First name must be alphanumeric and contain 3-16 characters"
        statusOfData.fnameStatus = false
        fname.classList.remove("input")
        fname.classList.remove("green_input")
        fname.classList.add("error_input")
    }else{
        fnamep.innerText = ""
        statusOfData.fnameStatus = true
        fname.classList.remove("error_input")
        fname.classList.add("input")
    }
}

function Checklname(params) {
    if(lname.value == "" || lname.value.length < 3 || lname.value.length > 16  || /^[A-Z]*$/.test(lname.value[0]) == false){
        lnamep.innerText = "Last name must be alphanumeric and contain 3-16 characters"
        statusOfData.lnameStatus = false
        lname.classList.remove("input")
        lname.classList.remove("green_input")
        lname.classList.add("error_input")
    }else{
        lnamep.innerText = ""
        statusOfData.lnameStatus = true
        lname.classList.remove("error_input")
        lname.classList.add("input")
    }
}

function Checkmail(params) {
    if(mail.value == "" || /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}[a-zA-Z\s])+$/.test(mail.value) == false){
        mailp.innerText = "Email must be valid address, e.g. example@example.com"
        statusOfData.mailStatus = false
        mail.classList.remove("input")
        mail.classList.remove("green_input")
        mail.classList.add("error_input")
    }else{
        mailp.innerText = ""
        statusOfData.mailStatus = true
        mail.classList.remove("error_input")
        mail.classList.add("input")
    }
}

function Checkpwd(params) {
    if(pwd.value == "" || /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pwd.value) == false){
        pwdp.innerText = "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 characters"
        statusOfData.pwdStatus = false
        pwd.classList.remove("input")
        pwd.classList.remove("green_input")
        pwd.classList.add("error_input")
    }else{
        pwdp.innerText = ""
        statusOfData.pwdStatus = true
        pwd.classList.remove("error_input")
        pwd.classList.add("input")
    }
}

function Checkphone(params) {
    if(phone.value == "" || phone.value.length == 10 || /^\w{9,9}\d+$/.test(phone.value) == false){
        phonep.innerText = "A valid Telephone number (11 digits and 333-333-3334)"
        statusOfData.phoneStatus = false
        phone.classList.remove("input")
        phone.classList.remove("green_input")
        phone.classList.add("error_input")
    }else{
        phonep.innerText = ""
        statusOfData.phoneStatus = true
        phone.classList.remove("error_input")
        phone.classList.add("input")
    }
}

function Checkbio(params) {
    if(bio.value == "" || bio.value.length < 8 || bio.value.length > 50 || /^[a-z]*$/.test(bio.value[0]) == false){
        biop.innerText = "Bio must contain only lowercase letters, underscores,hyphens and be 8 - 50 characters"
        statusOfData.bioStatus = false
        bio.classList.remove("input")
        bio.classList.remove("green_input")
        bio.classList.add("error_input")
    }else{
        biop.innerText = ""
        statusOfData.bioStatus = true
        bio.classList.remove("error_input")
        bio.classList.add("input")
    }
}

function check(params) {

    if(statusOfData.fnameStatus){
        Checkfname()
        console.log("submit",statusOfData.fnameStatus)
    }else{
        Checkfname()
        console.log("submit",statusOfData.fnameStatus)
    }

    if(statusOfData.lnameStatus){
        Checklname()
        console.log("submit",statusOfData.lnameStatus)
    }else{
        Checklname()
        console.log("submit",statusOfData.lnameStatus)
    }

    if(statusOfData.mailStatus){
        Checkmail()
        console.log("submit",statusOfData.mailStatus)
    }else{
        Checkmail()
        console.log("submit",statusOfData.mailStatus)
    }

    if(statusOfData.pwdStatus){
        Checkpwd()
        console.log("submit",statusOfData.pwdStatus)
    }else{
        Checkpwd()
        console.log("submit",statusOfData.pwdStatus)
    }

    if(statusOfData.phoneStatus){
        Checkphone()
        console.log("submit",statusOfData.phoneStatus)
    }else{
        Checkphone()
        console.log("submit",statusOfData.phoneStatus)
    }

    if(statusOfData.bioStatus){
        Checkbio()
        console.log("submit",statusOfData.bioStatus)
    }else{
        Checkbio()
        console.log("submit",statusOfData.bioStatus)
    }

    if(statusOfData.bioStatus && statusOfData.phoneStatus && statusOfData.pwdStatus && statusOfData.mailStatus && statusOfData.lnameStatus && statusOfData.fnameStatus){
        btn.classList.remove("btn_error")
        btn.classList.add("btn_submit")

        fname.classList.remove("input")
        lname.classList.remove("input")
        mail.classList.remove("input")
        pwd.classList.remove("input")
        phone.classList.remove("input")
        bio.classList.remove("input")

        fname.classList.add("green_input")
        lname.classList.add("green_input")
        mail.classList.add("green_input")
        pwd.classList.add("green_input")
        phone.classList.add("green_input")
        bio.classList.add("green_input")
    }else{
        btn.classList.remove("btn_submit")
        btn.classList.add("btn_error")  
        
        // fname.classList.remove("green_input")
        // lname.classList.remove("green_input")
        // mail.classList.remove("green_input")
        // pwd.classList.remove("green_input")
        // phone.classList.remove("green_input")
        // bio.classList.remove("green_input")

        // fname.classList.add("error_input")
        // lname.classList.add("error_input")
        // mail.classList.add("error_input")
        // pwd.classList.add("error_input")
        // phone.classList.add("error_input")
        // bio.classList.add("error_input")
    }
}