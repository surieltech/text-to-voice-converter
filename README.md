# 🗣️ Conversor de Texto para Voz (Text-to-Speech)

Um conversor simples e elegante que transforma texto escrito em áudio utilizando a **Web Speech API** do navegador.  
O usuário pode digitar qualquer frase, escolher entre diversas vozes disponíveis no sistema e ouvir a narração com um clique.

![Demonstração do projeto](src/img/play.png) *Exemplo visual do botão de play*

---

## ✨ Funcionalidades

- ✅ Digitar ou colar qualquer texto na área de entrada.
- 🔊 Ouvir o texto falado em voz alta.
- 🗣️ Selecionar diferentes vozes disponíveis no sistema operacional ou navegador.
- 🎨 Interface com gradiente moderno e responsiva.
- ⚡ Suporte a múltiplos idiomas (dependendo das vozes instaladas no sistema).

---

## 🧠 Tecnologias utilizadas

- **HTML5** – estrutura da página.
- **CSS3** – estilização visual (gradientes, botões, campo de texto).
- **JavaScript (ES6)** – lógica de conversão, carregamento de vozes e interação com a API.
- **Web Speech API** – funcionalidade de síntese de fala (`SpeechSynthesisUtterance`).

---

## 📁 Estrutura do projeto
text-to-speech-converter/
│
├── index.html # Página principal
├── src/
│ ├── style.css # Estilos da interface
│ ├── script.js # Lógica de funcionamento
│ └── img/
│ ├── play.png # Ícone do botão "Ouvir"
│ └── dropdown.png# Ícone do seletor de vozes
└── README.md # Este arquivo

text

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

Exemplo:
```javascript
speech.rate = 1.2;   // velocidade 20% mais rápida
speech.pitch = 1.1;  // tom ligeiramente mais alto

🌐 Suporte a navegadores
Navegador	Suporte
Google Chrome	✅ Completo
Microsoft Edge	✅ Completo
Mozilla Firefox	✅ Completo
Safari (macOS/iOS)	✅ Parcial (vozes limitadas)
Opera	✅ Completo
A API pode não funcionar em navegadores muito antigos ou no Internet Explorer.

🧩 Possíveis melhorias futuras
Adicionar controles de velocidade e tom (sliders).

Permitir pausar/retomar a leitura.

Salvar vozes favoritas no localStorage.

Suporte a arrastar e soltar arquivos de texto.

Botão para limpar o texto rapidamente.

Detecção automática do idioma do texto.

📝 Licença
Este projeto é de código aberto e pode ser usado livremente para fins educacionais ou pessoais.
Sinta-se à vontade para modificar e distribuir.