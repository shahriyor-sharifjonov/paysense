import * as functions from "./modules/functions.js";
import * as lang from "./modules/lang.js";
import SmoothScroll from 'smoothscroll-for-websites'

functions.isWebp();
lang.init();

SmoothScroll({
	animationTime: 600,
	stepSize: 80,
	keyboardSupport: true,
	arrowScroll: 100, 
	touchpadSupport: true 
})