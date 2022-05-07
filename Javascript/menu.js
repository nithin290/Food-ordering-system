const selected_items = [];

function disable_button(s){
    console.log(s);
    let button = document.getElementById(s);
    console.log(getComputedStyle(button).backgroundColor);
    if(getComputedStyle(button).backgroundColor == "rgb(211, 211, 211)"){
        console.log("Block entered");
        button.style.backgroundColor = 'transparent';
        button.style.color = 'beige';
        var x = selected_items.indexOf(button.innerHTML);
        console.log(x);
        selected_items.splice(x, 1);
        var output = "";
        for(var i = 0 ; i < selected_items.length ; i++){
            output += selected_items[i];
            output += ":";
        }
        localStorage.setItem('greeting', output);
        console.log(output);
        console.log(selected_items);
    }
    else{
        console.log("If not block entered");
        button.style.backgroundColor = 'LightGrey';
        button.style.color = 'black';
        selected_items.push(button.innerHTML);
        var output = "";
        for(var i = 0 ; i < selected_items.length ; i++){
            output += selected_items[i];
            output += ":";
        }
        localStorage.setItem('greeting', output);
        console.log(output);
        console.log(selected_items);
    }
    
}