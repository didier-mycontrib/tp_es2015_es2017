//import { additionner as add , multiplier } from "./math-util.js";
//import defaultMathUtil  from "./math-util.js";
import defaultMathUtil , { additionner as add , multiplier } from "./math-util.js";

import { DomUtil }  from "./dom-util.js";
//import { f1 , f2 , f3 , f4  } from "./mod1-2.js";
import * as f from "./mod1-2.js";

function carre(x){
   return multiplier(x,x) ;
} 

/*
var msg1 = "Le carre de 5 est " + carre(5); console.log(msg1);
var msg2 = "4 * 3 vaut " + multiplier(4, 3); console.log(msg2);
var msg3 = "5 + 6 vaut " + add(5, 6); console.log(msg3);
document.querySelector('#divA').innerHTML = msg1 + "<br/>" + msg2+ "<br/>" + msg3;
*/

//let f_msg=f1('abc')+'-'+f2('abc')+'-'+f3('abc')+'-'+f4('abc');
let f_msg=f.f1('abc')+'-'+f.f2('abc')+'-'+f.f3('abc')+'-'+f.f4('abc');
let def_msg = defaultMathUtil.name + "--" + JSON.stringify(defaultMathUtil.features);

DomUtil.displayInDiv('divA',
                     DomUtil.multilineMessage(
						 "Le carre de 5 est " + carre(5),
						 "4 * 3 vaut " + multiplier(4, 3),
						 "5 + 6 vaut " + add(5, 6),
						 f_msg,
						 def_msg
					 ));
