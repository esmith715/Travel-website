import axios from 'axios';

const getMostClickedLink = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/clicks');
    const clickData = response.data;

    if (clickData.length === 0) {
      return null;
    }

    const mostClicked = clickData.reduce((max, click) => (click.count > max.count ? click : max), clickData[0]);
    return mostClicked.link;
  } catch (error) {
    console.error('Error fetching click data:', error);
    return null;
  }
};

export default getMostClickedLink;