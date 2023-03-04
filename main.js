async function getPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json()
}
async function createCards() {
const posts = await getPosts()
const cardsContainer = document.querySelector('.cards_container')
for (let post of posts) {
        const card = document.createElement('div');
        card.className = 'card';

        const image = document.createElement('img');
        image.src = 'img/jah-khalib.jpg'

        const title = document.createElement('h2');
        title.textContent = post.title;

        const body = document.createElement('p');
        body.textContent = post.body;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(body);
        cardsContainer.appendChild(card);
    }
}

createCards();

//Домашнее Задание:
//
// Сделать страницу новостей:
//
// - на странице у вас будет хэдер, футер, а главное - карточки новостей. Дизайн абсолютно любой (можете сделать +/- как тут:
// https://www.bbc.com/news/world)
//
// - у каждой карточки должны быть: изображение (любое), тайтл и описание
// - основной момент: GET запросом получаете эти данные: https://jsonplaceholder.typicode.com/posts
// Это массив, на основе этих данных рендерите карточки (как тайтл берете - “title”, как описание - “body”)
// вы должны использовать async await