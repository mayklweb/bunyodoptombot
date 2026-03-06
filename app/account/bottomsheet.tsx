"use client";

interface BottomSheetProps {
  title: string;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const EASING = "cubic-bezier(0.32, 0.72, 0, 1)";

function XIcon() {
  return (
    <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function BottomSheet({ title, open, onClose, children }: BottomSheetProps) {
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
          left: 0, right: 0, bottom: 0,
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
        <div style={{
          padding: "12px 20px 0",
          position: "sticky",
          top: 0,
          background: "#fff",
          zIndex: 1,
        }}>
          {/* Drag handle */}
          <div style={{
            width: 36, height: 4, borderRadius: 2,
            background: "rgba(0,0,0,0.12)",
            margin: "0 auto 14px",
          }} />

          {/* Title row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12,
            paddingBottom: 12,
            borderBottom: "0.5px solid rgba(0,0,0,0.08)",
          }}>
            <span style={{ fontSize: 17, fontWeight: 700, color: "#1c1c1e" }}>
              {title}
            </span>
            <button
              onClick={onClose}
              style={{
                width: 28, height: 28, borderRadius: "50%",
                background: "rgba(0,0,0,0.06)",
                border: "none", cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#8e8e93",
              }}
            >
              <XIcon />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">{children}</div>
      </div>
    </>
  );
}