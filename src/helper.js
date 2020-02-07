// obtiene la diferencia de años
export function obtenerDiferenciaYear (year){    
    const fechaActual = new Date().getFullYear();
    return fechaActual - year; 
}

// obtiene el total a pagar según la marca elegida
export function calcularMarca (marca){
    let incremento;
    
    switch(marca) {
        case 'europeo':
            incremento = 1.30;
            break;
        case 'americano':
            incremento = 1.15;
            break;
        case 'asiático':
            incremento = 1.05;
            break;
        default:
            break;
    }

    return incremento;
}

// calcula el tipo de seguro
export function obtenerPlan (plan) {
    return (plan === 'basico') ? 1.20 : 1.50;
}