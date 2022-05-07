var str = "";
var elements = [];

window.addEventListener('load', function() {
    console.log("str-" + str);
    if (str == "") {
        str = localStorage.getItem('greeting');
        console.log(str);
        elements = str.split(":");
        make_order();
    }
    else {
        make_order();
    }
})

function make_order() {
    let cart_table = document.createElement("table");
    cart_table.className = "cart_table";
    for(let i = 0 ; i < elements.length-1 ; i++) {
        let tri = document.createElement("tr");
        tri.id = "cart_table_row_" + i;
        
        let td1 = document.createElement("td");
        td1.className = "cart_table col1";

        let text_p = document.createElement("div");
        text_p.className = "item";
        text_p.id = "item" + i;
        text_p.style.height = 32 + "px";
        text_p.style.textAlign = "left";
        let text = document.createTextNode(elements[i]);
        console.log(text);
        text_p.appendChild(text);
        text_p.style.color = 'azure';

        let center1 = document.createElement("center");
        center1.appendChild(text_p);
        td1.appendChild(center1);
        tri.appendChild(td1);

        let td2 = document.createElement("td");
        td2.className = "cart_table col2";

        let plus = document.createElement("button");
        plus.id = "plus" + i;
        plus.className = 'plus';
        plus.type = "button";
        plus.innerHTML = "+";
        plus.addEventListener("click", (event) => {
            console.log(event);
            id_ = "quantity" + i;
            let ele = document.getElementById(id_);
            let value = ele.value;
            console.log(value);
            document.getElementById(id_).value = +value + 1;
        }, false);

        let center2 = document.createElement("center");
        center2.appendChild(plus);
        td2.appendChild(center2);
        tri.appendChild(td2);

        let td3 = document.createElement("td");
        td3.className = "cart_table col3";

        let output = document.createElement("input");
        output.type = "text";
        output.id = 'quantity' + i;
        output.disabled = true;
        output.className = 'quantity';
        output.value = 1;
        output.min= 1;
        output.style.fontSize = 20 + "px";
        output.style.width = 40 + "px";
        output.style.textAlign = "center";
        output.style.height = 30 + "px";
        let center3 = document.createElement("center");
        center3.appendChild(output);
        td3.appendChild(center3);
        tri.appendChild(td3);

        let td4 = document.createElement("td");
        td4.className = "cart_table col4";

        let minus = document.createElement("button");
        minus.id = "minus" + i;
        minus.className = 'minus';
        minus.type = "button";
        minus.innerHTML = "-";
        minus.addEventListener("click", (event) => {
            console.log(event);
            console.log(event);
            id_ = "quantity" + i;
            let ele = document.getElementById(id_);
            let value = ele.value;
            console.log(value);
            if (value > 1)
                document.getElementById(id_).value = +value - 1;
            // if (value == 2) {
            //     minus.disabled = 'true';
            //     if(ele.parentElement.classList.contains("minus"));
            //     ele.parentElement.classList.remove('minus');
            //     ele.parentElement.classList.add('minus_disabled');
            // }
        }, false);

        let center4 = document.createElement("center");
        center4.appendChild(minus);
        td4.appendChild(center4);
        tri.appendChild(td4);

        let td5 = document.createElement("td");
        td5.className = "cart_table col5";

        let cancel = document.createElement("button");
        cancel.id = "cancel" + i;
        cancel.className = 'cancel';
        cancel.type = "button";
        cancel.innerHTML = "X";
        cancel.addEventListener("click", (event) => {
            console.log(event);
            remove_from_cart(tri.id);
        }, false);

        let center5 = document.createElement("center");
        center5.appendChild(cancel);
        td5.appendChild(center5);
        tri.appendChild(td5);

        cart_table.appendChild(tri);
    }
    document.getElementById("items").appendChild(cart_table);
}

function remove_from_cart(id) {
    var ele = document.getElementById(id);
    ele.parentNode.removeChild(ele);
}

function prevent_change(e) {
    e.preventDefault();
}

