export const useHandllerApi = async (data) => {
   const arrayCard = await data.value.data.map((item) => {
      const {
         Aroma: { data: aromaData },
         Category: { data: categoryData },
         Collection: { data: collectionData },
         img,
         tags,
         ...attributes
      } = item.attributes;

      const tagNames = tags.map((tag) => tag?.name || null);

      return {
         ...attributes,
         img: img?.data?.attributes || {},
         aroma: aromaData?.attributes?.name || {},
         category: categoryData?.attributes?.name || {},
         collection: collectionData?.attributes?.name || {},
         tags: tagNames,
      };
   });

   return arrayCard;
};

export const useHandllerApiOne = async (data) => {

   const { Aroma, Category, Collection, img, tags, ...attributes } = data.value.data.attributes;

   const tagNames = tags.map((tag) => tag.name);

   return {
      cards: {
         ...attributes,
         img: img?.data?.attributes || {},
         aroma: Aroma?.data?.attributes?.name || {},
         category: Category?.data?.attributes?.name || {},
         collection: Collection?.data?.attributes?.name || {},
         tags: tagNames,
      },
   };
};
