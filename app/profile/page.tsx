"use client";
import { useState, useRef, useEffect, ChangeEvent } from "react";
import {
  DeliveryIcon,
  EditIcon,
  FavoriteIcon,
  FileIcon,
  LocationIcon,
  MarketIcon,
} from "../shared/icons";

// ─── Types ────────────────────────────────────────────────────────────────────

type FieldKey = "id" | "name" | "phone" | "birthdate" | "gender" | "email";
type NavKey = "personal" | "shop" | "orders" | "addresses" | "favorites" | "about";

interface NavItem {
  key: NavKey;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

interface FieldConfig {
  key: FieldKey;
  label: string;
  disabled?: boolean;
}

type ProfileFields = Record<FieldKey, string>;

interface ProfileFieldProps {
  label: string;
  value: string;
  editing: boolean;
  disabled?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onToggle: () => void;
  inputRef: (el: HTMLInputElement | null) => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  { key: "personal",  icon: FileIcon,     label: "Shaxsiy ma'lumotlar" },
  { key: "shop",      icon: MarketIcon,   label: "Mening duko'nim" },
  { key: "orders",    icon: DeliveryIcon, label: "Mening buyurtmalarim" },
  { key: "addresses", icon: LocationIcon, label: "Manzillar" },
  { key: "favorites", icon: FavoriteIcon, label: "Sevimli mahsulotlar" },
  { key: "about",     icon: FileIcon,     label: "Biz haqimizda" },
];

const FIELD_CONFIG: FieldConfig[] = [
  { key: "id",        label: "Foydalanuvchi ID", disabled: true },
  { key: "name",      label: "Ism familiya" },
  { key: "phone",     label: "Telefon raqam" },
  { key: "birthdate", label: "Tug'ilgan kun" },
  { key: "gender",    label: "Jinsi" },
  { key: "email",     label: "Elektron pochta" },
];

const INITIAL_FIELDS: ProfileFields = {
  id:        "0987654321",
  name:      "Farrux Bozorboyev",
  phone:     "+998 (33) 513-60-53",
  birthdate: "24/04/2001-yil",
  gender:    "Erkak",
  email:     "Mavjud emas",
};

// ─── ProfileField Component ───────────────────────────────────────────────────

function ProfileField({
  label, value, editing, disabled = false, onChange, onToggle, inputRef,
}: ProfileFieldProps) {
  return (
    <div>
      <label>{label}</label>
      <div className="w-full px-4 py-3 mt-1 flex items-center bg-gray rounded-xl">
        <input
          ref={inputRef}
          type="text"
          value={value}
          disabled={!editing || disabled}
          onChange={onChange}
          className="text-gray-600 flex-auto outline-none disabled:bg-transparent focus:text-black"
        />
        {!disabled && (
          <button type="button" onClick={onToggle} className="cursor-pointer">
            <EditIcon className="w-5 h-5 text-gray-600" />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Section Components ───────────────────────────────────────────────────────

function PersonalInfo() {
  const [fields, setFields] = useState<ProfileFields>(INITIAL_FIELDS);
  const [editingField, setEditingField] = useState<FieldKey | null>(null);
  const inputRefs = useRef<Partial<Record<FieldKey, HTMLInputElement | null>>>({});

  useEffect(() => {
    if (editingField) {
      inputRefs.current[editingField]?.focus();
    }
  }, [editingField]);

  const handleToggle = (key: FieldKey): void => {
    setEditingField((prev) => (prev === key ? null : key));
  };

  const handleChange = (key: FieldKey, value: string): void => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-2xl font-semibold">Shaxsiy ma'lumotlar</h1>
      </div>
      <div className="flex flex-col gap-2.5">
        {FIELD_CONFIG.map(({ key, label, disabled }) => (
          <ProfileField
            key={key}
            label={label}
            value={fields[key]}
            editing={editingField === key}
            disabled={disabled}
            onChange={(e) => handleChange(key, e.target.value)}
            onToggle={() => handleToggle(key)}
            inputRef={(el) => { inputRefs.current[key] = el; }}
          />
        ))}
      </div>
    </div>
  );
}

// Placeholder sections — replace with your real content
function MyShop() {
  return <h1 className="text-2xl font-semibold">Mening duko'nim</h1>;
}
function MyOrders() {
  return <h1 className="text-2xl font-semibold">Mening buyurtmalarim</h1>;
}
function Addresses() {
  return <h1 className="text-2xl font-semibold">Manzillar</h1>;
}
function Favorites() {
  return <h1 className="text-2xl font-semibold">Sevimli mahsulotlar</h1>;
}
function About() {
  return <h1 className="text-2xl font-semibold">Biz haqimizda</h1>;
}

// ─── Nav → Section map ────────────────────────────────────────────────────────

const SECTION_MAP: Record<NavKey, React.ReactNode> = {
  personal:  <PersonalInfo />,
  shop:      <MyShop />,
  orders:    <MyOrders />,
  addresses: <Addresses />,
  favorites: <Favorites />,
  about:     <About />,
};

// ─── Profile Page ─────────────────────────────────────────────────────────────

function Profile() {
  const [activeNav, setActiveNav] = useState<NavKey>("personal");

  return (
    <section>
      <div className="container">
        <div className="w-full flex gap-5">

          {/* Sidebar */}
          <div className="w-2/7 flex flex-col gap-3">
            {NAV_ITEMS.map(({ key, icon: Icon, label }) => {
              const isActive = activeNav === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveNav(key)}
                  className={`w-full px-4 py-3 border rounded-xl flex items-center gap-2 transition-all
                    ${isActive
                      ? "bg-secondary border-secondary text-primary"
                      : "border-primary text-primary hover:bg-primary/10"
                    }`}
                >
                  <Icon className="w-6 h-6 text-primary" />
                  <span className="text-base font-semibold">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Main Content — renders the active section */}
          <div className="w-5/7">
            {SECTION_MAP[activeNav]}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;