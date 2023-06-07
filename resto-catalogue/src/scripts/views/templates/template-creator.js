import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (restaurants) => {
  const drinkList = restaurants.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('');
  const foodList = restaurants.menus.foods.map((food) => `<li>${food.name}</li>`).join('');
  const reviewersList = restaurants.customerReviews.map((reviewer) => `
        <div>
            <h4>${reviewer.name}</h4>
            <p>${reviewer.review}</p>
            <p>${reviewer.date}</p>
        </div>`).join('');

  return `
<h2 class="resto__title">${restaurants.name}</h2>
<img class="resto-item__header__poster" alt="${restaurants.name}"
    src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
<div class="resto__info">
<h3>Information</h3>
<h4>Address: "${restaurants.address}"</h4> 
<h4>City: "${restaurants.city}"</h4>
<h4>Rating: "${restaurants.rating}"</h4>
<p>${restaurants.description}</p>

<h4>Foods Menu: </h4>
<ul>
    ${foodList}
</ul>
<h4>Drinks Menu: </h4>
<ul>
    ${drinkList}
</ul>
<h4>Customer Review</h4>
    ${reviewersList}
</div>

`;
};

const createRestoItemTemplate = (restaurants) => `
<div class="resto-item">
<div class="resto-item__header">
    <img class="resto-item__header__poster" alt="${restaurants.name}"
    src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}">
<div class="resto-item__header__rating__score">${restaurants.rating}</span></p>
</div>
</div>
<div class="resto-item__content">
    <h3><a href="/#/detail/${restaurants.id}">${restaurants.name}</a></h3>
    <p>${restaurants.description}</p>
</div>
</div>`;

const createLikeRestoButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestoButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
const createLikedRestoButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
export {
  createRestoItemTemplate, createRestoDetailTemplate,
  createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate, createLikedRestoButtonTemplate,
};
