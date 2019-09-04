$(document).ready(function() {
    /**
     * valida o codigo de barras do produto (EAN/GTIN)
     */
    $('body').on('change', '#codigo_barras', function() {
        // pega o codigo de barras (EAN/GTIN)
        let codigo = this.value || '';
        
        // verifica se o código existe e é um número
        if (codigo.length > 0 && !isNaN(codigo)) {
        	let num, dv;
        	
        	// valida o EAN com 8 digitos (resumido)
        	// ou com 13 (completo)
        	if (codigo.length == 8) {
        		// completa o código de barras com 13 chars
        		num = codigo.padStart(13, 0);
        		// pega o dígito verificador
        		dv = parseInt(num.charAt(12));
        		// pega o código de barras excluíndo o dígito verificador
        		num = num.substring(0, 12);
        		// seta o fator de multiplicação inicial
        		factor = 1;
        	} else {
        		// completa o código de barras com 18 chars
        		num = codigo.padStart(18, 0);
        		// pega o dígito verificador
        		dv = parseInt(num.charAt(17));
        		// pega o código de barras excluíndo o dígito verificador
        		num = num.substring(0, 17);        
        		// seta o fator de multiplicação inicial
        		factor = 3;
        	}
        	
        	// realiza o calculo do dígito verificador
        	let sum = 0;
        	num.split('').forEach(function(value) {
        		// faz a soma dos dígitos do código
        		sum += (factor * value);
        		// atualiza o fator de multiplicação
        		factor = factor == 3 ? 1 : 3;
        	}, factor);
        	
        	// realiza o calculo do dígito verificador
        	let mmc = (Math.ceil(sum / 10)) * 10;
        	mod = parseInt(mmc - sum);
        	
        	// valida se o dígito verificador informado
        	// é igual ao dígito verificador calculado
        	if (dv != mod) {
        		alert('O código de barras digitado não é válído. Por favor, verique os dados informados.');
        	}
        }
    });
});
