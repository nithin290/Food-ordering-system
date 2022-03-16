function radio_checked(radio) {
    options = document.getElementsByName("paymentradio");
    if(radio.checked) {
        if(radio.id == "add_card") {
            document.getElementsByClassName("div_card")[0].style.display = "inline-block";
        }
        else {
            document.getElementsByClassName("div_card")[0].style.display = "none";
        }
        console.log(radio.parentElement.classList);
        radio.parentElement.classList.remove('defaupayment_optionslt_state');
        radio.parentElement.classList.add('selected_state');
    }
    for(let i = 0 ; i < options.length; i++) {
        if(options[i] == radio)
            continue;

        if(options[i].parentElement.classList.contains('selected_state')) {
            options[i].parentElement.classList.remove('selected_state');
            options[i].parentElement.classList.add('payment_options');
        }
    }
}
