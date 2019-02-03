import axios from 'axios';

const getGameData = () => {
  axios
    .get('http://www.nfl.com/liveupdate/scores/scores.json')
    .then(response => {
      const stats = response.data;
      return stats;
    })
    .catch(error => {
      return error;
    });
};

export default getGameData;
