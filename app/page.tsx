import CanvasModel from "@/components/canvas";
import Customizer from "@/components/customizer";
import Head from "@/components/head";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shirt Custom Product AI",
  description: "Shirt Custom Product AI",
  twitter: {
    title: "Shirt Custom Product AI",
    description: "Shirt Custom Product AI",
    site: "https://shirt-custom-product-ai.vercel.app",
  },
  openGraph: {
    title: "Shirt Custom Product AI",
    description: "Shirt Custom Product AI",
    url: "https://shirt-custom-product-ai.vercel.app",
  },
  robots: {
    index: true,
  },
};

export default function Home() {
  return (
    <main className="app transition-all ease-in">
      <Head />
      <Customizer />
      <CanvasModel />
    </main>
  );
}
