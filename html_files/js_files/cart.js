var str = "";
var elements = [];

window.addEventListener('load', function() {
    console.log("Hello");
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
    
}
