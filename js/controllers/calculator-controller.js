import Calculator from "./../models/calculator.js";

function State() {
  this.calculator = new Calculator();
  this.number1 = document.querySelector("#number1");
  this.number2 = document.querySelector("#number2");
  this.resultBox = document.querySelector("#result-box");
  this.btnPlus = document.querySelector("#btn-plus");
  this.btnTimes = document.querySelector("#btn-times");
  this.btnClear = document.querySelector("#btn-clear");

  this.btnPlus.addEventListener("click", handleBtnPlusClick);
  this.btnTimes.addEventListener("click", handleBtnTimesClick);
  this.btnClear.addEventListener("click", handleBtnClearClick);
  this.number1.addEventListener("keyup", handleNumberKeyup);
  this.number1.addEventListener("change", handleNumberChange);
  this.number2.addEventListener("keyup", handleNumberKeyup);
  this.number2.addEventListener("change", handleNumberChange);
}

const state = new State();

export function init() {
  state.number1.value = 0;
  state.number2.value = 0;
  state.resultBox.innerHTML = 0;
}

function handleBtnPlusClick(event) {
  event.preventDefault();
  setResultBox(state.calculator.plus);
}

function handleBtnTimesClick(event) {
  event.preventDefault();
  setResultBox(state.calculator.times);
}

function handleBtnClearClick(event) {
  event.preventDefault();
  init();
  const elements = document.querySelectorAll(".input-error");
  elements.forEach((e) => e.classList.remove("input-error"));
}

function handleNumberKeyup(event) {
  event.target.value = event.target.value.replace(/[^0-9.]/g, "");
}

function handleNumberChange(event) {
  if (!event.target.value) {
    event.target.classList.add("input-error");
  } else if (event.target.classList.contains("input-error")) {
    event.target.classList.remove("input-error");
  }
}

function setResultBox(func) {
  if (document.querySelectorAll(".input-error").length > 0)
    state.resultBox.innerHTML = "Erro!!!";
  else
    state.resultBox.innerHTML = func(
      Number(parseFloat(state.number1.value)),
      Number(parseFloat(state.number2.value))
    );
}
