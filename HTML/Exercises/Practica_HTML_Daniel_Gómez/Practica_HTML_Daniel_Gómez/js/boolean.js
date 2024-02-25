window.addEventListener('load', function() {
    let container = document.querySelector(".container");
    var esTrue = $('<h1>Es true</h1>');
    var esFalse = $('<h1>Es false</h1>');

    let a=1;
    let b = 2;
    if(a<b ==1){
        $('body').append(esTrue);
    }
    else if(a>b ==0){
        $('body').append(esFalse);
    }
});