const qString = document.location.search;
const para = new URLSearchParams(qString);
const id = para.get('id');

async function filmsDetails(filmId) {
    try {
        const response = await fetch('https://ghibliapi.herokuapp.com/films/' + filmId);
        const resu = await response.json();

        console.log(resu);
        document.title = resu.title;

        document.querySelector('main').innerHTML += `
            <div class="card">
                <h1>${resu.title}</h1>
                <p class="desc">${resu.description}</p>
                <div class="director"><h2>Directed by</h2><h3>${resu.director}</h3></div>
                <div class="producer"><h2>Produced by</h2><h3>${resu.producer}</h3></div>
                <div class="release"><h2>Released:</h2><h3>${resu.release_date}</h3></div>
            </div>
            `
    } catch {} finally {}

}

filmsDetails(id);