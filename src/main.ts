import kaplay from "kaplay";
import "kaplay/global";
import { Sprite, loadSprites } from "./sprites";
import { Scene } from "./scenes";

const k = kaplay();
loadSprites(k);

k.scene(Scene.MainMenu, () => {
  k.add([
    k.text("loop holes", {
      font: "sans-serif",
      size: 64,
    }),
    k.pos(vec2(k.width() / 2, 120)),
    k.anchor("center"),
  ]);
});

k.go(Scene.MainMenu);
