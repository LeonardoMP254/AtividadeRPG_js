# 🧙‍♂️ Gerador de Personagem RPG – JavaScript

## 📖 Descrição
Este projeto foi desenvolvido como uma atividade prática de **JavaScript**, com o objetivo de criar um **gerador de personagem de RPG** interativo.

A aplicação permite que o usuário informe seu **nome e sobrenome**, selecione uma **classe de personagem** e uma **habilidade de ataque**.  
Com base nessas escolhas, o JavaScript gera uma **história personalizada**, exibida em forma de mensagem, simulando a criação de um herói de RPG.

---

## 🎯 Objetivo da Atividade
- Trabalhar com formulários HTML
- Capturar dados digitados pelo usuário
- Utilizar seleções múltiplas (`<select multiple>`)
- Manipular elementos do DOM com JavaScript
- Validar dados antes da execução
- Criar uma saída dinâmica e personalizada

---

## 🧩 Funcionalidades
- ✍️ Entrada de nome e sobrenome
- 🛡️ Seleção de uma ou mais classes de RPG
- ⚔️ Seleção de uma ou mais habilidades de ataque
- ⚠️ Validação para impedir execução sem seleção
- 📜 Geração de uma mensagem narrativa personalizada
- 💬 Exibição do resultado através de `alert`

---

## 🧠 Conceitos de JavaScript Utilizados
- `document.getElementById()`
- Acesso a formulários (`document.form`)
- `Array.from()`
- `selectedOptions`
- Funções (`function`)
- Condicionais (`if`)
- Concatenação de strings
- Template strings (`` `${}` ``)
- `window.alert()`

---

## ⚙️ Como Funciona
1. O usuário digita seu nome e sobrenome.
2. Seleciona uma ou mais **classes** de personagem.
3. Seleciona uma ou mais **habilidades de ataque**.
4. Ao clicar em **“Começar!”**, o JavaScript:
   - Junta o nome completo
   - Captura as opções selecionadas
   - Verifica se todas as escolhas foram feitas
   - Monta uma história personalizada
   - Exibe a mensagem final na tela
