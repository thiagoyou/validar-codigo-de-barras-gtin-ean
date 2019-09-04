<p>
    <h1 align="center">Validadores de Código de Barras (GTIN/EAN)</h1>
    <h3 align="center">Funções para realizar a validação do Código de Barras (GTIN/EAN).</h3>
</p>
<br>

O que é o código GTIN/EAN?
-------------------
"GTIN significa Número Global do Item Comercial. Se trata de um padrão criado e administrado pela GS1. É ele que aparece abaixo dos códigos de barras, amplamente utilizados no varejo físico para identificação de produtos.

Sua forma mais comum é de 13 dígitos, podendo também ser formado por 8, 12 ou 14 dígitos. No mundo virtual, os canais digitais usam esses identificadores únicos para estabelecer a singularidade de um produto".

**FONTE:** [GS1-BR - Códigos e Padrões](https://www.gs1br.org/codigos-e-padroes/chaves-de-identificacao/gtin)

Como validar o GTIN/EAN?
-------------------
### Código com 8 dígitos
Some dígitos nas posições "ímpares" multiplicados por três, some os dígitos nas posições "pares" e então some os dois resultados. O dígito verificador é o valor que somado ao total calculado resulte em um múltiplo de dez.

**Exemplo:** 78918344

```
> Remove o último dígito (digito verificador): 78918344 > 7891834
> Soma os números na posição ímpar: (7 + 9 + 8 + 4) * 3 = 84
> Soma os números na posição par: 8 + 1 + 3 = 12
> Soma dos resultados: 84 + 12 = 96
> Divide o resultado por dez: (96 / 10) = 9,6
> Arredonda o resultado para o inteiro mais próximo: 9,6 > 10
> Multiplica o inteiro encontrado por dez para encontrar o multiplicador: 10 * 10 = 100
> Subtraí a soma das posições do código para obter o dígito verificador: 100 - 96 = 4
```

### Código com 13 dígitos
Some os dígitos nas posições "pares" multiplicados por três, some dígitos nas posições "ímpares" e então some os dois resultados. O dígito verificador é o valor que somado ao total calculado resulte em um múltiplo de dez.

**Exemplo:** 7891000315507

```
> Remove o último dígito (digito verificador): 7891000315507 > 789100031550
> Soma os números na posição ímpar: 7 + 9 + 0 + 0 + 1 + 5 + 0 = 22
> Soma os números na posição par: (8 + 1 + 0 + 3 + 5 + 0) * 3 = 51
> Soma dos resultados: 22 + 55 = 73
> Divide o resultado por dez: (73 / 10) = 7,3
> Arredonda o resultado para o inteiro mais próximo: 7,3 > 8
> Multiplica o inteiro encontrado por dez para encontrar o multiplicador: 8 * 10 = 80
> Subtraí a soma das posições do código para obter o dígito verificador: 80 - 73 = 7
```

Como o código é composto?
-------------------
### Código com 8 dígitos
O código GTIN/EAN com 8 dígitos é composto por três partes: País de origem do produto, produto e dígito verificador.

**Exemplo:** 78912342

```
> 3 dígitos para o país: 789 (Brasil)
> Dígitos para controlar o produto:  1234
> Dígito verificador: 2
```

### Código com 13 dígitos
O código GTIN/EAN com 13 dígitos é composto por quatro partes: País de origem do produto, empresa fabricante, produto por ela produzido e dígito verificador.

**Exemplo:** 7891234567895

```
> 3 dígitos para o país: 789 (Brasil)
> 6,5 ou 4 dígitos para a empresa:  12345
> Dígitos definidos pela empresa para controlar o produto: 6789
> Dígito verificador: 5
```

**Fonte:** [.Net - Código de Barras](https://imasters.com.br/dotnet/net-codigo-de-barras-ean-8-e-13-parte-01)