"use client";
import { useState, useRef, useEffect } from "react";
import { FieldKey, ProfileFields } from "./types";
import { ProfileField } from "./Profilefield";
import { FIELD_CONFIG, INITIAL_FIELDS } from "./constants";

export function PersonalInfo() {
  const [fields, setFields] = useState<ProfileFields>(INITIAL_FIELDS);
  const [editingField, setEditingField] = useState<FieldKey | null>(null);
  const inputRefs = useRef<Partial<Record<FieldKey, HTMLInputElement | null>>>({});

  useEffect(() => {
    if (editingField) inputRefs.current[editingField]?.focus();
  }, [editingField]);

  const handleToggle = (key: FieldKey): void =>
    setEditingField((prev) => (prev === key ? null : key));

  const handleChange = (key: FieldKey, value: string): void =>
    setFields((prev) => ({ ...prev, [key]: value }));

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-2xl font-semibold">Shaxsiy ma'lumotlar</h1>
      </div>
      <div className="flex flex-col gap-2.5">
        {FIELD_CONFIG
        .map(({ key, label, disabled }) => (
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