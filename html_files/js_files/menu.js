const selected_items = [];

function disable_button(s){
    console.log(s);
    const button = document.getElementById(s);
    button.style.backgroundColor = 'LightGrey';
    button.disabled = true;
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