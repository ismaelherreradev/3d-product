import { proxy } from "valtio";

const store = proxy({
  intro: true,
  color: "#EFBD48",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "/public/threejs.png",
  fullDecal: "/public/threejs.png",
});

export default store;
