import { Fig2D , Line, Circle, Rectangle } from './fig2d-core' ;
import { FigVisitor } from './fig2d-core' ; 

export class JsonVisitor  /*implements*/ extends FigVisitor{
  
  constructor(){
	  super();
	  console.log("JsonVisitor");
  }
  doActionForCircle(c){
     console.log("{circle: " + JSON.stringify(c) +"}");
  }
  doActionForLine(l) {
     console.log("{line: " + JSON.stringify(l) +"}"); 
  }

  doActionForRectangle(r) {
    console.log("{rectangle:" + JSON.stringify(r) +"}");
  }
}
