import { KAPLAYCtx } from "kaplay";

export enum Sprite {
  Bean = "sprites/bean.png",
}

export function loadSprites(k: KAPLAYCtx) {
  Object.entries(Sprite).forEach(([key, value]) => {
    k.loadSprite(key, value);
  });
}
