export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  spanClass: string;
}

export const getPortfolioItems = (t: (key: string) => string): PortfolioItem[] => [
  {
    title: "Hana Casual Line",
    category: t("prod.2.title"),
    image: "/images/SAVE_20260628_165938.jpg",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Bali Riders Club",
    category: t("path.1.title"),
    image: "/images/SAVE_20260628_165952.jpg",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Kopi Studio Workwear",
    category: t("prod.1.title"),
    image: "/images/IMG_1241.JPG.jpeg",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Premium Stitching Craft",
    category: "Makloon / Jasa Jahit",
    image: "/images/SAVE_20260628_170030.jpg",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Summer Resort Collection",
    category: t("prod.2.title"),
    image: "/images/SAVE_20260628_165959.jpg",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Minimalist Linen Merch",
    category: t("prod.3.title"),
    image: "/images/SAVE_20260628_170036.jpg",
    spanClass: "md:col-span-1 lg:col-span-1"
  }
];
