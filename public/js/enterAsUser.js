let params = (new URL(document.location)).searchParams;
let name = params.get("username");
let password = params.get("password");