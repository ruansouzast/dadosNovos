

// ── Estado do carrossel 
let currentSlide = 0;
const TOTAL_SLIDES = 9;
let dados = null;

// ── Carregamento de dados 
async function carregarDados() {
  try {
    dados = await d3.csv("https://raw.githubusercontent.com/ruansouzast/dadosNovos/main/dados_limpos%20(2).csv");
    console.log("Dados carregados:", dados);
    renderCharts();
  } catch (error) {
    console.error("Erro ao carregar dados:", error);
  }
}

// ── Renderizar gráficos
function renderCharts() {
  renderChart0(); 
  renderChart1(); 
  renderChart2(); 
  renderChart3(); 
  renderChart4(); 
  renderChart5(); 
  renderChart6(); 
  renderChart7();
  renderChart8(); 
}

// Grafico 0 - Experiência vs Salário Médio
function renderChart0() {
  const container = document.getElementById("chart-0");
  if (!container) return;

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": "bar",
    "data": { "values": dados || [] },
    "encoding": {
      "x": {
        "field": "experience_level",
        "type": "nominal",
        "title": "Experiência"
      },
      "y": {
        "field": "salary_in_usd",
        "aggregate": "average",
        "type": "quantitative",
        "title": "Salário Médio"
      }
    },
    "width": 600,
    "height": 200
  };

  vegaEmbed(container, spec, {actions: false});
}

// Grafico 1 - quantidade por experiência
function renderChart1() {
  const container = document.getElementById("chart-1");
  if (!container) return;

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": "bar",
    "data": { "values": dados || [] },
    "encoding": {
      "x": {
        "field": "experience_level",
        "type": "nominal",
        "title": "Experiência"
      },
      "y": {
        "aggregate": "count",
        "type": "quantitative",
        "title": "Quantidade"
      }
    },
    "width": 600,
    "height": 200
  };

  vegaEmbed(container, spec, {actions: false});
}

// Grafico 2 - contratação por Tipo
function renderChart2() {
  const container = document.getElementById("chart-2");
  if (!container) return;

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": "bar",
    "data": { "values": dados || [] },
    "encoding": {
      "x": {
        "field": "employment_type",
        "type": "nominal",
        "title": "Contratação"
      },
      "y": {
        "aggregate": "count",
        "type": "quantitative",
        "title": "Quantidade"
      }
    },
    "width": 600,
    "height": 200
  };

  vegaEmbed(container, spec, {actions: false});
}

// Grafico 3 - profissionais por país
function renderChart3() {
  const container = document.getElementById("chart-3");
  if (!container) return;

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": "bar",
    "data": { "values": dados || [] },
    "encoding": {
      "x": {
        "field": "employee_residence",
        "type": "nominal",
        "title": "País"
      },
      "y": {
        "aggregate": "count",
        "type": "quantitative",
        "title": "Profissionais"
      }
    },
    "width": 600,
    "height": 200
  };

  vegaEmbed(container, spec, {actions: false});
}

// gráfico 4 - salário médio por País
function renderChart4() {
  const container = document.getElementById("chart-4");
  if (!container) return;

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": "bar",
    "data": { "values": dados || [] },
    "encoding": {
      "x": {
        "field": "employee_residence",
        "type": "nominal",
        "title": "País"
      },
      "y": {
        "field": "salary_in_usd",
        "aggregate": "average",
        "type": "quantitative",
        "title": "Salário Médio"
      }
    },
    "width": 600,
    "height": 200
  };

  vegaEmbed(container, spec, {actions: false});
}

// Grafico 5 - faixa Salarial
function renderChart5() {
  const container = document.getElementById("chart-5");
  if (!container) return;

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": "bar",
    "data": { "values": dados || [] },
    "encoding": {
      "x": {
        "field": "salary_in_usd",
        "type": "quantitative",
        "bin": true,
        "title": "Faixa Salarial"
      },
      "y": {
        "aggregate": "count",
        "type": "quantitative",
        "title": "Quantidade"
      }
    },
    "width": 600,
    "height": 200
  };

  vegaEmbed(container, spec, {actions: false});
}

