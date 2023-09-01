import axios from "axios";

export const Axios = axios.create({
   baseURL: "https://strapi.lumiiere-candles.com/api",
   headers: { "Content-Type": "application/json" },
});

export const getProduct = async (params) => {
   const { data } = await Axios.get("/products", { params: params });

   const arrayCard = data.data.map((item) => {
      const {
         Aroma: { data: aromaData },
         Category: { data: categoryData },
         Collection: { data: collectionData },
         img,
         tags,
         ...attributes
      } = item.attributes;

      const tagNames = tags.map((tag) => tag.name);

      return {
         ...attributes,
         img: img.data.attributes,
         aroma: aromaData.attributes.name,
         category: categoryData.attributes.name,
         collection: collectionData.attributes.name,
         tags: tagNames,
      };
   });

   return { card: arrayCard, meta: data.meta };
};
