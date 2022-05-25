console.log("Welcome to the news website");

let source = "abc-news";
let apikey = "611e1230d6cf4d8f9bde91597fbcc4c2";

// Get the news container
let newsAccordin = document.getElementById("newsAccordin");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines/?sources=${source}&apiKey=${apikey}`,
  true
);
xhr.onload = function () {
  if (this.status == 200) {
    // console.log(this.responseText);
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    console.log(articles);
    let newsHtml = "";
    articles.forEach(function (element, index) {
      // console.log(element, index);
      let news = `<div class="card">
                <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                    <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse${index}"
                    aria-expanded="false"
                    aria-controls="collapse${index}"
                    >
                   <b> Breaking News ${index + 1} </b> ${element["title"]}
                    </button>
                </h2>
                </div>

                <div
                id="collapse${index}"
                class="collapse "
                aria-labelledby="heading${index}"
                data-parent="#newsAccordin"
                            >
                <div class="card-body">
                  ${element["content"]} 
                  <a href ="${element["url"]}">
                  Read More </a>
                </div>
                </div>
                </div> `;
      newsHtml += news;
    });
    newsAccordin.innerHTML = newsHtml;
  } else {
    console.log("Some error found");
  }
};
xhr.send();
