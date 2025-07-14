// script.js

const mallaPorSemestre = [
  {
    titulo: "Primer Año - I Semestre",
    ramos: [
      { nombre: "Biología Celular", id: "biologia-celular", abre: ["fisiologia-humana-i", "genetica", "lab-genetica", "histologia", "lab-histologia", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Laboratorio de Biología Celular", id: "lab-biologia-celular", abre: ["fisiologia-humana-i", "genetica", "lab-genetica", "histologia", "lab-histologia", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Matemáticas Avanzadas", id: "matematicas", abre: ["fisica", "investigacion-i", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Química General", id: "quimica-general", abre: ["quimica-organica", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Introducción a la Medicina I", id: "intro-med-i", abre: ["intro-med-ii", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Habilidades Comunicativas", id: "habilidades-comunicativas" }
    ]
  },
  {
    titulo: "Primer Año - II Semestre",
    ramos: [
      { nombre: "Física", id: "fisica", abre: ["fisiologia-humana-i", "internado-interna", "internado-comunitaria", "internado-electivo"], requiere: ["matematicas"] },
      { nombre: "Química Orgánica", id: "quimica-organica", abre: ["bioquimica", "internado-interna", "internado-comunitaria", "internado-electivo"], requiere: ["quimica-general"] },
      { nombre: "Introducción a la Medicina II", id: "intro-med-ii", abre: ["medico-paciente-i", "internado-interna", "internado-comunitaria", "internado-electivo"], requiere: ["intro-med-i"] },
      { nombre: "Anatomía Humana I", id: "anatomia-i", abre: ["fisiologia-humana-i", "anatomia-ii", "lab-anatomia-ii", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Laboratorio de Anatomía Humana I", id: "lab-anatomia-i", abre: ["fisiologia-humana-i", "anatomia-ii", "lab-anatomia-ii", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Cómo Elaborar una Investigación Científica", id: "como-investigar" }
    ]
  },
  {
    titulo: "Segundo Año - III Semestre",
    ramos: [
      { nombre: "Fisiología Humana I", id: "fisiologia-humana-i", abre: ["fisiologia-humana-ii"], requiere: ["biologia-celular", "lab-biologia-celular", "fisica", "anatomia-i", "lab-anatomia-i"] },
      { nombre: "Bioquímica", id: "bioquimica", abre: ["inmunologia", "farmacologia"], requiere: ["quimica-organica"] },
      { nombre: "Médico Paciente I", id: "medico-paciente-i", abre: ["medico-paciente-ii"], requiere: ["intro-med-ii"] },
      { nombre: "Anatomía Humana II", id: "anatomia-ii", abre: ["fisiologia-humana-ii", "histologia", "lab-histologia"], requiere: ["anatomia-i"] },
      { nombre: "Laboratorio de Anatomía Humana II", id: "lab-anatomia-ii", abre: ["fisiologia-humana-ii", "histologia", "lab-histologia"], requiere: ["lab-anatomia-i"] },
      { nombre: "Antropología Filosófica", id: "antropologia" }
    ]
  },
  {
    titulo: "Segundo Año - IV Semestre",
    ramos: [
      { nombre: "Genética y Biología Molecular", id: "genetica", abre: ["microbiologia"] },
      { nombre: "Laboratorio de Genética y Biología Molecular", id: "lab-genetica", abre: ["lab-microbiologia"] },
      { nombre: "Fisiología Humana II", id: "fisiologia-humana-ii", abre: ["inmunologia", "semiologia", "fisiopatologia", "farmacologia", "patologia-i"], requiere: ["fisiologia-humana-i"] },
      { nombre: "Médico Paciente II", id: "medico-paciente-ii", abre: ["semiologia", "etica-i"], requiere: ["medico-paciente-i"] },
      { nombre: "Histología", id: "histologia", abre: ["inmunologia", "semiologia", "patologia-i"], requiere: ["anatomia-ii"] },
      { nombre: "Laboratorio de Histología", id: "lab-histologia", abre: ["inmunologia", "semiologia", "patologia-i"], requiere: ["lab-anatomia-ii"] },
      { nombre: "Psicología", id: "psicologia", abre: ["etica-i", "psiquiatria"] },
      { nombre: "Responsabilidad Social y Servicio Solidario", id: "rsss" }
    ]
  },
  {
    titulo: "Quinto Año",
    ramos: [
      { nombre: "Otorrinolaringología", id: "otorrino", abre: ["internado-pediatria", "internado-cirugia", "internado-obstetricia"] },
      { nombre: "Dermatología", id: "dermatologia", abre: ["internado-pediatria", "internado-cirugia", "internado-obstetricia"] },
      { nombre: "Urología", id: "urologia", abre: ["internado-pediatria", "internado-cirugia", "internado-obstetricia"] },
      { nombre: "Oftalmología", id: "oftalmologia", abre: ["internado-pediatria", "internado-cirugia", "internado-obstetricia"] },
      { nombre: "Medicina Legal", id: "medicina-legal", abre: ["internado-pediatria", "internado-cirugia", "internado-obstetricia"] },
      { nombre: "Pediatría", id: "pediatria", abre: ["internado-pediatria", "internado-cirugia", "internado-obstetricia"] },
      { nombre: "Obstetricia y Ginecología", id: "obstetricia", abre: ["internado-pediatria", "internado-cirugia", "internado-obstetricia"] }
    ]
  },
  {
    titulo: "Sexto Año",
    ramos: [
      { nombre: "Internado de Pediatría", id: "internado-pediatria", abre: ["internado-integrado"] },
      { nombre: "Internado de Cirugía", id: "internado-cirugia", abre: ["internado-integrado"] },
      { nombre: "Internado de Obstetricia y Ginecología", id: "internado-obstetricia", abre: ["internado-integrado"] }
    ]
  },
  {
    titulo: "Séptimo Año",
    ramos: [
      { nombre: "Internado de Medicina Interna", id: "internado-interna" },
      { nombre: "Internado de Medicina Comunitaria", id: "internado-comunitaria" },
      { nombre: "Internado Electivo", id: "internado-electivo" },
      { nombre: "Internado Integrado", id: "internado-integrado" }
    ]
  }
];

function crearMalla() {
  const contenedor = document.getElementById("malla");
  mallaPorSemestre.forEach(bloque => {
    const semestre = document.createElement("div");
    semestre.className = "semestre";
    semestre.innerHTML = `<h2>${bloque.titulo}</h2>`;

    bloque.ramos.forEach(ramo => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.id = ramo.id;
      div.textContent = ramo.nombre;
      if (ramo.requiere) {
        div.classList.add("bloqueado");
      }
      div.addEventListener("click", () => aprobarRamo(ramo.id));
      semestre.appendChild(div);
    });

    contenedor.appendChild(semestre);
  });
}

function aprobarRamo(id) {
  const ramo = document.getElementById(id);
  if (!ramo || ramo.classList.contains("aprobado")) return;
  ramo.classList.add("aprobado");

  const encontrado = mallaPorSemestre.flatMap(b => b.ramos).find(r => r.id === id);
  const abre = encontrado?.abre || [];
  abre.forEach(depId => {
    const dep = document.getElementById(depId);
    if (!dep) return;

    const requisitos = mallaPorSemestre.flatMap(b => b.ramos).find(r => r.id === depId)?.requiere || [];
    const aprobados = requisitos.every(req => document.getElementById(req)?.classList.contains("aprobado"));
    if (aprobados) {
      dep.classList.remove("bloqueado");
    }
  });
}

window.onload = crearMalla();
