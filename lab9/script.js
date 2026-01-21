const intensitySlider = document.getElementById('intensity');
const lvlLabel = document.getElementById('lvlLabel');

intensitySlider.oninput = function () {
    lvlLabel.innerText = this.value;
}

const form = document.getElementById('megaForm');

form.onsubmit = function (e) {
    e.preventDefault();

    const user = document.getElementById('userName').value;
    const time = document.getElementById('startTime').value;
    const loc = document.getElementById('location').value;
    const intensity = intensitySlider.value;
    const color = document.getElementById('cardColor').value;

    const loadType = document.querySelector('input[name="load"]:checked').value;

    const tools = [];
    document.querySelectorAll('input[name="tool"]:checked').forEach(cb => tools.push(cb.value));
    const toolsText = tools.length > 0 ? tools.join(", ") : "Власна вага";

    renderCard({user, time, loc, intensity, loadType, toolsText, color});

    form.reset();
    lvlLabel.innerText = "5";
};

function renderCard(data) {
    const container = document.getElementById('cardsContainer');
    const card = document.createElement('div');
    card.className = 'res-card';

    card.style.backgroundColor = 'white';
    card.style.borderTop = `8px solid ${data.color}`;

    card.innerHTML = `
        <h4 style="margin-top:0">${data.user}</h4>
        <p>Час: <b>${data.time}</b> | Складність: <b>${data.intensity}/10</b></p>
        <p>Місце: <b>${data.loc}</b></p>
        <p>Тип: <b>${data.loadType}</b></p>
        <p>Інвентар: <small>${data.toolsText}</small></p>
        <button onclick="this.parentElement.remove()" style="cursor:pointer; border:none; background:none; color:red; font-weight:bold;">Видалити</button>
    `;

    container.prepend(card);
}