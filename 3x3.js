const gridContainer = document.querySelector('.grid-container');
const szamok = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function keveres() {
    const kevert_szamok = [...szamok].sort(() => Math.random() - 0.5);
    gridContainer.innerHTML = '';
    kevert_szamok.forEach(number => {
        const div = document.createElement('div');
        div.className = 'grid-item';
        div.textContent = number;
        gridContainer.appendChild(div);
    });
}
