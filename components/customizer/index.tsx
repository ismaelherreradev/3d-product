"use client";
import { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { download } from "@/public";

import { EditorTabs, FilterTabs, DecalTypes } from "@/config/constants";

import { fadeAnimation, slideAnimation } from "@/config/motion";

import { downloadCanvasToImage, reader } from "@/config/helpers";

import AiPicker from "./ai-picker";
import ColorPicker from "./color-picker";
import FilePicker from "./file-picker";

import state from "@/store";
import config from "@/config/config";

export default function Customizer() {
  return <div>customizer</div>;
}
