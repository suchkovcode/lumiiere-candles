import axios from "axios";
import { useAppStore } from "@/store/appStore";

export const Axios = axios.create({
   baseURL: `${process.env.STRAPI_URL}/api`,
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
            aroma: aromaData?.attributes?.name || null,
            category: categoryData?.attributes?.name || null,
            collection: collectionData?.attributes?.name || null,
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
            aroma: Aroma?.attributes?.name || null,
            category: Category?.attributes?.name || null,
            collection: Collection?.attributes?.name || null,
            tags: tagNames,
         },
         meta: data.meta,
      };
   } catch (error) {
      console.error("Ошибка при получении данных о продукте", error);
      throw error;
   }
};

export const getUniqueCategories = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);

   const uniqueCategories = [...new Set(card.map((item) => item.category))]
      .filter((category) => category !== null)
      .sort((a, b) => b.localeCompare(a));

   return uniqueCategories;
};

export const getUniqueCollection = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);

   const uniqueCollections = [...new Set(card.map((item) => item.collection))]
      .filter((collection) => collection !== null)
      .sort((a, b) => b.localeCompare(a));

   return uniqueCollections;
};

export const getUniqueAroman = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);

   const uniqueAromas = [...new Set(card.map((item) => item.aroma))]
      .filter((aroma) => aroma !== null)
      .sort((a, b) => b.localeCompare(a));

   return uniqueAromas;
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
   return card.filter((item) => item.category === "Наборы свечей");
};

export const getPostcardCard = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);
   return card.filter((item) => item.category === "Открытки");
};

export const getPostcardMore = async () => {
   const store = useAppStore();
   const { card } = await getProduct(store.params);
   return card.filter((item) => item.category === "Дополнительно");
};
