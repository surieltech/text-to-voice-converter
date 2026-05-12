# 🗣️ Conversor de Texto para Voz

Conversor simples e elegante que transforma texto digitado em áudio usando a **Web Speech API**. O usuário digita um texto, escolhe uma voz disponível no sistema e clica para ouvir.

## ✨ Funcionalidades

- Digitar ou colar qualquer texto na área de entrada.
- Ouvir o texto falado em voz alta.
- Selecionar diferentes vozes disponíveis no navegador/sistema.
- Interface com gradiente roxo/rosa, responsiva e moderna.
- Botão com ícone de play e seletor de vozes customizado.

## 🧠 Tecnologias

- **HTML5** – estrutura da página.
- **CSS3** – estilização (gradientes, flexbox, aparência personalizada).
- **JavaScript (ES6)** – lógica de carregamento de vozes e síntese de fala.
- **Web Speech API** – `SpeechSynthesisUtterance` e `window.speechSynthesis`.

## 📁 Estrutura
text-to-speech-converter/
├── index.html
├── src/
│ ├── style.css
│ ├── script.js
│ └── img/
│ ├── play.png
│ └── dropdown.png
└── README.md

> **Observação:** As imagens `play.png` e `dropdown.png` devem estar na pasta `src/img/` para que os ícones sejam exibidos corretamente.

---

## 🚀 Como usar

1. **Clone ou baixe** este repositório.
2. Certifique-se de que os arquivos de imagem estejam no local correto (`src/img/`).
3. Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Edge, Firefox, Safari).
4. Digite um texto na área de texto (ex: “Olá, mundo!”).
5. Escolha uma voz no menu suspenso.
6. Clique no botão **Ouvir**.
7. Pronto! O navegador falará o texto com a voz selecionada.

---

## ⚙️ Personalização

- **Cores e gradientes:** edite o arquivo `src/style.css` na classe `.hero` e no botão (`background: #ff2963`).
- **Lista de vozes:** o JavaScript carrega automaticamente as vozes disponíveis no sistema. Você pode filtrar por idioma modificando o código em `script.js`.
- **Velocidade e tom:** é possível adicionar propriedades como `speech.rate` (velocidade) e `speech.pitch` (tom) no arquivo JavaScript.

## 🌐 Suporte a navegadores

| Navegador | Suporte |
|-----------|---------|
| Chrome | ✅ Completo |
| Edge | ✅ Completo |
| Firefox | ✅ Completo |
| Safari | ⚠️ Parcial (vozes limitadas) |

## 🧩 Melhorias possíveis

- Adicionar botão pausar/retomar a leitura.
- Incluir slider para controle de tom (pitch).
- Suporte a arrastar e soltar arquivos de texto.
- Salvar texto e velocidade favoritos no `localStorage`.
- Detecção automática do idioma do texto.

## 📝 Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais ou pessoais.  
Sinta-se à vontade para modificar e distribuir.