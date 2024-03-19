import { KUTYAK } from "./adat.js";
import { kutyaOsszeallit } from "./fuggvenyek.js";

//kutya elemek összeállítása
const kutyaElemek = kutyaOsszeallit(KUTYAK);

//beszúrás html-be
const KUTYA_DIV = document.getElementById("kutya");
KUTYA_DIV.innerHTML = kutyaElemek;