import * as Phaser from "phaser";

export default class Demo extends Phaser.Scene {
  constructor() {
    super("demo");
  }

  preload() {
    this.load.image("tiles", "./assets/map/grass.png");
    this.load.image("border", "./assets/map/watter.png");
    this.load.tilemapTiledJSON("map", "./assets/map/map.json");
  }

  create() {
    const map = this.make.tilemap({ key: "map" });
    const tilesetGrass = map.addTilesetImage("grass", "tiles");
    const tilesetWater = map.addTilesetImage("watter", "border");

    const ground = map.createLayer("grass", tilesetGrass, 0, 0);
    const watter = map.createLayer("watter", tilesetWater, 0, 0);
  }
}

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#125555",
  width: 800,
  height: 640,
  scene: Demo,
};

const game = new Phaser.Game(config);
