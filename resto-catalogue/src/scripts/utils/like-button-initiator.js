import FavoriteRestoIdb from '../data/favorite-resto-idb';
import { createLikeRestoButtonTemplate, createLikedRestoButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, likeRestos, restaurants }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurants = restaurants;
    this._likeRestos = likeRestos;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurants;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const restaurants = await this._favoriteRestos.getResto(id);
    return !!restaurants;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._restaurants);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedRestoButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._restaurants.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
