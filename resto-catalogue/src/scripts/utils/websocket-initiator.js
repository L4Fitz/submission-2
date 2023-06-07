import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    const restaurants = JSON.parse(message.data);

    NotificationHelper.sendNotification({
      title: `${restaurants.name}`,
      options: {
        body: foodList, drinkList, reviewersList,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`,
      },
    });
  },
};

export default WebSocketInitiator;
