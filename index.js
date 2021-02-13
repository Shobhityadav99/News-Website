let newsAccordion = document.getElementById('newsAccordion');
let apiKey = 'c4c10316899241c88721904ea2b93a3d'
let sources = 'TIMESOFINDIA.COM';

const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml ="";
        articles.forEach(function(element,index) {
            let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="heading${index}" >
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                        <b>Breaking News ${index+1} : </b>${element["title"]}
                    </button>
                </h2>
                <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                    data-bs-parent="#newsAccordion">
                    <div class="accordion-body"> ${element["description"]} <a href="${element["url"]}" target="_blank">Read more here </a> </div>
                </div>
                </div>`
                newsHtml+=news;
            });
        newsAccordion.innerHTML=newsHtml; 
    }
}
xhr.send();