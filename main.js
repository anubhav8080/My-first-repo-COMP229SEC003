import doSomething from "./doSomething.js";
import {halfOf, multiple} from "./lib.js";
import { flag, touch } from "./validator.js";
import {div} from './arrow.js';
console.log(halfOf(100));
console.log(multiple(100,5));
doSomething();
console.log(flag);
touch();
console.log(flag);
console.log(div(500,2));

