import { MapPin, Phone, Mail, Clock, LucideIcon } from "lucide-react";

export interface ContactDetail {
  icon: LucideIcon;
  title: string;
  content: string;
}

export const getContactDetails = (t: (key: string) => string): ContactDetail[] => [
  {
    icon: MapPin,
    title: t("map.addr.title"),
    content: t("map.addr.content")
  },
  {
    icon: Phone,
    title: t("map.phone.title"),
    content: "+62 812-3456-7890"
  },
  {
    icon: Mail,
    title: t("map.email.title"),
    content: "hello@roomproduction.com"
  },
  {
    icon: Clock,
    title: t("map.hours.title"),
    content: t("map.hours.content")
  }
];
