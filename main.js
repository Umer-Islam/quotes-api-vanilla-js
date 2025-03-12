// let url = "https://www.quoterism.com/api/quotes/random";
// let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
// let url = "https://type.fit/api/quotes";
let url = "https://dummyjson.com/quotes/random";
// let url = "https://catfact.ninja/fact";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    const quote = data.quote;
    const author = data.author;
    let quoteTag = document.querySelector(`#quote`);
    let authorTag = document.querySelector(`#author`);
    quoteTag.innerText = quote;
    quoteTag.style.color = "red";
    // quoteTag.style.fontFamily = "verdana";
    quoteTag.style.fontStyle = "italic";
    authorTag.innerText = author;
    authorTag.style.color = "green";
  })
  .catch();
