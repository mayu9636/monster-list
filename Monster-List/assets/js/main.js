let monsters = [];

const monsterNames = ["Shadow", "Pompom", "Blaze", "Bubbles", "Rogue", "Marshmallow", "Titan", "Cocoa", "Rex", "Sprinkles", "Spike", "Sunny", "Viper", "Twinkle", "Storm", "Luna", "Phoenix", "Cookie", "Orion", "Peaches", "Jett", "Jellybean", "Volt", "Sushi", "Nova", "Mochi", "Ace", "Pudding", "Axel", "Cotton", "Draco", "Petal", "Xander", "Waffles", "Kai", "Dante", "Daisy", "Loki", "Sparkle", "Raven", "Maximus", "Gummy", "Ajax", "Toffee", "Zephyr", "Frosty", "Ryder", "Poppy", "Cheesecake", "Blossom"];

for (let i = 1; i <= 50; i++) {
    monsters.push({
        number: i,
        name: monsterNames[i - 1],
    });
}

// .container の取得
const container = document.querySelector(".container");

// モンスターを表示する関数
function displayMonsters(monsters) {
    const container = document.querySelector(".container");
    container.innerHTML = "";

    monsters.forEach((monster, index) => {
        const listItem = document.createElement("div");
        listItem.className = "list-item";

        // listItemの中にHTMLを追加
        listItem.innerHTML = `
        <p class="number">No.${monster.number}</p>
        <div class="img-wrap">
          <img src="assets/images/monster(${monster.number}).png" alt="${monster.name}" />
        </div>
        <p>${monster.name}</p>
    `;

        // HTML追加
        container.appendChild(listItem);
    });
}

displayMonsters(monsters);


////////////////////////////////////////////// 並び替え

// Number順
function sortMonsterByNumber() {
    monsters.sort((a, b) => a.number - b.number);
    displayMonsters(monsters);
}

// アルファベット順
function sortMonsterByAlphabet() {
    monsters.sort(compareMonsters);
    displayMonsters(monsters);
}

function compareMonsters(first, second) {
    // 最初のモンスターの名前が、次に比較したいモンスターの名前のアルファベットより
    // 小さい(前にある)場合は-1で返して、前に持っていく
    if (first.name < second.name) {
        return -1;
    }

    // 最初のモンスターの名前が、次に比較したいモンスターの名前のアルファベットより
    // 大きい(後ろにある)場合は1で返して、後ろに持っていく
    if (first.name > second.name) {
        return 1;
    }

    return 0;
}
