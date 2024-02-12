function addPlayer() {
    const position = document.getElementById("position").value;
    const name = document.getElementById("name").value;

    const confirmation = confirm("Escalar " + name + " como " + position + "?");

    if (confirmation) {
        const teamList = document.getElementById("team-list");
        const playerItem = document.createElement("li");
        playerItem.id = "player-" + name.replace(/\s/g, '-'); // Usando o nome como identificador único
        playerItem.innerText = position + ": " + name;
        teamList.appendChild(playerItem);

        document.getElementById("position").value = "";
        document.getElementById("name").value = "";
    }
}

function removePlayer() {
    const name = document.getElementById("nameToRemove").value;
    const playerToRemove = document.getElementById("player-" + name.replace(/\s/g, '-'));

    const confirmation = confirm("Remover o jogador " + name + "?");

    if (confirmation) {
        playerToRemove.remove();
        document.getElementById("nameToRemove").value = "";
    }
}
