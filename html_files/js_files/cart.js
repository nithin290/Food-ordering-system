var str = "";
var elements = [];

window.addEventListener('load', function() {
    console.log("Hello");
    console.log("str-" + str);
    if (str == "") {
        str = localStorage.getItem('greeting');
        console.log(str);
        elements = str.split(":");
        // for (let i = 0; i < elements.length; i++) {
        //     elements[i] = [elements[i],'100'];
        // }
        make_order();
    }
    else {
        make_order();
    }
})

function make_order() {
    let ele = [];
    for(let i = 0 ; i < elements.length-1 ; i++){
        ele[i] = document.createElement("p");
        ele[i].className = "item";
        ele[i].id = "item" + i;
        ele[i].style.width = 80 + "%";
        ele[i].style.textAlign = "left";
        ele[i].style.position = "relative";
        let text = document.createTextNode(elements[i]);
        console.log(text);
        ele[i].appendChild(text);
        ele[i].style.color = 'azure';

        let cancel = document.createElement("button");
        cancel.id = "cancel" + i;
        cancel.className = 'cancel';
        cancel.type = "button";
        cancel.innerHTML = "X";
        cancel.addEventListener("click", (event) => {
            console.log(event);
            // alert(ele[i].id);
            remove_from_cart(ele[i].id);
        }, false);
        ele[i].appendChild(cancel);

        let output = document.createElement("input");
        output.type = "number";
        output.id = 'quantity' + i;
        output.value = 1;
        output.min= 1;
        output.style.fontSize = 20 + "px";
        output.style.width = 40 + "px";
        output.style.float = "right";
        output.style.position = 'relative';
        output.style.height = 25 + "px";
        

        ele[i].appendChild(output);

        const element = document.getElementById('items');
        element.appendChild(ele[i]);
    }
}

function remove_from_cart(id) {
    // alert(id);
    var ele = document.getElementById(id);
    // alert(ele);
    ele.parentNode.removeChild(ele);
}

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
var rootElement = document.documentElement;

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
scrollToTopBtn.addEventListener("click", scrollToTop);

function validate() {
    house_number = document.myform.house_number.value;
    area = document.myform.area.value;
    city = document.myform.city.value;
    email = document.myform.email.value;
    zip_code = document.myform.zip_code.value;
    mobile = document.myform.mobile.value;

    let house_err = area_err = city_err = email_err = zip_err = mobile_err = true

    if(house_number == "") {
        console.log("House error", "Please enter your house number");
    } 
    else {
        house_err = false;
    }

    if(area == "") {
        console.log("Area error", "Please enter your area");
    }
    else {
        area_err = false;
    }

    if(city == "") {
        console.log("City error", "Please enter your city name");
    }
    else {
        let regex = /^[A-Za-z]+$/;                
        if(regex.test(city) === false) {
            console.log("city error", "Please enter a valid city");
        } 
        else {
            // console.log("nameErr", "");
            city_err = false;
        }
    }

    if(zip_code == "") {
        console.log("zipcode error", "Please enter your zipcode");
    }
    else {
        let regex = /^\d{6}$/;             
        if(regex.test(zip_code) === false) {
            console.log("zipcode error", "Please enter a valid zipcode");
        } 
        else {
            // console.log("nameErr", "");
            zip_err = false;
        }
    }

    if(email == "") {
        console.log("Email error", "Please enter your email address");
    }
    else {
        let regex = /^\w[._\d\w]*[\w\d]@\w+.com$/;             
        if(regex.test(email) === false) {
            console.log("Email error", "Please enter a valid email address");
        } 
        else {
            // console.log("nameErr", "");
            email_err = false;
        }
    }

    if(mobile == "") {
        console.log("mobile number error", "Please enter your mobile number");
    }
    else {
        let regex = /^\d{10}$/;             
        if(regex.test(mobile) === false) {
            console.log("moblie number error", "Please enter a valid moblie number");
        } 
        else {
            // console.log("nameErr", "");
            mobile_err = false;
        }
    }

    if((house_err && area_err && city_err && email_err && zip_err && mobile_err) == false) {
        return false;
    }
}


