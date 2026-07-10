import { MapPin, Phone, Mail, Clock, LucideIcon } from "lucide-react";

export interface ContactDetail {
  icon: LucideIcon;
  title: string;
  content: string;
  link?: string;
}

export const getContactDetails = (t: (key: string) => string): ContactDetail[] => [
  {
    icon: MapPin,
    title: t("map.addr.title"),
    content: t("map.addr.content"),
    link: "https://maps.google.com?q=Konveksi%20Bali%20-%20Youniform%20konveksi%20office,%20Jalan%20Tukad%20Batanghari%20VII,%20Dauh%20Puri%20Klod,%20Kota%20Denpasar,%20Bali&ftid=0x2dd23f3bff39c059:0xfdad05db63a4952d&entry=gps&shh=CAE&lucs=,94297699,94231188,94280568,47071704,94218641,94282134,100813469,94286869&g_st=ic"
  },
  {
    icon: Phone,
    title: t("map.phone.title"),
    content: "+62 896-4400-5097",
    link: "https://wa.me/6289644005097?text=Halo%20Room%20Production%2C%20saya%20tertarik%20berkonsultasi"
  },
  {
    icon: Mail,
    title: t("map.email.title"),
    content: "Youniform.bali@gmail.com",
    link: "mailto:Youniform.bali@gmail.com"
  },
  {
    icon: Clock,
    title: t("map.hours.title"),
    content: t("map.hours.content")
  }
];
