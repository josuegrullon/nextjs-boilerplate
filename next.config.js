require('dotenv').config()
const withReactSvg = require('next-react-svg')
const path = require('path')
const withImages = require('next-images')

const withFonts = require('next-fonts');


var svgPath = 'public/assets/img/svg';


module.exports = {
  images: {
    disableStaticImages: true,
      domains: ['https://source.unsplash.com'],
},
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }
    
    return config
  },
}

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  }
};
// module.exports = withImages();
// module.exports = withImages({
//   // exclude: path.resolve(__dirname, svgPath),
//   webpack(config, options) {
//     return config
//   }
// })

module.exports = withReactSvg({
  include: path.resolve(__dirname, svgPath),
  webpack(config, options) {
    return config
 }
})

module.exports = withFonts({
  webpack(config, options) {
    return config;
}
})

// module.exports = withSass({
//   webpack(config, { dev }) {
//     if (dev) {
//       config.devtool = 'cheap-module-source-map';
//     }
//     return config;
//   }
// });

module.exports = {
  images: {
    domains: ['source.unsplash.com'],
  },
}