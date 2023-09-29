document.querySelector("h1").addEventListener("click", call);
document.querySelector("h1").addEventListener("mouseenter", call);


function call(){
    alert("Ive been clicked");
    console.log('hello there'); 
    document.getElementsByTagName("p")[1].innerHTML = "HOWDY";
    var oopsArray = document.getElementsByClassName("oops");

    //oopsArray[0].innerHTML = "THE GUY ABOVE IS LYING";

    //oopsArray.array.forEach(element => {
      //  element.innerHTML = "THE GUY ABOVE IS LYING";
    //})
    for(i=0;i<oopsArray.length;i++){
        oopsArray[i].innerHTML = "THE GUY ABOVE IS LYING";
    }2
    oopsArray[0].classList.add("special");
    document.getElementById("header").style = "color:red;"


    var liArray = document.querySelectorAll(".my_numbers");
    for(i=0; i <liArray.length;i++){
        liArray[i].style = "color:green";
        liArray[i].style.fontSize = "2rem";
    }

    document.querySelector("a").setAttribute("href", "https://www.google.com");
    }