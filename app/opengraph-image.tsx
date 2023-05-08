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
          src="https://cdn.sanity.io/images/8qnlzo4s/preview/051b9f603f7fec9074643c719d2d363846a44aba-2600x1543.png"
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
