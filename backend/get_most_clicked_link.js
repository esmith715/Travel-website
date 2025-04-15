import axios from 'axios';

const getRecommendedLink = async () => {
  try {
    // Fetch click data and time spent data
    const clickResponse = await axios.get('http://localhost:5000/api/clicks');
    const timeResponse = await axios.get('http://localhost:5000/api/time-spent');
    const clickData = clickResponse.data;
    const timeData = timeResponse.data;

    if (clickData.length === 0 && timeData.length === 0) {
      return null;
    }

    // Combine data with weights
    const combinedData = clickData.map(click => {
      const timeEntry = timeData.find(time => time.link === click.link) || { totalTimeSpent: 0, visits: 0 };
      const averageTimeSpent = timeEntry.visits > 0 ? timeEntry.totalTimeSpent / timeEntry.visits : 0;

      // Weighted score: 70% time spent, 30% click count
      const score = (averageTimeSpent * 0.7) + (click.count * 0.3);
      return { link: click.link, score };
    });

    // Sort by score and return the highest scoring link
    const recommended = combinedData.reduce((max, item) => (item.score > max.score ? item : max), combinedData[0]);
    return recommended.link;
  } catch (error) {
    console.error('Error fetching data for recommendation:', error);
    return null;
  }
};

export default getRecommendedLink;