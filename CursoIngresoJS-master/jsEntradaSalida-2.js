/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombre;
	nombre = prompt("Ingresa tu nombre", ""); //Prompt es si o si para tomar un valor y va con "="

	console.log("Tu nombre es " + nombre);
}

