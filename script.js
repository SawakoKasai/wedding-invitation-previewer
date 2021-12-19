

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

    let newDateVal = `${da}-${mo}-${ye}`;
    document.getElementById("weddingdate").innerText = newDateVal;
}

//Location
function locationNameValue(){
    let wLocation = document.getElementById("location").value;
    let wLocationUpper = wLocation.toUpperCase();

    document.getElementById("weddinglocation").innerText = wLocationUpper;
}

//Style 3
function changeStyle3(){
    document.getElementById("card").style.backgroundImage ='url("images/invitation-Tropical.jpeg")';
    document.getElementById("initial").style.fontFamily ="Playfair Display";
    document.getElementById("invitation").style.fontFamily ="Playfair Displayf";
    document.getElementById("firstname").style.fontFamily ="Playfair Display";
    document.getElementById("lastname").style.fontFamily ="Playfair Display";
    document.getElementById("weddingdate").style.fontFamily ="Playfair Display";
    document.getElementById("weddinglocation").style.fontFamily ="Playfair Display";
}


//Style 2
function changeStyle2(){
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
}

//Style 3
function changeStyle3(){
    document.getElementById("card").style.backgroundImage ='url("images/invitation-Tropical.jpeg")';
    document.getElementById("initial").style.fontFamily ="Playfair Display";
    document.getElementById("invitation").style.fontFamily ="Playfair Displayf";
    document.getElementById("firstname").style.fontFamily ="Playfair Display";
    document.getElementById("lastname").style.fontFamily ="Playfair Display";
    document.getElementById("weddingdate").style.fontFamily ="Playfair Display";
    document.getElementById("weddinglocation").style.fontFamily ="Playfair Display";

    document.getElementById("card").style.color ='white';
    document.getElementById("initial").style.color ='white';
    document.getElementById("invitation").style.color ='white';
    document.getElementById("firstname").style.color ='white';
    document.getElementById("lastname").style.color ='white';
    document.getElementById("weddingdate").style.color ='white';
    document.getElementById("weddinglocation").style.color ='white';
}
