let tipoDeMaltrato = [0, 0, 0];
let situaciones = 20;
let calificacion = new Array(20);
let sumaMaltratos = [0, 0, 0];
let promedio = new Array(3);
let cantidadGravedad = [0, 0, 0];


for (let i = 0; i < situaciones; i++) {
    for (let j = 0; j < tipoDeMaltrato.length; j++) {
        do {
            tipoDeMaltrato = prompt(`Digite la letra del tipo de maltrato ${i + 1}`);
            tipoDeMaltrato = tipoDeMaltrato.toUpperCase();
            cantidadGravedad[j] = prompt(`Digite un numero del 1 al 10 de que tan grave fue el maltrato`)
            switch (tipoDeMaltrato) {
                case 'P':
                    sumaMaltratos[0]++;
                    cantidadGravedad[0]++;
                    break;
                case 'T':
                    sumaMaltratos[1]++;
                    cantidadGravedad[1]++;
                    break;
                case 'F':
                    sumaMaltratos[2]++;
                    cantidadGravedad[2]++;
                    break;
            }
        } while (tipoDeMaltrato !== 'P' & tipoDeMaltrato !== 'T' & tipoDeMaltrato !== 'F');
    }
}

for (let x = 0; x < sumaMaltratos.length; x++) {
    promedio[x] = sumaMaltratos[x] / cantidadGravedad[x];
}



let consolidado = {
    maltrato: ['Panico','Trauma mental','Daño fisico'],
    suma: sumaMaltratos,
    cantidad : cantidadGravedad,
    promedio: promedio
}

console.table(consolidado);

