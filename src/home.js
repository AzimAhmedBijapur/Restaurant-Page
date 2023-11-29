const home = ()=>{
    const mainDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    h2.textContent = "Welcome to Dosa Delights";
    h3.textContent = "Indulge in the Irresistible World of Dosa Magic";
    p.id = "callforact";
    p.textContent = "Order now or visit us!";

    mainDiv.appendChild(h2);
    mainDiv.appendChild(h3);
    mainDiv.appendChild(p);

    return mainDiv
}

export default home;