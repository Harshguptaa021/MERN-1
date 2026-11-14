let form = document.querySelector("form");
form.addEventListener( "submit" , (events)=>{
    events.preventDefault();
    let h1 = document.createElement("h1");
    h1.textContent = form[0].value
    // document.body.appendChild(h1);
    //   document.body.prepend(h1);
    document.body.append(h1);
    form.reset();
})