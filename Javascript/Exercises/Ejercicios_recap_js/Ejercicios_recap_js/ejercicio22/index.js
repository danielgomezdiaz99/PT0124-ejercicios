/* 22.	A	partir	de	un	array	de	objetos,	escribir	una	función	que	devuelva	el	
nombre	del	mejor	jugador,	su	media	en	puntuación	y	comprobar	si	está	
inscrito	en	la	próxima	temporada.	 */	

let	jugadores	=	[	
	{nombre:	"Ana",	puntos:	[21,3,5,78,25],	temporada:	false},	
	{nombre:	"Pedro",	puntos:	[55,66,77,55,66],	temporada:	true},
    {nombre:	"Juan",	puntos:	[12,83,40,65,10],	temporada:	true},
    {nombre:	"Marta",	puntos:	[24,90,36,78,20],	temporada:	true},]	

    function mejorJugador (jugadores){

        let mejor = ""
        let mediaMasAlta=0;
        let temporada = false;
        
        for (const jugador of jugadores) {    
            let puntosTotalesJugador=0
            for (const puntos of jugador.puntos) {
                puntosTotalesJugador = puntosTotalesJugador + puntos;
            }
            if(mediaMasAlta<puntosTotalesJugador/jugador.puntos.length){
                mediaMasAlta = puntosTotalesJugador/jugador.puntos.length;
                mejor = jugador.nombre;
                temporada = jugador.temporada;
            }
        }
        return ([mejor,mediaMasAlta,temporada])
    }

    console.log(mejorJugador(jugadores))