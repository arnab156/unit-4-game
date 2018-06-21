$(document).ready(function() {
    // var one, two, three, four;
    var win = 0;
    var loss = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;

    var x = document.getElementById("compRandom");
    x.textContent = Math.floor((Math.random() * 120) + 8);
    var compRandom = x.textContent;
    $("#addedNum").css({"color": "palevioletred", "font-size": "300%"});
    // var one = document.getElementById("1");
     a = Math.floor((Math.random() * 12) + 0);
    
    // var two = document.getElementById("2");
     b = Math.floor((Math.random() * 12) + 0);
    
    // var three = document.getElementById("3");
     c = Math.floor((Math.random() * 12) + 0);
   
    // var four = document.getElementById("4");
     d = Math.floor((Math.random() * 12) + 0);
   
    console.log ("a value is:"+ a);
    console.log ("b value is:"+b);
    console.log ("c value is:"+c);
    console.log ("d value is:"+d);
    console.log ("compRandom value is:" +compRandom);
    var addedNumber = 0;
    function compare() {
        if (addedNumber == compRandom ){
            win++;
            console.log(win);
            $("#win").html("<p>Win: " + win+"</p>");
            addedNumber = 0;
        }
        if (addedNumber > compRandom ){
            loss++;
            console.log(loss);
            $("#loss").html("<p>Loss: " + loss+"</p>");
            addedNumber = 0;
        }
    }    
    $("#1").on("click", function() {
    //  add random value to added
        addedNumber = addedNumber+a;
        console.log(addedNumber);
        $("#addedNum").html("<p>" + addedNumber+"</p>")
        compare();
    });
    $("#2").on("click", function() {
    //  add random value to added
        addedNumber = addedNumber+b;
        console.log(addedNumber);
        $("#addedNum").html("<p>" + addedNumber+"</p>")
        compare();
    });
    $("#3").on("click", function() {
    //  add random value to added
        addedNumber = addedNumber+c;
        console.log(addedNumber);
        $("#addedNum").html("<p>" + addedNumber+"</p>")
        compare();
    });
    $("#4").on("click", function() {
    //  add random value to added
        addedNumber = addedNumber+d;
        console.log(addedNumber);
        $("#addedNum").html("<p>" + addedNumber+"</p>")
        compare(); 
    });
});