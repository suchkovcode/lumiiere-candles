import cssnano from "cssnano";
import postcssCombineMediaQuery from "postcss-combine-media-query";
import postcssCombineDuplicatedSelectors from "postcss-combine-duplicated-selectors";

export default () => {
   return {
      plugins: [
         postcssCombineMediaQuery(),
         postcssCombineDuplicatedSelectors(),
         cssnano({
            preset: [
               "default",
               {
                  discardComments: { removeAll: true },
                  discardEmpty: true,
                  discardDuplicates: true,
                  minifyFontValues: true,
               },
            ],
         }),
      ],
   };
};
