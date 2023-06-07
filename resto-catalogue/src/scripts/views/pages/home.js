import RestoSource from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading">Catalogue Restaurant</h2>
      <div id="restos" class="restos">
      </div>
    </div>
  `;
  },

  async afterRender() {
    const restos = await RestoSource.listResto();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Home;
