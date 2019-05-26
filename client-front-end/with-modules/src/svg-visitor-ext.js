import { Fig2D , Line, Circle, Rectangle } from './fig2d-core' ;
import { FigVisitor } from './fig2d-core' ; 

export class SvgGenVisitor  /*implements*/ extends FigVisitor{
  constructor(){
	 super();
     this._svgHeader =
     '<svg width="500" height="400" '
     +' xmlns="http://www.w3.org/2000/svg">';
     this._svgContent = "";
  }

  getAllSvgFileContent(){
    return  this._svgHeader + this._svgContent
         + "</svg>";
  }

  doActionForCircle( c ) {
     this._svgContent += ' <circle cx="'+c.xC+'" cy="'+c.yC
                                  +'" r="'+c.r+'" stroke="'+c.lineColor
                                  +  '" stroke-width="'+c.lineWidth
                                     +'" fill="'+c.fillColor+'" />';
  }
  doActionForLine( l )  {
   this._svgContent += ' <line x1="'+l.x1
                            +'" y1="'+l.y1
                            +'" x2="'+l.x2
                            +'" y2="'+l.y2+
                            '" style="stroke:'+l.lineColor
                                   +';stroke-width:'+l.lineWidth+'" />';
  }

  doActionForRectangle( r )  {
   this._svgContent += ' <rect x="'+r.x1+'" y="'+r.y1+
                               '" width="'+r.width+
                               '" height="'+r.height+
                               '" style="fill:'+r.fillColor+
                                       ';stroke-width:'+r.lineWidth+
                                       ';stroke:'+r.lineColor+'" />';
 }
}
