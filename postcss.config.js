const cssnano = require("cssnano");
module.exports = () => {
   return {
      plugins: [
         require("autoprefixer")(),
         require("postcss-combine-media-query"),
         require("postcss-combine-duplicated-selectors"),
         cssnano([
            "default",
            { discardComments: { removeAll: true }, discardEmpty: true, discardDuplicates: true, minifyFontValues: true },
         ]),
      ],
   };
};
