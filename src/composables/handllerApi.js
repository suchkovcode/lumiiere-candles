export const useHandllerApi = (data) => {
   const arrayCard = data.value.data.map((item) => {
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
