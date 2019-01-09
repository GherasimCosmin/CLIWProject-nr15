
let alphabet = ["F" ,"G", "+", "-", "[", "]"];
let data = require("../json/test.json");
//accepts a string returns a boolean
function axiomValidation(axiom){
	if(typeof axiom != "string"){
		return false;
	}
	let exists;
	for(char in axiom){
		exists = false;
		for(alph in alphabet){
			if(axiom[char] === alphabet[alph]) exists = true;
		}
		if(exists === false) return false;
	}
	return true;
}
//accepts an array returns a boolean
//rules should have different predecesors
function rulesValidation(rules){
	if(!Array.isArray(rules)){
		return false;
	}
	let exists;
	for(let rule in rules){
		for(let predeChar in rules[rule].predecessor){
			exists = false;
			for(let alph in alphabet){
				if(rules[rule].predecessor[predeChar] === alphabet[alph]) exists = true;
			}
			if(exists === false) return false;
		}
		for(let succeChar in rules[rule].successor){
			exists = false;
			for(let alph in alphabet){
				if(rules[rule].successor[succeChar] === alphabet[alph]) exists = true;
			}
			if(exists === false) return false;
		}	
	}
	for(let i=0;i<rules.length;i++){
		for(let j=0;j<rules.length;j++){
			if(i!=j){
				if(rules[i].predecessor===rules[j].predecessor){
					return false;
				}	
			}
			
		}
	}
	return true;
}

class Lsystem {
	constructor(data){
		this.axiom = data.axiom;
		this.rules = data.rules;
		this.iterations = data.iterations;
		this.predefAngle = data.angle;
		this.result = "";
	}
	generate(){
		//main loop for axiom
		for(let i=0; i<this.iterations; i++){
			for(let axiomIndex=0; axiomIndex<this.axiom.length; axiomIndex++){
				for(let ruleIndex=0;ruleIndex<this.rules.length; ruleIndex++){
					if(this.axiom[axiomIndex] === this.rules[ruleIndex].predecessor){
						this.result = this.result + this.rules[ruleIndex].successor;
					}
				}
			}
			this.axiom = this.result;
		}
	}
}

function lsystemSetUp(data){
	if(!axiomValidation(data.axiom)) return false;
	if(!rulesValidation(data.rules)) return false;

	let lsystem = new Lsystem(data);
	lsystem.generate();
	console.log(lsystem);
}
lsystemSetUp(data);