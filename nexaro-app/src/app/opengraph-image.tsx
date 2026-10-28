import { ImageResponse } from "next/og";

export const alt = "NEXARO — Fast, Secure Websites in Istanbul";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0c0e14",
          padding: "60px 80px",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                backgroundColor: "#ffffff",
                color: "#0c0e14",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 900,
                fontSize: "24px",
              }}
            >
              N.
            </div>
            <span style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "-1px" }}>
              NEXARO
            </span>
          </div>
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "9999px",
              border: "1px solid rgba(59, 130, 246, 0.4)",
              backgroundColor: "rgba(37, 99, 235, 0.15)",
              color: "#60a5fa",
              fontSize: "16px",
              fontWeight: 700,
              display: "flex",
            }}
          >
            Web &amp; Security Studio · Istanbul
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              maxWidth: "900px",
              color: "#ffffff",
              display: "flex",
            }}
          >
            Fast, secure websites that bring you customers.
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "#94a3b8",
              maxWidth: "800px",
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            Websites for small businesses delivered in 5–14 days with cybersecurity built in. Fixed prices, zero agency overhead.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e293b",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#64748b",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span>⚡ 5–14 Days Delivery</span>
            <span>🛡️ A+ Security Headers</span>
            <span>🏷️ Fixed Transparent Pricing</span>
          </div>
          <div style={{ display: "flex", color: "#38bdf8", fontWeight: 700 }}>
            nexaro.studio
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
