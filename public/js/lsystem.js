
let alphabet = ["F" ,"G", "+", "-", "[", "]"];
let data={
	iterations:0,
	angle:0,
	axiom:"",
	rules:[]
};
function getData(){
	data.iterations = parseInt(document.getElementById("fIter").value);
	data.angle = parseInt(document.getElementById("fAngl").value);
	data.axiom = document.getElementById("fAxio").value;
	let rules=[];
	rules.push(document.getElementById("fRule1").value);
	rules.push(document.getElementById("fRule2").value);
	rules.push(document.getElementById("fRule3").value);
	rules.push(document.getElementById("fRule4").value);
	rules.push(document.getElementById("fRule5").value);
	let posI,posF;
	let before=true;
	for(let i=0; i < rules.length ; i++){
		let element={
			predecessor:"",
			successor:""
		}
		before=true;
		for(let j=0; j< rules[i].length; j++){
			if(rules[i][j]!==" "&&rules[i][j]!==">"){
				if(before){
					element.predecessor=element.predecessor+rules[i][j];
				}
				else{
					element.successor=element.successor+rules[i][j];
				}
			}
			else if(rules[i][j] ===">"){
				before=false;
			}
		}
		if(element.predecessor !== "" && element.successor !==""){
			data.rules.push(element);
		}
		
	}
}

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
					else{
						this.result = this.result + this.axiom[axiomIndex];
					}
				}
			}
			this.axiom = this.result;
			this.result = "";
		}
		this.result = this.axiom 
	}
}

function lsystemSetUp(){
	getData();
	// if(!axiomValidation(data.axiom)) return false;
	// if(!rulesValidation(data.rules)) return false;

	let lsystem = new Lsystem(data);
	lsystem.generate();
	drawCanvas(lsystem.result,data.angle);
}