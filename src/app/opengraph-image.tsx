import { ImageResponse } from "next/og";

export const alt = "Rajesh Runiwal — Senior Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#09090b",
          color: "#f4f1ea",
          padding: "72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#c9a36a",
          }}
        >
          Senior Software Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, lineHeight: 1.05 }}>Rajesh Runiwal</div>
          <div
            style={{
              marginTop: 24,
              fontSize: 28,
              color: "#9c978c",
              maxWidth: 820,
            }}
          >
            Scalable backend systems, distributed systems, cloud
            infrastructure, and production engineering.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
