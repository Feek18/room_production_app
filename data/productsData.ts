export interface ProductItem {
  title: string;
  image: string;
  description: string;
  items: string[];
  waText: string;
}

export const getProducts = (t: (key: string) => string): ProductItem[] => [
  {
    title: t("prod.1.title"),
    image: "/uniform.png",
    description: t("prod.1.desc"),
    items: t("prod.1.items").split("|"),
    waText: t("prod.1.wa")
  },
  {
    title: t("prod.2.title"),
    image: "/brand_apparel.png",
    description: t("prod.2.desc"),
    items: t("prod.2.items").split("|"),
    waText: t("prod.2.wa")
  },
  {
    title: t("prod.3.title"),
    image: "/merchandise.png",
    description: t("prod.3.desc"),
    items: t("prod.3.items").split("|"),
    waText: t("prod.3.wa")
  }
];
