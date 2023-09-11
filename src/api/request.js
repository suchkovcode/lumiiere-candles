import axios from "axios";
import { useAppStore } from "@/store/appStore";

export const Axios = axios.create({
   baseURL: `https://strapi-2vim.onrender.com/api`,
   headers: { "Content-Type": "application/json" },
});

export const getProduct = async (params) => {
   try {
      const response = await Axios.get("/products", { params });
      const { data } = response;

      const arrayCard = data.data.map((item) => {
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

      return { card: arrayCard, meta: data.meta };
   } catch (error) {
      console.error("Ошибка при получении данных о продукте", error);
      throw error;
   }
};

export const getProductOne = async (id, params) => {
   try {
      const response = await Axios.get(`/products/${id}`, { params });
      const { data } = response;
      const { Aroma, Category, Collection, img, tags, ...attributes } = data.data.attributes;
      const tagNames = tags.map((tag) => tag.name);
      return {
         card: {
            ...attributes,
            img: img?.data?.attributes || {},
            aroma: Aroma?.data?.attributes?.name || {},
            category: Category?.data?.attributes?.name || {},
            collection: Collection?.data?.attributes?.name || {},
            tags: tagNames,
         },
         meta: data.meta,
      };
   } catch (error) {
      console.error("Ошибка при получении данных о продукте", error);
      throw error;
   }
};

export const getUniqueFilter = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);

   const isEmptyObject = (obj) => {
      return Object.keys(obj).length === 0;
   };

   const uniqueCategories = [...new Set(card.map((item) => item.category))]
      .filter((category) => category !== null && !isEmptyObject(category))
      .sort((a, b) => b.localeCompare(a));

   const uniqueCollections = [...new Set(card.map((item) => item.collection))]
      .filter((collection) => collection !== null && !isEmptyObject(collection))
      .sort((a, b) => a.localeCompare(b));

   const uniqueAromas = [...new Set(card.map((item) => item.aroma))]
      .filter((aroma) => aroma !== null && !isEmptyObject(aroma))
      .sort((a, b) => a.localeCompare(b));

   return {
      uniqueCategories,
      uniqueCollections,
      uniqueAromas,
   };
};

export const getCandlesCard = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);
   return card.filter((item) => item.category === "Свечи");
};

export const getMeltsCard = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);
   return card.filter((item) => item.category === "Мелтсы");
};

export const getBoxesCard = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);
   return card.filter((item) => item.category === "Наборы");
};

export const getPostcardMore = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);
   return card.filter((item) => item.category === "Дополнительно");
};
