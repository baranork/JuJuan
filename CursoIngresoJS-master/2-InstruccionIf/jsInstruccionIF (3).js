function mostrar()
{
//tomo la edad  
	var edad
	edad = parseInt(edad);
	edad = document.getElementById('edad').value;
	if(edad < 18)
	{
		alert("Usted es menor de edad");
	}

	else
	{
		alert("Usted es mayor de edad");
	}

}//FIN DE LA FUNCIÓN