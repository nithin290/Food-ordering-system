var recieved = [];

window.addEventListener('load', function() {
    recieved.push(localStorage.getItem('greeting'));
    console.log(recieved);
    var str = recieved[recieved.length - 1];
    var elements = str.split(":");
    var temp = "";
    for(var i = 0 ; i < elements.length ; i++){
        temp += elements[i] + '<button type="button" class="item_button">+</button><br>';
        console.log(temp);
    }
    document.getElementById('items').innerHTML = temp;
})

// function addToCart(){
//     recieved.push(localStorage.getItem('greeting'));
//     console.log(recieved);
//     var str = recieved[recieved.length - 1];
//     var elements = str.split(":");
//     var temp = "";
//     for(var i = 0 ; i < elements.length ; i++){
//         temp += elements[i] + '<br>';
//         console.log(temp);
//     }
//     document.getElementById('items').innerHTML = temp;
// }