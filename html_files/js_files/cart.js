var recieved = [];

window.addEventListener('load', function() {
    recieved.push(localStorage.getItem('greeting'));
    console.log(recieved);
    let str = recieved[recieved.length - 1];
    let elements = str.split(":");
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

        let cancel = document.createElement("button");
        cancel.id = "cancel" + i;
        cancel.type = "button";
        cancel.innerHTML = "X";
        let cancel_style = cancel.style;
        cancel_style.color = "white";
        cancel_style.border = 'none';
        cancel_style.transition = 2.5 + "s";
        cancel_style.backgroundColor = "red";
        cancel_style.width = 30 + "px";
        cancel_style.marginLeft = 10 + "px";
        cancel_style.height = 30 + "px";
        cancel_style.float = 'right';
        cancel_style.bottom = 80 + "%";
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
        output.style.height = 25 + "px";
        ele[i].appendChild(output);

        const element = document.getElementById('items');
        element.appendChild(ele[i]);
    }
})

function remove_from_cart(id) {
    // alert(id);
    var ele = document.getElementById(id);
    // alert(ele);
    ele.parentNode.removeChild(ele);
}