# 🌿 Calculadora de Diluição de Óleos Essenciais

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/status-online-brightgreen?style=flat)

Uma calculadora simples e acolhedora que mostra **quantas gotas de óleo essencial** usar em cada frasco, de acordo com **quem vai usar** e **para quê**. Criada para tornar a diluição mais segura e prática no dia a dia das famílias.

### 🔗 [Acesse a calculadora](https://deborahmam.github.io/calculadora-diluicao/)

---

## ✨ Funcionalidades

- Cálculo automático da quantidade de gotas para frascos de **10, 15, 20, 30, 50 e 100 mL**
- Resultado em faixa (mínimo e máximo de gotas), ou em um valor único quando a diluição é fixa
- Regras específicas por faixa etária: bebês, crianças, adolescentes, adultos, idosos, grávidas e pessoas com imunidade comprometida
- Indicação de uso puro para situações pontuais, como arranhões, queimaduras e picadas de insetos
- Layout responsivo, pensado para funcionar bem no celular
- Seções informativas sobre óleos essenciais, segurança e contato

---

## 🧮 Como funciona o cálculo

A calculadora usa como base a referência de que **1 mL corresponde a aproximadamente 20 gotas**.

```
gotas = volume do frasco (mL) × 20 × porcentagem ÷ 100
```

O resultado é **arredondado para cima**, e o frasco é completado com óleo carreador (como o óleo de coco fracionado).

**Exemplo:** frasco de 30 mL com diluição de 10% a 20% → **60 a 120 gotas**.

### Ordem de decisão

1. **A idade tem prioridade.** Se a faixa etária tiver uma porcentagem definida, ela é usada, independentemente da indicação de uso.
2. Para **adolescentes e adultos**, a porcentagem vem da **indicação de uso**.
3. Nos casos de **uso puro**, a calculadora orienta a aplicação direta, sem cálculo de gotas.

### Porcentagens por faixa etária

| Faixa etária | Diluição |
|---|---|
| Bebês até 12 meses | 1% |
| Crianças de 1 a 12 anos | 2% a 4% |
| Idosos | 2% a 4% |
| Grávidas | 2% a 4% |
| Imunidade comprometida | 2% a 4% |
| Adolescentes e adultos | conforme a indicação de uso |

### Porcentagens por indicação de uso (adolescentes e adultos)

| Indicação de uso | Diluição |
|---|---|
| Cosméticos | 1% a 2% |
| Peles sensíveis | 2% a 4% |
| Massagem e relaxamento | 2% a 5% |
| Uso diário | 5% a 10% |
| Uso pontual e dores crônicas | 10% a 20% |
| Arranhões, queimaduras e picadas de insetos | uso puro |

---

## 🛠️ Tecnologias

- **HTML5** semântico
- **CSS3** puro, com layout responsivo
- **JavaScript** puro (sem bibliotecas ou frameworks)
- **GitHub Pages** para publicação

---

## 📁 Estrutura do projeto

```
calculadora-diluicao/
├── index.html
├── style.css
├── script.js
├── Assets/
└── README.md
```

---

## 📚 O que aprendi

Este foi o projeto em que dei meus primeiros passos com JavaScript. Ao longo do desenvolvimento, pratiquei:

- Organizar regras de negócio em **objetos** (tabelas de idade e de uso)
- Selecionar elementos da página com `querySelector`
- Ouvir o envio do formulário com `addEventListener` e evitar o recarregamento com `preventDefault`
- Ler as escolhas do usuário com `.value` e converter texto em número com `Number()`
- Construir a lógica de decisão com `if` / `else`, incluindo condições aninhadas
- Fazer cálculos e arredondamentos com `Math.ceil()`
- Exibir o resultado na tela com `textContent`
- Trabalhar com **branches no Git**, desenvolvendo o JavaScript separado da versão publicada

Além do código, aprendi muito transformando uma tabela de diluição em regras claras e sem contradições, o que exigiu revisar cada caso antes de programar.

---

## ⚠️ Aviso

Esta calculadora tem caráter **informativo e educativo** e não substitui a orientação de um profissional de saúde. Em casos de bebês, gestantes, pessoas com condições de saúde ou uso contínuo, procure sempre orientação especializada. Siga também as instruções do rótulo de cada óleo essencial.

---

## 👩‍💻 Autora

Desenvolvido por **Deborah Mattos**, consultora de bem-estar dōTERRA e estudante de programação.

[Instagram](https://www.instagram.com/deborahmattosazev/) · [WhatsApp](https://wa.me/5521981168581)