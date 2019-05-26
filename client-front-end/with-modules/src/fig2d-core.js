//es6/es2015 : no abstract , no interface , no implements keyworks


export /*abstract in typescript*/ class Fig2D {
  constructor(lineColor  = "black",
              lineWidth  = 1,
              fillColor  = null){
	this.lineColor = lineColor;
	this.lineWidth = lineWidth;
	this.fillColor = fillColor;
  }
/*abstract in typescript*/  performVisit(visitor){}
}

export class Line  extends Fig2D{
  constructor(x1= 0 ,  y1= 0 ,
              x2= 0 ,  y2= 0,
              lineColor  = "black",
              lineWidth  = 1){
                 super(lineColor,lineWidth);
				 this.x1=x1; this.y1=y1; this.x2=x2; this.y2=y2;
  }
  performVisit(visitor){
     visitor.doActionForLine(this);
   }
}

export class Circle  extends Fig2D{
  constructor(xC = 0 ,
              yC = 0  ,
              r = 0,
              lineColor  = "black",
              lineWidth  = 1,
              fillColor = null){
                 super(lineColor,lineWidth,fillColor);
				 this.xC = xC; this.yC=yC; this.r=r;
  }
  performVisit(visitor) {
    visitor.doActionForCircle(this);
  }
}

export class Rectangle  extends Fig2D{
  constructor(x1 = 0 ,
              y1 = 0 ,
              width = 0 ,
              height = 0,
              lineColor = "black",
              lineWidth = 1,
              fillColor = null){
                 super(lineColor,lineWidth,fillColor);
				 this.x1=x1; this.y1=y1; this.width=width; this.height=height;
  }
  performVisit(visitor) {
    visitor.doActionForRectangle(this);
  }
}

export /*interface in typescript*/ class FigVisitor {
  doActionForCircle(c){}
  doActionForLine(l){}
  doActionForRectangle(r){}
}

