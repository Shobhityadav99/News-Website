newsAccordion = document.getElementById('newsAccordion');
let apiKey = 'c4c10316899241c88721904ea2b93a3d'
let sources = 'TIMESOFINDIA.COM';

const xhr = new XMLHttpRequest();
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        let newsHtml ="";
        for (news in articles) {
            console.log(articles[news]);
            let news = `<div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body"> </div>
                </div>
                </div>`
                newsHtml+=news;
        }
        console.log(articles);
    }
}
xhr.send();