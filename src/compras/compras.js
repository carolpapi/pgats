const calcularTotal = (ferramentas, comprar) => {
    if ( ferramentas.length === 0 || comprar.length === 0 ) {
        throw new Error("Ambas as listas precisam ter ao menos um item.")
    } else {
        let ferramentasListadas = [];
        let itensEncontrados = 0;
        let encontrado = false; 
        for (let indexComprar = 0; indexComprar < comprar.length; indexComprar++) {
            for (let indexFerramentas = 0; indexFerramentas < ferramentas.length; indexFerramentas++) {
                if (comprar[indexComprar] === ferramentas[indexFerramentas].nome) {
                    encontrado = true;
                    itensEncontrados += ferramentas[indexFerramentas].preco;
                    ferramentasListadas[ferramentasListadas.length] = comprar[indexComprar];
                }
            }
        }
        if (!encontrado) {
            throw new Error("Nenhuma ferramenta desejada encontrada.");
        } else {
            const valor = itensEncontrados.toFixed(2);
            let ferramentasDesejadas = ""
            for (let index = 0; index < ferramentasListadas.length; index++) {
                ferramentasDesejadas += ferramentasListadas[index];
                if (index < ferramentasListadas.length - 1) {
                    ferramentasDesejadas += ", ";
                }
            }
            return `O valor a pagar pelas ferramentas (${ferramentasDesejadas}) é R$ ${valor}`;
        }
    }
}
module.exports = {
    calcularTotal
}