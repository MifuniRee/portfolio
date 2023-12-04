const contactform = document.querySelector("#contactform");
const submitbtn = document.querySelector(".btn .btn2");
const nameinput = document.querySelector("#Name");
const emailinput = document.querySelector("#Email");
const messageinput = document.querySelector("#Message");

const publickey = "qyyKDzwjulJoptZYX"
const  serviceID = "service_2eg6lgc"
const templateID = "template_8pqo90p"

emailjs.init(publickey);

contactform.addEventListener("submit", e =>{
    e.preventDefault();
    const inputfields ={
        name: nameinput.value,
        email: emailinput.value,
        message: messageinput.value
    }
    emailjs.send(serviceID, templateID, inputfields)
  .then(() => {
    submitbtn.innerText = "Message Sent successfully";
    nameinput.value = "";
    emailinput.value ="";
    messageinput.value = "";
}, (error) => {console.log(error);
    submitbtn.innerText = "Something went wrong";
});
});