AOS.init();

const dataDoEvento = new Date("Jan 01, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function () {
    const agora = new Date();
    const timeStampAtual= agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000;


    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundoEmMs);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
    document.getElementById('contador-button');

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador_aniversario').innerHTML = 'Evento expirado';
        document.getElementById('contador-button').innerHTML = 'Vaga expirado';
        document.getElementById('contador-button').style.cursor = 'not-allowed';
    }
}, 1000);


const dataDoAniversario = new Date("Dec 30, 2023 19:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contaAniversarioAsHoras = setInterval(function () {
    const agoras = new Date();
    const timeStampAtuals = agoras.getTime();

    const distanciaAteOAniversario  = timeStampDoAniversario - timeStampAtuals;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000;


    const diasAteOAniversario = Math.floor(distanciaAteOAniversario / diaEmMs);
    const horasAteOAniversario = Math.floor((distanciaAteOAniversario % diaEmMs) / horaEmMs);
    const minutosAteOAniversario = Math.floor((distanciaAteOAniversario % horaEmMs) / minutoEmMs);
    const segundosAteOAniversario = Math.floor((distanciaAteOAniversario % minutoEmMs) / segundoEmMs);

    document.getElementById('contador_aniversario').innerHTML = `${diasAteOAniversario}d ${horasAteOAniversario}h ${minutosAteOAniversario}m ${segundosAteOAniversario}s`;
    document.getElementById('contador-button-aniversario');

    if (distanciaAteOAniversario < 0) {
        clearInterval(contaAniversarioAsHoras);
        document.getElementById('contador_aniversario').innerHTML = 'Aniversário expirado';
        document.getElementById('contador-button-aniversario').innerHTML = 'Vaga expirado';
        document.getElementById('contador-button-aniversario').style.cursor = 'not-allowed';
    }
}, 1000);

