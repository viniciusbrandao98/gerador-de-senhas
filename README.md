# 🔑 Gerador de senha aleatória

Aplicação que gera senhas seguras e aleatórias, com funcionalidade de cópia rápida para a área de transferência.

## 🚀 O que a aplicação faz:
- **Geração Randômica:** Utiliza uma base de 80+ caracteres (letras, números e símbolos).
- **Cópia Inteligente:** Usa a `Clipboard API` para facilitar o uso da senha.
- **Feedback Visual:** Exibe um alerta temporizado (2 segundos) confirmando que a senha foi copiada.

## 🛠️ Tecnologias e Conceitos:
- **Lógica de Repetição:** Loop `for` para construção da string.
- **Math & Strings:** Uso de `Math.random()` combinado com `substring()`.
- **Manipulação de Classes:** `classList.add` e `remove` para controle de animações CSS.
- **Event Listeners:** Escuta de cliques para gerar e copiar dados.