<?php
    /**
     * Valida o código de barras do produto (EAN/GTIN)
     */
    function validarCodigoBarras($codigo = null) 
    {
        if (!empty($codigo)) {
            // valida se o GTIN possuí 8 ou 13 dígitos
            if (strlen(intval($codigo)) == 8) {
                // completa o GTIN com 13 chars
                $num = str_pad($codigo, 13, '0', STR_PAD_LEFT);
                // pega o digito verificador
                $dv = (int) substr($num, -1);
                // seta o novo numero
                $num = substr($num, 0, 12);
                // seta o fator de multiplicação
                $factor = 1;
            } else {
                // completa o GTIN com 18 chars
                $num = str_pad($codigo, 18, '0', STR_PAD_LEFT);
                // pega o digito verificador
                $dv = (int) substr($num, -1);
                // seta o novo numero
                $num = substr($num, 0, 17);
                // seta o fator de multiplicação
                $factor = 3;
            }
            
            // realiza o calculo do digito verificador
            $sum = 0;
            $values = str_split($num, 1);
            foreach ($values as $value) {
                // faz a soma dos dígitos do código
                $sum += ($factor * $value);
                // atualiza o fator de multiplicação
                $factor = $factor == 3 ? 1 : 3;
            }
            
            $mmc = (ceil($sum / 10)) * 10;
            $mod = (int) $mmc - $sum;
            
            // valida o digito
            if ($dv != $mod) {
                throw new Exception('O código de barras digitado não é válído. Por favor, verique os dados informados.');
            }
        }
        
        return true;
    }
?>