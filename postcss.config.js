const autoprefixer = require("autoprefixer");
const postcsssortmediaqueries = require("postcss-sort-media-queries");

module.exports = () => {
   return {
      plugins: [autoprefixer, postcsssortmediaqueries],
   };
};
