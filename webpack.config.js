const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');

/* Added this so I have enough time to attach the chrome debugger before webpack starts */
/* Feel free to comment / remove */
// for (let i = 0; i < 10000000000; i++) {
//   const test = i;
// }

module.exports = [{
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  plugins: [new HardSourceWebpackPlugin()],
}];
