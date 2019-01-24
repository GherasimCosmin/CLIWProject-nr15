let spanu = document.getElementById("spanu");
let params = (new URL(document.location)).searchParams;
if( params.get("username")===undefined){
	spanu.innerHTML="User not found";
}
console.log(window.location.href);
spanu.innerHTML="gres";