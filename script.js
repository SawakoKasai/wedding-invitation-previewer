

//Initial
function initialValue(){
    let initial1 = document.getElementById("name1").value;
    let initial2 = document.getElementById("name2").value;

    let initialOne= initial1.charAt(0);
    let initialTwo = initial2.charAt(0);

    let initialOneUpper = initialOne.toUpperCase();
    let initialTwoUpper = initialTwo.toUpperCase();

    console.log(initialTwo);
    document.getElementById("initial").innerText = initialOneUpper + " & " + initialTwoUpper;
}

//1st Name & 2nd Name
function firstNameValue(){
    let name1st = document.getElementById("name1").value;
    let name2nd = document.getElementById("name2").value;
    document.getElementById("firstname").innerText = name1st + " & " + name2nd;
}


//Last Name Upper Case
function lastNameValue(){
    let lastName = document.getElementById("lname").value;
    let lastNameUpper = lastName.toUpperCase();
    document.getElementById("lastname").innerText = lastNameUpper;
}

//Date
function dateValue(){
    let weddingDate = document.getElementById("date").value;

    const d = new Date(weddingDate);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);
    const weekday = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const dow = weekday[d.getDay()];

    let newDateVal = `${dow}, ${da}-${mo}-${ye}`;
    
    document.getElementById('weddingdate').innerHTML = newDateVal;
}

//Location
function locationNameValue(){
    let wLocation = document.getElementById("location").value;
    let wLocationUpper = wLocation.toUpperCase();

    document.getElementById("weddinglocation").innerText = wLocationUpper;
}



//Style 2
/*function changeStyle2(){
    document.getElementById("card").style.backgroundImage ='url("images/invitation-greenery.jpeg")';
    document.getElementById("initial").style.fontFamily ="Trirong, serif";
    document.getElementById("invitation").style.fontFamily ="Trirong, serif";
    document.getElementById("firstname").style.fontFamily ="Trirong, serif";
    document.getElementById("lastname").style.fontFamily ="Trirong, serif";
    document.getElementById("weddingdate").style.fontFamily ="Trirong, serif";
    document.getElementById("weddinglocation").style.fontFamily ="Trirong, serif";

    document.getElementById("card").style.color ='black';
    document.getElementById("initial").style.color ='black';
    document.getElementById("invitation").style.color ='black';
    document.getElementById("firstname").style.color ='black';
    document.getElementById("lastname").style.color ='black';
    document.getElementById("weddingdate").style.color ='black';
    document.getElementById("weddinglocation").style.color ='black';
}*/


//Change Style 
//backgrounds array for setting differenty backgrounds
let backgrounds = ['url("images/invitation-flower.jpeg")','url("images/invitation-greenery.jpeg")','url("images/invitation-Tropical.jpeg")' ] ;

function changeStyle(image, font, color){
    document.getElementById("card").style.backgroundImage =backgrounds[image];

    document.getElementById("initial").style.fontFamily =font ;
    document.getElementById("invitation").style.fontFamily =font;
    document.getElementById("firstname").style.fontFamily =font;
    document.getElementById("lastname").style.fontFamily =font;
    document.getElementById("weddingdate").style.fontFamily =font;
    document.getElementById("weddinglocation").style.fontFamily =font;

    document.getElementById("card").style.color =color;
    document.getElementById("initial").style.color =color;
    document.getElementById("invitation").style.color =color;
    document.getElementById("firstname").style.color =color;
    document.getElementById("lastname").style.color =color;
    document.getElementById("weddingdate").style.color =color;
    document.getElementById("weddinglocation").style.color =color;
}
