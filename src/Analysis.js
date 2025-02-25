import * as tf from '@tensorflow/tfjs';

const analyzeClicks = (clickData) => {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 10, inputShape: [1] }));
  model.add(tf.layers.dense({ units: 1 }));

  model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

  const xs = tf.tensor2d(clickData.map(click => click.count), [clickData.length, 1]);
  const ys = tf.tensor2d(clickData.map(click => click.link.length), [clickData.length, 1]);

  model.fit(xs, ys, { epochs: 10 }).then(() => {
    console.log('Model trained!');
  });
};

export default analyzeClicks;