let btn = document.getElementById("shorten");

btn.addEventListener('click', short);


async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://tinyurl.com/api-create.php?url=${longURL}`);
    const data = await result.text();

    shortURL.value = data.result.short_link2;
}

let newURL = document.getElementById("shorturl");
let coptButton = document.getElementById("copy");

coptButton.onclick = ()=>{
    newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
}