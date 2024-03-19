export function kutyaOsszeallit(lista) {
    let txt = "";
    for (let index = 0; index < lista.length; index++) {
        txt += `<div class="kutya">
                    <div><img src="${lista[index].kep}" alt="${lista[index].nev}"></div>
                    <h3>${lista[index].nev}</h3>
                    <p>Faj: ${lista[index].faj}</p>
                    <p>Kor: ${lista[index].kor}</p>
                    <button>Kiválaszt</button>
                </div>`;
    }
    return txt;
}