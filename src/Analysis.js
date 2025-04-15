import * as tf from '@tensorflow/tfjs';

const analyzeClicksAndTime = (clickData, timeData) => {
  if (!timeData) {
    console.warn('Time data is undefined. Defaulting to an empty array.');
    timeData = [];
  }

  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 10, inputShape: [2] })); // Two inputs: clicks and time spent
  model.add(tf.layers.dense({ units: 1 }));

  model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

  // Combine click data and time spent data
  const combinedData = clickData.map(click => {
    const timeEntry = timeData.find(time => time.link === click.link) || { totalTimeSpent: 0, visits: 0 };
    const averageTimeSpent = timeEntry.visits > 0 ? timeEntry.totalTimeSpent / timeEntry.visits : 0;
    return { link: click.link, clicks: click.count, averageTimeSpent };
  });

  // Prepare tensors for training
  const xs = tf.tensor2d(combinedData.map(data => [data.clicks, data.averageTimeSpent]), [combinedData.length, 2]);
  const ys = tf.tensor2d(combinedData.map(data => data.link.length), [combinedData.length, 1]); // Dummy output for training

  model.fit(xs, ys, { epochs: 10 }).then(() => {
    console.log('Model trained!');
  });
};

export default analyzeClicksAndTime;