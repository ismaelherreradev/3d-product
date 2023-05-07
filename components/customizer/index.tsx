"use client";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { download } from "@/public";

import { EditorTabs, FilterTabs, DecalTypes } from "@/config/constants";

import { fadeAnimation, slideAnimation } from "@/config/motion";

import { downloadCanvasToImage, reader, generateStyle } from "@/config/helpers";

import AiPicker from "./ai-picker";
import ColorPicker from "./color-picker";
import FilePicker from "./file-picker";

import state from "@/store";
import config from "@/config/config";
import { useSnapshot } from "valtio";
import Tab from "./tab";
import { Button } from "../ui/button";

export default function Customizer() {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
          <motion.div key="custom" className="absolute top-0 left-0 z-10" {...slideAnimation("left")}>
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab key={tab.name} tab={tab} handleClick={() => {}} />
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div className="absolute z-10 top-5 right-5" {...fadeAnimation}>
            <Button
              style={generateStyle("filled", snap)}
              onClick={() => (state.intro = true)}
              className="w-fit px-4 py-2.5 font-bold text-sm"
            >
              Go Back
            </Button>
          </motion.div>
          <motion.div className="filtertabs-container" {...slideAnimation("up")}>
            {FilterTabs.map((tab) => (
              <Tab key={tab.name} tab={tab} handleClick={() => {}} />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
