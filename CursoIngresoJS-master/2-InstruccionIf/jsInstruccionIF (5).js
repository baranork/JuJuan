function mostrar()
{
//tomo la edad  
	
	var edad;
	edad = parseInt(edad);
	edad = document.getElementById('edad').value;

	if(!(edad > 12 && edad < 18)) 
	{
		alert("Usted no es adolescente");
	}

}//FIN DE LA FUNCIÓN