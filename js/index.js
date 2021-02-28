const apiLink = 'https://ghibliapi.herokuapp.com/films/';
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getFilms(url) {
    document.querySelector('main').innerHTML =`<img class="load" src="/img/loadingdark.gif" alt="loading...">`

    await delay(1500);

    document.querySelector('.load').classList.add('hide');

    try {
        const response = await fetch(url);
        const resu = await response.json();

        resu.forEach(function (film) {
            document.querySelector('main').innerHTML += `
            <div class="card">
            <h1>${film.title}</h1>
            <div class="director"><h2>Directed by</h2><h3>${film.director}</h3></div>
            <div class="producer"><h2>Produced by</h2><h3>${film.producer}</h3></div>
            <a href="details.html?id=${film.id}">Explore Film</a>
        </div>
            `;})
    } catch (error) { console.log(error); }

}

getFilms(apiLink);