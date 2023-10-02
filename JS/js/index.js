document.querySelector("h1").addEventListener("click", call);
//document.querySelector("h1").addEventListener("mouseenter", call);
$("h1").slideDwon(3000).fadeIn();


function call(){
    //alert("Ive been clicked");
    console.log('hello there'); 
    document.getElementsByTagName("p")[1].innerHTML = "HOWDY";
    var oopsArray = document.getElementsByClassName("oops");

    //oopsArray[0].innerHTML = "THE GUY ABOVE IS LYING";

    //oopsArray.array.forEach(element => {
      //  element.innerHTML = "THE GUY ABOVE IS LYING";
    //})
    for(i=0;i<oopsArray.length;i++){
        oopsArray[i].innerHTML = "THE GUY ABOVE IS LYING";
    }
    oopsArray[0].classList.toggle("special");
    document.getElementById("header").style = "color:red;"


    var liArray = document.querySelectorAll(".my_numbers");
    for(i=0; i <liArray.length;i++){
        liArray[i].style = "color:green";
        liArray[i].style.fontSize = "2rem";
    }

    document.querySelector("a").setAttribute("href", "https://www.google.com");


    $("li").css("color", "red");

    if($(".my_numbers .s_item").hasClass("super")){
    $(" .my_numbers .s_item").removeClass("super");
    } else{ 
    $(".s_item").addClass("super")
    }

    //$("p")[1].text($("p")[1].text()+ "goodyy old me");
    $(".my_numbers").prepend("<li> Element " + ($(".my_numbers li").length + 1) + "</li>");

    $("p").before("<h3>This is a subtitile </h3>")

    }