import { KAPLAYCtx } from "kaplay";

export const Sprite = {
  Bean: "Bean",
} as const;

type SpriteType = (typeof Sprite)[keyof typeof Sprite];

const SpritePaths: Record<SpriteType, string> = {
  Bean: "sprites/bean.png",
};

export function loadSprites(k: KAPLAYCtx) {
  Object.entries(SpritePaths).forEach(([key, value]) => {
    k.loadSprite(key, value);
  });
}
