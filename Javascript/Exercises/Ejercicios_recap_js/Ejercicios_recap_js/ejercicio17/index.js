/* 17.	A	partir	de	estos	días	filtrar	por	días	que	empiezan	por	"m":*/

const	dias	=	['lunes',	'martes',	'miercoles',	'jueves',	'viernes',	
'sabado',	'domingo'] 

let diasEmpiezanM = dias.filter((dia)=>dia[0] == "m")


console.log(diasEmpiezanM);