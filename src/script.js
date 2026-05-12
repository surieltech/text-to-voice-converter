let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

// Elementos do controle de velocidade
const velocidadeSlider = document.getElementById("velocidade");
const velocidadeValor = document.getElementById("velocidadeValor");
// Botão limpar
const btnLimpar = document.getElementById("btnLimpar");

// --- Placeholder enquanto carrega vozes
voiceSelect.innerHTML = '<option>Carregando vozes...</option>';

// --- Carregar vozes quando disponíveis
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach((voice, i) => {
        voiceSelect.options[i] = new Option(voice.name, i);
    });

    // Definir voz padrão
    speech.voice = voices[0];

    // Restaurar última voz salva, se houver
    const ultimaVoz = localStorage.getItem("vozSelecionada");
    if (ultimaVoz !== null && voices[ultimaVoz]) {
        speech.voice = voices[ultimaVoz];
        voiceSelect.value = ultimaVoz;
    } else {
        voiceSelect.value = 0;
    }
};

// --- Salvar voz selecionada
voiceSelect.addEventListener("change", () => {
    const indice = voiceSelect.value;
    speech.voice = voices[indice];
    localStorage.setItem("vozSelecionada", indice);
});

// --- Controle de velocidade
velocidadeSlider.addEventListener("input", () => {
    const valor = parseFloat(velocidadeSlider.value);
    speech.rate = valor;
    velocidadeValor.innerText = valor.toFixed(1) + "x";
});

// --- Botão Limpar
btnLimpar.addEventListener("click", () => {
    document.querySelector("textarea").value = "";
});

// --- Botão Ouvir (com validação e cancelamento)
document.querySelector("button").addEventListener("click", () => {
    const texto = document.querySelector("textarea").value.trim();

    if (texto === "") {
        alert("Por favor, digite algum texto antes de ouvir.");
        return;
    }

    // Cancela qualquer fala em andamento
    window.speechSynthesis.cancel();

    speech.text = texto;
    window.speechSynthesis.speak(speech);
});