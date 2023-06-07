import UrlParser from '../../routes/url-parser';
import RestoSource from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-initiator';
import FavoriteRestoIdb from '../../data/favorite-resto-idb';

const Detail = {
  async render() {
    return `
        <div id="resto" class="resto"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestoSource.detailResto(url.id);
    const restosContainer = document.querySelector('#resto');
    restosContainer.innerHTML = createRestoDetailTemplate(restaurants);
    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestos: FavoriteRestoIdb,
      restaurants: {
        id: restaurants.id,
        name: restaurants.name,
        description: restaurants.description,
        pictureId: restaurants.pictureId,
        city: restaurants.city,
        rating: restaurants.rating,
      },
    });
  },
};

export default Detail;
