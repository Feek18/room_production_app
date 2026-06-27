import { Scale, MessageCircle, BarChart3, Tag, RotateCcw, HeartHandshake, LucideIcon } from "lucide-react";

export interface ReasonItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const getWhyUsReasons = (t: (key: string) => string): ReasonItem[] => [
  {
    icon: Scale,
    title: t("why.1.title"),
    description: t("why.1.desc")
  },
  {
    icon: MessageCircle,
    title: t("why.2.title"),
    description: t("why.2.desc")
  },
  {
    icon: BarChart3,
    title: t("why.3.title"),
    description: t("why.3.desc")
  },
  {
    icon: Tag,
    title: t("why.4.title"),
    description: t("why.4.desc")
  },
  {
    icon: RotateCcw,
    title: t("why.5.title"),
    description: t("why.5.desc")
  },
  {
    icon: HeartHandshake,
    title: t("why.6.title"),
    description: t("why.6.desc")
  }
];
