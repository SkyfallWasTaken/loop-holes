import kaplay from "kaplay";
import "kaplay/global";
import { Sprite, loadSprites } from "./sprites";

const k = kaplay();
loadSprites(k);

k.add([k.pos(120, 80), k.sprite(Sprite.Bean)]);

k.onClick(() => k.addKaboom(k.mousePos()));
