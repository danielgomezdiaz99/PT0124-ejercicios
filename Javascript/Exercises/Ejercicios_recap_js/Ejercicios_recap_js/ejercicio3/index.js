/* 3.	Rellena	un	array	con	números	aleatorios	del	1	al	100	(10	
    números	por	ejemplo)	y	muéstralo	por	la	consola. */	

    let numAletorios = [];

    for(let i = 0; i<100;i++){
        numAletorios.push (Math.floor(Math.random() * (101 - 1) + 1));
    }

    console.log(numAletorios);