// Grafico 6 - experiência x Contratação
function renderChart6() {
  const container = document.getElementById("chart-6");
  if (!container) return;

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": "circle",
    "data": { "values": dados || [] },
    "encoding": {
      "x": {
        "field": "experience_level",
        "type": "nominal",
        "title": "Experiência"
      },
      "y": {
        "field": "employment_type",
        "type": "nominal",
        "title": "Contratação"
      },
      "size": {
        "aggregate": "count",
        "type": "quantitative",
        "title": "Contagem"
      }
    },
    "width": 600,
    "height": 200
  };

  vegaEmbed(container, spec, {actions: false});
}

// Grafico 7 - contratação por Tipo (Pizza)
function renderChart7() {
  const container = document.getElementById("chart-7");
  if (!container) return;

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": "arc",
    "data": { "values": dados || [] },
    "encoding": {
      "theta": {
        "aggregate": "count",
        "type": "quantitative"
      },
      "color": {
        "field": "employment_type",
        "type": "nominal",
        "title": "Contratação"
      }
    },
    "width": 600,
    "height": 200
  };

  vegaEmbed(container, spec, {actions: false});
}

// gráfico 8 - boxplot Salarial por experiência
function renderChart8() {
  const container = document.getElementById("chart-8");
  if (!container) return;

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
    "mark": "boxplot",
    "data": { "values": dados || [] },
    "encoding": {
      "x": {
        "field": "experience_level",
        "type": "nominal",
        "title": "Experiência"
      },
      "y": {
        "field": "salary_in_usd",
        "type": "quantitative",
        "title": "Salário (USD)"
      }
    },
    "width": 600,
    "height": 200
  };

  vegaEmbed(container, spec, {actions: false});
}

// ── Ir para um slide específico
function goToSlide(index) {

  const prev = document.getElementById(`slide-${currentSlide}`);
  if (prev) prev.classList.remove('active');

  // Atualiza índice (com loop)
  currentSlide = (index + TOTAL_SLIDES) % TOTAL_SLIDES;

  //ativa o novo slide
  const next = document.getElementById(`slide-${currentSlide}`);
  if (next) next.classList.add('active');

  //atualiza os dots
  updateDots();

  //atualiza floating card com dados do slide
  updateFloatCard();
}

// avança para o próximo slide 
function nextSlide() {
  goToSlide(currentSlide + 1);
}

//sincroniza os dots de navegaçao 
function updateDots() {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
}

//Dados dos floating cards por slide
const floatData = [
  { val: '2.4k',  label: 'Média salarial' },
  { val: '4.8k',  label: 'Total de registros' },
  { val: '86%',   label: 'Contratos ativos' },
  { val: '32',    label: 'Países representados' },
  { val: 'R$195k', label: 'Salário médio país' },
  { val: '18',    label: 'Faixas salariais' },
  { val: '8',     label: 'Tipos de experiência' },
  { val: '36%',   label: 'Empregos remotos' },
  { val: '±$82k', label: 'Variação salarial' },
];

function updateFloatCard() {
  const valEl   = document.getElementById('floatVal');
  const labelEl = valEl?.nextElementSibling;
  if (!valEl || !labelEl) return;

  const data = floatData[currentSlide];
  valEl.textContent   = data.val;
  labelEl.textContent = data.label;
}

// Navegação por teclado 
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goToSlide(currentSlide - 1);
});

//Swipe touch para mobile 
let touchStartX = 0;

document.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    if (diff > 0) nextSlide();
    else          goToSlide(currentSlide - 1);
  }
});




document.addEventListener('DOMContentLoaded', () => {
  carregarDados();
  updateDots();
});
