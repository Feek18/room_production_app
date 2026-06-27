import { Shirt, Compass, Users, LucideIcon } from "lucide-react";

export interface PathItem {
  num: string;
  title: string;
  icon: LucideIcon;
  description: string;
  linkText: string;
  waText: string;
}

export const getChoosePaths = (t: (key: string) => string): PathItem[] => [
  {
    num: "01",
    title: t("path.1.title"),
    icon: Users,
    description: t("path.1.desc"),
    linkText: t("path.1.cta"),
    waText: t("path.1.wa")
  },
  {
    num: "02",
    title: t("path.2.title"),
    icon: Shirt,
    description: t("path.2.desc"),
    linkText: t("path.2.cta"),
    waText: t("path.2.wa")
  },
  {
    num: "03",
    title: t("path.3.title"),
    icon: Compass,
    description: t("path.3.desc"),
    linkText: t("path.3.cta"),
    waText: t("path.3.wa")
  }
];
