function registrarLeitura() {
    // Obtenha os valores dos campos de hora em formato de string
    const horaInicioPicoStr = document.getElementById("horaInicioPico").value;
    const horaFinalPicoStr = document.getElementById("horaFinalPico").value;
    const horaAtualStr = document.getElementById("horaAtual").value;
    const sensorAtivo = document.getElementById("sensorAtivo").value;
    const viagemEmAndamento = document.getElementById("viagemEmAndamento").value;

    // Converta as strings de hora em objetos Date
    const horaInicioPico = new Date(`1970-01-01T${horaInicioPicoStr}`);
    const horaFinalPico = new Date(`1970-01-01T${horaFinalPicoStr}`);
    const horaAtual = new Date(`1970-01-01T${horaAtualStr}`);

    // Obtenha a hora e o minuto a partir dos objetos Date
    const horaInicioPicoHour = horaInicioPico.getHours();
    const horaInicioPicoMinute = horaInicioPico.getMinutes();
    const horaFinalPicoHour = horaFinalPico.getHours();
    const horaFinalPicoMinute = horaFinalPico.getMinutes();
    const horaAtualHour = horaAtual.getHours();
    const horaAtualMinute = horaAtual.getMinutes();

    let contador = parseFloat(document.getElementById("contador").textContent);
    let contagem = parseFloat(document.getElementById("contagem").textContent);

    // Verifique se a hora atual está dentro do intervalo especificado
    if (
        (horaAtualHour > horaInicioPicoHour || (horaAtualHour === horaInicioPicoHour && horaAtualMinute >= horaInicioPicoMinute)) &&
        (horaAtualHour < horaFinalPicoHour || (horaAtualHour === horaFinalPicoHour && horaAtualMinute <= horaFinalPicoMinute)) &&
        sensorAtivo === "sim"
    ) {
        contagem += contador;
    }

    document.getElementById("contagem").textContent = contagem.toString();
}
