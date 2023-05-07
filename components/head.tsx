"use client";

import { motion, AnimatePresence } from "framer-motion";
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from "@/config/motion";

import state from "@/store";
import { useSnapshot } from "valtio";
import Image from "next/image";

import threejs from "@/public/threejs.png";

export default function Head() {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <Image src={threejs} alt="logo" className="w-8 h-8 object-contain" />
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET&apos;S <br className="xl:block hidden" /> DO IT.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className="flex flex-col gap-5">
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our brand-new 3D customization tool.{" "}
                <strong>Unleash your imagination</strong> and define your own style.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
