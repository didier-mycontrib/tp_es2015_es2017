   /*export*/ function additionner(x , y) {
      return x + y;
    }
    /*export*/ function mult(x, y) {
      return x * y;
    }
	
	export { additionner, mult as multiplier };
	
	//export default function_or_object_or_class (ONE PER MODULE)
	export default {
		name : "xy",
		features : { x : 1 , y: 3 }
	}