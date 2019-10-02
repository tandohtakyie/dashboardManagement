const apiHost = 'http://5bb78b25.ngrok.io/get?pw=Team24i';

export default {
  async getAllFeedbacks() {
    try {
      const response = await fetch(apiHost);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  },
};
