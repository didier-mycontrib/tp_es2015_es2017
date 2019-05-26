import { Fig2D , Line, Circle, Rectangle } from './fig2d-core.js' ;
//import { JsonVisitor } from './json-visitor-ext' ; 
//import { SvgGenVisitor } from './svg-visitor-ext' ; 
import { CanvasVisitor } from './canvas-visitor-ext.js' ; 

import "../scss/styles.scss";
import "../css/styles-ext.css";

function my_test(){
    var tabFig = new Array();
    tabFig.push(new Line(20,20,180,200,"red"));
    tabFig.push(new Circle(100,100,50,"blue", 2,"orange"));
    tabFig.push(new Circle(250,200,50,"black",1,"blue"));
    tabFig.push(new Rectangle(200,100,50,60,"green",4));
    tabFig.push(new Rectangle(20,100,50,60,"black",1,"green"));
    var visitor = null;
	//visitor = new  JsonVisitor();
	//visitor = new  SvgGenVisitor();
	visitor = new  CanvasVisitor('myCanvas');
    for( let f  of tabFig){
      f.performVisit(visitor);
    }
	//console.log(visitor.getAllSvgFileContent());
}

window.addEventListener('load', function() {
	my_test();
});