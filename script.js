function generarMatrices() {
    const fila = parseInt(document.getElementById("rowNumber").value);
    const columna = parseInt(document.getElementById("columnNumber").value);

    if (isNaN(fila) || isNaN(columna)) {
        alert("Por favor, introduzca valores numéricos válidos para fila y columna.");
        return;
    }

    const matriz1HTML = generarMatrizHTML(fila, columna, `<h3>Matriz 1</h3>`, 'matriz1');
    const matriz2HTML = generarMatrizHTML(fila, columna, `<h3>Matriz 2</h3>`, 'matriz2');

    document.getElementById("matricesContainer").innerHTML = matriz1HTML + matriz2HTML;
}

function generarMatrizHTML(fila, columna, nombreMatriz, idMatriz) {
    let matrizHTML = `<div class="matrix-container">${nombreMatriz}<table>`;
    for (let i = 0; i < fila; i++) {
        matrizHTML += "<tr>";
        for (let j = 0; j < columna; j++) {
            matrizHTML += `<td><input type="number" id="${idMatriz}-fila${i}-col${j}"></td>`;
        }
        matrizHTML += "</tr>";
    }
    matrizHTML += "</table></div>";
    return matrizHTML;
}

function sumarMatrices() {
    const fila = parseInt(document.getElementById("rowNumber").value);
    const columna = parseInt(document.getElementById("columnNumber").value);

    let resultado = [];
    for (let i = 0; i < fila; i++) {
        resultado[i] = [];
        for (let j = 0; j < columna; j++) {
            const valor1 = parseInt(document.getElementById(`matriz1-fila${i}-col${j}`).value);
            const valor2 = parseInt(document.getElementById(`matriz2-fila${i}-col${j}`).value);
            resultado[i][j] = valor1 + valor2;
        }
    }

    return mostrarMatriz(resultado);
}

function mostrarMatriz(matriz) {
    const fila = matriz.length;
    const columna = matriz[0].length;
    let resultadoHTML = `<h3>Matriz Resultante</h3><table>`;
    for (let i = 0; i < fila; i++) {
        resultadoHTML += "<tr>";
        for (let j = 0; j < columna; j++) {
            resultadoHTML += `<td>${matriz[i][j]}</td>`;
        }
        resultadoHTML += "</tr>";
    }
    resultadoHTML += "</table>";
    document.getElementById("resultadoContainer").innerHTML = resultadoHTML;
}