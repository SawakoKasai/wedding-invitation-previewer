
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


function firstNameValue(){
    let name1st = document.getElementById("name1").value;
    let name2nd = document.getElementById("name2").value;
    document.getElementById("firstname").innerText = name1st + " & " + name2nd;
}

function lastNameValue(){
    let lastName = document.getElementById("lname").value;
    let lastNameUpper = lastName.toUpperCase();
    document.getElementById("lastname").innerText = lastNameUpper;
}


function dateValue(){
    let weddingDate = document.getElementById("date").value;

    const d = new Date(weddingDate);
    const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d);

    let newDateVal = `${da}-${mo}-${ye}`;
    document.getElementById("weddingdate").innerText = newDateVal;
}


function locationNameValue(){
    let wLocation = document.getElementById("location").value;
    let wLocationUpper = wLocation.toUpperCase();

    document.getElementById("weddinglocation").innerText = wLocationUpper;
}
