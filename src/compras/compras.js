const calcularTotal = (ferramentas, comprar) => {
    if ( ferramentas.length === 0 || comprar.length === 0 ) {
        throw new Error("Ambas as listas precisam ter ao menos um item.")
    } else {
        let encontrar = false;
        let itensEncontrados = 0;
        let ferramentasListadas = []; 

        for (let indexComprar = 0; indexComprar < comprar.length; indexComprar++) {
            for (let indexFerramentas = 0; indexFerramentas < ferramentas.length; indexFerramentas++) {
                if (comprar[indexComprar] === ferramentas[indexFerramentas].nome) {
                    encontrar = true;
                    itensEncontrados += ferramentas[indexFerramentas].preco;
                    ferramentasListadas[ferramentasListadas.length] = comprar[indexComprar];
                }
            }
        }
        
        if (!encontrar) {
            throw new Error("Nenhuma ferramenta desejada encontrada.");
        } else {
            const valorFormatado = itensEncontrados.toFixed(2);

            let ferramentasFormatadas = ""
            for (let k = 0; k < ferramentasListadas.length; k++) {
                ferramentasFormatadas += ferramentasListadas[k];
                if (k < ferramentasListadas.length - 1) {
                    ferramentasListadas += ", ";
                }
            }
            return `O valor a pagar pelas ferramentas (${ferramentasListadas}) é R$ ${valorFormatado}`;
        }
    }
}

module.exports = {
    calcularTotal
}