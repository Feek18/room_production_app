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
    image: "/brand_apparel.png",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Bali Riders Club",
    category: t("path.1.title"),
    image: "/portfolio_community.png",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Kopi Studio Workwear",
    category: t("prod.1.title"),
    image: "/uniform.png",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Premium Stitching Craft",
    category: "Makloon / Jasa Jahit",
    image: "/portfolio_details.png",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Summer Resort Collection",
    category: t("prod.2.title"),
    image: "/hero_apparel.png",
    spanClass: "md:col-span-1 lg:col-span-1"
  },
  {
    title: "Minimalist Linen Merch",
    category: t("prod.3.title"),
    image: "/merchandise.png",
    spanClass: "md:col-span-1 lg:col-span-1"
  }
];
