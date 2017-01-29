import { Tile } from "./tile";

export class Wall extends Tile {

    constructor(x: number, y: number) {
        super("Wall", "#", "#000000", "#a9a9a9", x, y, true, false);
    }
}