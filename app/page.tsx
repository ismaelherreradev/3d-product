import CanvasModel from "@/components/canvas";
import Customizer from "@/components/customizer";
import Head from "@/components/head";

export default function Home() {
  return (
    <main className="app transition-all ease-in">
      <Head />
      <Customizer />
      <CanvasModel />
    </main>
  );
}
