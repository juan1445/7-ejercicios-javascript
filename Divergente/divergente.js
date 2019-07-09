let osadiaMasDivergentes = 0;
let porcentajeOsadiaDivergentes = 0;
let miembros = 20;
let faccion = [0, 0, 0, 0, 0, 0];
let totalDeMiembrosPorFaccion = [0, 0, 0, 0, 0, 0];
let totalDivergentes = 0;
let porcentajeErudicion = 0;
let porcentajeTodos = [0, 0, 0, 0, 0, 0];


for (let i = 0; i < miembros; i++) {
    for (let j = 0; j < faccion.length; j++) {
        faccion = prompt(`Escoja la letra de su facción ${[i + 1]}`);
        if (faccion[j] === 'A') {
            totalDeMiembrosPorFaccion[0]++;
        } else if (faccion[j] === 'C') {
            totalDeMiembrosPorFaccion[1]++;
        } else if (faccion[j] === 'E') {
            totalDeMiembrosPorFaccion[2]++;
        } else if (faccion[j] === 'O') {
            totalDeMiembrosPorFaccion[3]++;
        } else if (faccion[j] === 'V') {
            totalDeMiembrosPorFaccion[4]++;
        } else {
            totalDeMiembrosPorFaccion[5]++;
        }
        osadiaMasDivergentes = totalDeMiembrosPorFaccion[3] + totalDeMiembrosPorFaccion[5];
        porcentajeOsadiaDivergentes = osadiaMasDivergentes * 100 / miembros;
        totalDivergentes = totalDeMiembrosPorFaccion[5];
        porcentajeErudicion = totalDeMiembrosPorFaccion[2] * 100 / miembros;
        porcentajeTodos = totalDeMiembrosPorFaccion[j] * 100 / miembros;
    } if (porcentajeOsadiaDivergentes > 40) {
        console.log('Jeanine, puedes proceder con la dominación total')
    } else if (porcentajeErudicion < porcentajeTodos && totalDivergentes === 0) {
        console.log('Janine, ¡te tocó aplazar tu maléfico plan!')
    }
}

let consolidado = {
    facciones: ['Abnegación', 'Cordialidad', 'Erudición', 'Osadia', 'Verdad', 'Divergentes', 'Porcentaje Osadía mas Divergentes'],
    miembros: totalDeMiembrosPorFaccion,
    porcentaje: porcentajeOsadiaDivergentes
}

console.table(consolidado);