function validate() {

    document.getElementById("error_msg_house").style.display = "none";
    document.getElementById("error_msg_area").style.display = "none";
    document.getElementById("error_msg_city").style.display = "none";
    document.getElementById("error_msg_zip").style.display = "none";
    document.getElementById("error_msg_email").style.display = "none";
    document.getElementById("error_msg_mobile").style.display = "none";
    document.getElementById("box1").style.border = 1 + "px solid rgb(255, 255, 255, 0.3)";
    document.getElementById("box2").style.border = 1 + "px solid rgb(255, 255, 255, 0.3)";
    document.getElementById("box3").style.border = 1 + "px solid rgb(255, 255, 255, 0.3)";
    document.getElementById("box4").style.border = 1 + "px solid rgb(255, 255, 255, 0.3)";
    document.getElementById("box5").style.border = 1 + "px solid rgb(255, 255, 255, 0.3)";
    document.getElementById("box6").style.border = 1 + "px solid rgb(255, 255, 255, 0.3)";

    house_number = document.myform.house_number.value;
    console.log(house_number);
    area = document.myform.area.value;
    city = document.myform.city.value;
    email = document.myform.email.value;
    zip_code = document.myform.zip_code.value;
    mobile = document.myform.mobile.value;

    let house_err = area_err = city_err = email_err = zip_err = mobile_err = true

    if(house_number == "") {
        console.log("House error", "Please enter your house number");
        document.getElementById("error_msg_house").style.display = "inline";
        document.getElementById("box1").style.border = 2 + "px solid red";
    } 
    else {
        house_err = false;
    }

    if(area == "") {
        console.log("Area error", "Please enter your area");
        document.getElementById("error_msg_area").style.display = "inline";
        document.getElementById("box2").style.border = 2 + "px solid red";
    }
    else {
        area_err = false;
    }

    if(city == "") {
        console.log("City error", "Please enter your city name");
        document.getElementById("error_msg_city").style.display = "inline";
        document.getElementById("box3").style.border = 2 + "px solid red";
    }
    else {
        let regex = /^[A-Za-z]+$/;                
        if(regex.test(city) === false) {
            console.log("city error", "Please enter a valid city");
            document.getElementById("error_msg_city").style.display = "inline";
            document.getElementById("box3").style.border = 2 + "px solid red";  
        } 
        else {
            city_err = false;
        }
    }

    if(zip_code == "") {
        console.log("zipcode error", "Please enter your zipcode");
        document.getElementById("error_msg_zip").style.display = "inline";
        document.getElementById("box4").style.border = 2 + "px solid red";

    }
    else {
        let regex = /^\d{6}$/;             
        if(regex.test(zip_code) === false) {
            console.log("zipcode error", "Please enter a valid zipcode");
            document.getElementById("error_msg_zip").style.display = "inline";
            document.getElementById("box4").style.border = 2 + "px solid red";
        } 
        else {
            zip_err = false;
        }
    }

    if(email == "") {
        console.log("Email error", "Please enter your email address");
        document.getElementById("error_msg_email").style.display = "inline";
        document.getElementById("box5").style.border = 2 + "px solid red";
    }
    else {
        let regex = /^\w[._\d\w]*[\w\d]@\w+.com$/;             
        if(regex.test(email) === false) {
            console.log("Email error", "Please enter a valid email address");
            document.getElementById("error_msg_email").style.display = "inline";
            document.getElementById("box5").style.border = 2 + "px solid red";
        } 
        else {
            email_err = false;
        }
    }

    if(mobile == "") {
        console.log("mobile number error", "Please enter your mobile number");
        document.getElementById("error_msg_mobile").style.display = "inline";
        document.getElementById("box6").style.border = 2 + "px solid red";
    }
    else {
        let regex = /^\d{10}$/;             
        if(regex.test(mobile) === false) {
            console.log("moblie number error", "Please enter a valid moblie number");
            document.getElementById("error_msg_mobile").style.display = "inline";
            document.getElementById("box6").style.border = 2 + "px solid red";
        } 
        else {
            mobile_err = false;
        }
    }

    if((house_err || area_err || city_err || email_err || zip_err || mobile_err) == true) {
        console.log('here');
        return false;
    }
}