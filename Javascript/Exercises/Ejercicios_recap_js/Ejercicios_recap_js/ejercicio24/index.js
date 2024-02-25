/* 24.	Ordena	esta	estructura	completa	por	jefe,	empleado	y	becario	a	la	vez	
que	ordenandolo	por	edad,	y	devuelve	un	objeto.		 */

const trabajadores = {
  Pedro: {
    puesto: "empleado",
    edad: 40,
  },
  Ana: {
    puesto: "becario",
    edad: 34,
  },
  Mike: {
    clasificación: "becario",
    edad: 37,
  },
  Oscar: {
    puesto: "empleado",
    edad: 35,
  },
  Juan: {
    puesto: "becario",
    edad: 29,
  },
  Marta: {
    puesto: "jefe",
    edad: 26,
  },
  Maria: {
    puesto: "empleado",
    edad: 28,
  },
  Pablo: {
    puesto: "jefe",
    edad: 36,
  },
};

let arrayTrabajadores = Object.values(trabajadores);

console.log(arrayTrabajadores)