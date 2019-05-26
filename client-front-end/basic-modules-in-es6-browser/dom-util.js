export class DomUtil {
	static displayInDiv(divId,message){
		document.querySelector('#'+divId).innerHTML = message;
	}
	
	static multilineMessage(...args){
		//NB: la syntaxe ... permet de récupérer tous (ou bien les derniers) arguments (en nombre variable)
		//sous forme de tableau . Cette syntaxe est permise en mode "strict" alors que
		//la syntaxe Dom.multilineMessage.arguments est interdite en mode "strict" (dans module es6)
		let nb_arg=args.length;
		let messages=null;
		 if(nb_arg>=1) messages=args[0];
		 for(let i=1;i<nb_arg;i++)
			 messages+="<br/>"+args[i];
		return messages;
	}
}