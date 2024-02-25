/* 23.	Escribir	una	función	que	acepte	como	parámetro	un	objeto	de	
estudiantes	y	votaciones.		
Ejemplo:	estudiantes	=	{	Bea:	5,	Ana:	7…}.	Tenéis	que	crear	el	objeto.	
Con	ese	objeto:	
	-	Calcular	la	media	de	las	votaciones,	incrementarla	del	10%	y	
redondearla	por	defecto.	
	-	Devolver	un	objeto	con	llave	el	nombre	del	estudiante,	y	valor	
“Aprobado	con	NN"	o	"Suspenso	con	NN",	donde	NN	es	el	voto	de	cada	
estudiante	en	el	objeto	inicial	en	base	a	la	media	calculada. */

let estudiantes = {
    Dani : 7,
    Ana : 5,
    Eva: 10,
    Maria : 8,
    Elena : 10,

}

function calcularNota(estudiantes){
    let estudiantesMedias={};
    let votaciones = 0;
for (const alumno in estudiantes) {
   votaciones +=estudiantes[alumno]
}
let mediaEstudiantes = Math.round(((votaciones)/(Object.keys(estudiantes).length))+((votaciones)/(Object.keys(estudiantes).length))* 0.010)

for (const alumno in estudiantes) {
   if (estudiantes[alumno]>=mediaEstudiantes)
    estudiantesMedias[alumno] = `Aprobado con un ${estudiantes[alumno]}`
    else
    estudiantesMedias[alumno] = `suspenso con un ${estudiantes[alumno]}`

}
return estudiantesMedias
}
console.log(calcularNota(estudiantes))

