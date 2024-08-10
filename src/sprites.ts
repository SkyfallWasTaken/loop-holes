import { KAPLAYCtx } from "kaplay";

export enum Sprite {
  Bean = "sprites/bean.png",
}

export function loadSprites(k: KAPLAYCtx) {
  for (const sprite in Sprite) {
    k.loadSprite(Sprite[sprite], Sprite[sprite]);
  }
}
