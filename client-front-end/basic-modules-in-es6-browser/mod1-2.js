   //agregation de modules mod1-2 = mod1 + mod2
   
   //importer certains éléments du module "mod2" et les ré-exporter:
   export { f1, f2 } from "./mod1.js"
   
   //importer tous les éléments du module "mod2" et les ré-exporter tous :
   export * from "./mod2.js"
	
	