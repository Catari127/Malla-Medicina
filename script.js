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
      { nombre: "Física", id: "fisica", abre: ["fisiologia-humana-i", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Química Orgánica", id: "quimica-organica", abre: ["bioquimica", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Introducción a la Medicina II", id: "intro-med-ii", abre: ["medico-paciente-i", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Anatomía Humana I", id: "anatomia-i", abre: ["fisiologia-humana-i", "anatomia-ii", "lab-anatomia-ii", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Laboratorio de Anatomía Humana I", id: "lab-anatomia-i", abre: ["fisiologia-humana-i", "anatomia-ii", "lab-anatomia-ii", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Cómo Elaborar una Investigación Científica", id: "como-investigar" }
    ]
  },
  {
    titulo: "Segundo Año - III Semestre",
    ramos: [
      { nombre: "Fisiología Humana I", id: "fisiologia-humana-i", abre: ["fisiologia-humana-ii"] },
      { nombre: "Bioquímica", id: "bioquimica", abre: ["inmunologia", "farmacologia"] },
      { nombre: "Médico Paciente I", id: "medico-paciente-i", abre: ["medico-paciente-ii"] },
      { nombre: "Anatomía Humana II", id: "anatomia-ii", abre: ["fisiologia-humana-ii", "histologia", "lab-histologia"] },
      { nombre: "Laboratorio de Anatomía Humana II", id: "lab-anatomia-ii", abre: ["fisiologia-humana-ii", "histologia", "lab-histologia"] },
      { nombre: "Antropología Filosófica", id: "antropologia" }
    ]
  },
  {
    titulo: "Segundo Año - IV Semestre",
    ramos: [
      { nombre: "Genética y Biología Molecular", id: "genetica", abre: ["microbiologia"] },
      { nombre: "Laboratorio de Genética y Biología Molecular", id: "lab-genetica", abre: ["lab-microbiologia"] },
      { nombre: "Fisiología Humana II", id: "fisiologia-humana-ii", abre: ["inmunologia", "semiologia", "fisiopatologia", "farmacologia", "patologia-i"] },
      { nombre: "Médico Paciente II", id: "medico-paciente-ii", abre: ["semiologia", "etica-i"] },
      { nombre: "Histología", id: "histologia", abre: ["inmunologia", "semiologia", "patologia-i"] },
      { nombre: "Laboratorio de Histología", id: "lab-histologia", abre: ["inmunologia", "semiologia", "patologia-i"] },
      { nombre: "Psicología", id: "psicologia", abre: ["etica-i", "psiquiatria"] },
      { nombre: "Responsabilidad Social y Servicio Solidario", id: "rsss" }
    ]
  },
  {
    titulo: "Tercer Año - V Semestre",
    ramos: [
      { nombre: "Microbiología", id: "microbiologia", abre: ["internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Laboratorio de Microbiología", id: "lab-microbiologia", abre: ["internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Inmunología y Nutrición", id: "inmunologia", abre: ["medicina-interna", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Tópicos de Investigación en Salud I", id: "investigacion-i", abre: ["investigacion-ii", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Semiología Médica", id: "semiologia", abre: ["med-orientada", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Ética Médica I", id: "etica-i", abre: ["etica-ii", "internado-interna", "internado-comunitaria", "internado-electivo"] }
    ]
  },
  {
    titulo: "Tercer Año - VI Semestre",
    ramos: [
      { nombre: "Fisiopatología Humana", id: "fisiopatologia", abre: ["cirugia", "medicina-interna", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Farmacología", id: "farmacologia", abre: ["cirugia", "medicina-interna", "neurologia", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Tópicos de Investigación en Salud II", id: "investigacion-ii", abre: ["salud-publica-i", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Medicina Orientada al Problema", id: "med-orientada", abre: ["medicina-interna", "neurologia", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Ética Médica II", id: "etica-ii", abre: ["internado-interna", "internado-comunitaria", "internado-electivo"] }
    ]
  },
  {
    titulo: "Cuarto Año - VII Semestre",
    ramos: [
      { nombre: "Cirugía", id: "cirugia", abre: [] },
      { nombre: "Medicina Interna", id: "medicina-interna", abre: ["internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Salud Pública I", id: "salud-publica-i", abre: ["salud-publica-ii", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Neurología", id: "neurologia", abre: ["internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Patología I", id: "patologia-i", abre: ["patologia-ii", "internado-interna", "internado-comunitaria", "internado-electivo"] }
    ]
  },
  {
    titulo: "Cuarto Año - VIII Semestre",
    ramos: [
      { nombre: "Cirugía", id: "cirugia-8", abre: ["internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Medicina Interna", id: "medicina-interna-8", abre: ["otorrino", "dermatologia", "urologia", "oftalmologia", "medicina-legal", "pediatria", "obstetricia", "internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Salud Pública II", id: "salud-publica-ii", abre: ["internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Patología II", id: "patologia-ii", abre: ["internado-interna", "internado-comunitaria", "internado-electivo"] },
      { nombre: "Psiquiatría", id: "psiquiatria", abre: ["internado-interna", "internado-comunitaria", "internado-electivo"] }
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

// Generar el mapa de id a ramo
const idARamo = {};
mallaPorSemestre.forEach(sem => {
  sem.ramos.forEach(ramo => {
    idARamo[ramo.id] = ramo;
  });
});

// Limpiar requisitos actuales
Object.values(idARamo).forEach(ramo => {
  delete ramo.requiere;
});

// Construir 'requiere' en base a 'abre'
Object.values(idARamo).forEach(ramo => {
  (ramo.abre || []).forEach(abreId => {
    if (!idARamo[abreId].requiere) idARamo[abreId].requiere = [];
    idARamo[abreId].requiere.push(ramo.id);
  });
});

// Crear elementos DOM para la malla
function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  mallaPorSemestre.forEach(semestre => {
    const divSem = document.createElement("div");
    divSem.className = "semestre";
    divSem.innerHTML = `<h2>${semestre.titulo}</h2>`;

    semestre.ramos.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.id = ramo.id;
      divRamo.textContent = ramo.nombre;

      // Si tiene requisitos, bloquearlo inicialmente
      if (ramo.requiere && ramo.requiere.length > 0) {
        divRamo.classList.add("bloqueado");
      }

      divRamo.addEventListener("click", () => {
        if (divRamo.classList.contains("bloqueado") || divRamo.classList.contains("aprobado")) return;

        divRamo.classList.add("aprobado");
        actualizarDesbloqueos();
      });

      divSem.appendChild(divRamo);
    });

    contenedor.appendChild(divSem);
  });
}

// Verifica si todos los requisitos de un ramo están aprobados
function requisitosAprobados(ramo) {
  if (!ramo.requiere || ramo.requiere.length === 0) return true;
  return ramo.requiere.every(reqId => {
    const elem = document.getElementById(reqId);
    return elem && elem.classList.contains("aprobado");
  });
}

// Actualiza la visibilidad (bloqueado/desbloqueado) de todos los ramos
function actualizarDesbloqueos() {
  Object.values(idARamo).forEach(ramo => {
    const elem = document.getElementById(ramo.id);
    if (!elem) return;

    if (requisitosAprobados(ramo)) {
      elem.classList.remove("bloqueado");
    } else {
      // Solo bloquear si no está aprobado ya
      if (!elem.classList.contains("aprobado")) {
        elem.classList.add("bloqueado");
      }
    }
  });
}

window.onload = () => {
  crearMalla();
  actualizarDesbloqueos();
};
