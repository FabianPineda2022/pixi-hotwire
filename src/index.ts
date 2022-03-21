import { Application, Loader } from 'pixi.js';
import { assets } from './assets';
import { DinoHat } from './DinoHat';

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize",()=>{
});
window.dispatchEvent(new Event("resize"));

Loader.shared.add(assets);

Loader.shared.onComplete.add(()=>{

	const dinoWithHat: DinoHat = new DinoHat();

	dinoWithHat.scale.set(0.5);
	dinoWithHat.x = 200;
	dinoWithHat.y = 300;

	app.stage.addChild(dinoWithHat);


});
Loader.shared.load();

const clampy: Sprite = Sprite.from("clampy.png");

clampy.anchor.set(0.5);

clampy.x = app.screen.width / 2;
clampy.y = app.screen.height / 2;

app.stage.addChild(clampy);