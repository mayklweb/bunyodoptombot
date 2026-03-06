"use client";

import { LeftArrowIcon } from "../shared/icons";

interface BottomSheetProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// const EASING = "cubic-bezier(0.32, 0.72, 0, 1)";
const EASING = "ease";

function XIcon() {
  return (
    <svg
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export function BottomSheet({
  title,
  open,
  onClose,
  children,
}: BottomSheetProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 40,
          opacity: open ? 1 : 0,
          transition: `opacity 0.38s ${EASING}`,
          pointerEvents: open ? "auto" : "none",
          backdropFilter: open ? "blur(5px)" : "blur(0px)",
          WebkitBackdropFilter: open ? "blur(5px)" : "blur(0px)",
        }}
      />

      {/* Sheet */}
      <div
        style={{
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 50,
          background: "#fff",
          boxShadow: "0 -4px 40px rgba(0,0,0,0.15)",
          transform: open ? "translateY(0)" : "translateY(100%)",
          transition: `transform 0.38s ${EASING}`,
          height: "95vh",
          overflowY: "auto",
        }}
      >
        {/* Handle + header */}
        <div
          style={{
            padding: "10px 20px",
            position: "sticky",
            top: 0,
            background: "#fff",
            zIndex: 1,
            boxShadow: ""
          }}
          className="border-b border-gray"
        >
          {/* Title row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <button
              onClick={onClose}
              style={{
                width: 24,
                height: 24,
                cursor: "pointer",
              }}
            >
             <LeftArrowIcon/>
            </button>
            <span style={{ fontSize: 24, fontWeight: 600, color: "#1c1c1e" }} className="text-center">
              {title}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">{children}</div>
      </div>
    </>
  );
}
