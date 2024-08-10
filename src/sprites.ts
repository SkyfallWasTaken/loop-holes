import { KAPLAYCtx } from "kaplay";

export const Sprite = {
  Player: "Player",
} as const;

type SpriteType = (typeof Sprite)[keyof typeof Sprite];

const SpritePaths: Record<SpriteType, string> = {
  Player: "sprites/player.png",
};

export function loadSprites(k: KAPLAYCtx) {
  Object.entries(SpritePaths).forEach(([key, value]) => {
    k.loadSprite(key, value);
  });
}
