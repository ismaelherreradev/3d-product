/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/server";
export const runtime = "edge";
export const contentType = "image/png";
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            height: "500px",
          }}
          src="/og.png"
          alt="Servicios"
        />
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
