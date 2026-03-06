import {
    DeliveryIcon,
    FavoriteIcon,
    FileIcon,
    LocationIcon,
    MarketIcon,
  } from "@/app/shared/icons";
import { FieldConfig, NavItem, ProfileFields } from "../types/types";
  
  export const NAV_ITEMS: NavItem[] = [
    { key: "personal",  icon: FileIcon,     label: "Shaxsiy ma'lumotlar" },
    { key: "shop",      icon: MarketIcon,   label: "Mening duko'nim" },
    { key: "orders",    icon: DeliveryIcon, label: "Mening buyurtmalarim" },
    { key: "addresses", icon: LocationIcon, label: "Manzillar" },
    { key: "favorites", icon: FavoriteIcon, label: "Sevimli mahsulotlar" },
    { key: "about",     icon: FileIcon,     label: "Biz haqimizda" },
  ];
  
  export const FIELD_CONFIG: FieldConfig[] = [
    { key: "id",        label: "Foydalanuvchi ID", disabled: true },
    { key: "name",      label: "Ism familiya" },
    { key: "phone",     label: "Telefon raqam" },
    { key: "birthdate", label: "Tug'ilgan kun" },
    { key: "gender",    label: "Jinsi" },
    { key: "email",     label: "Elektron pochta" },
  ];
  
  export const INITIAL_FIELDS: ProfileFields = {
    id:        "0987654321",
    name:      "Farrux Bozorboyev",
    phone:     "+998 (33) 513-60-53",
    birthdate: "24/04/2001-yil",
    gender:    "Erkak",
    email:     "Mavjud emas",
  };