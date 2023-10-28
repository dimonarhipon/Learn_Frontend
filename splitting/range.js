var priceValue = document.querySelector('.price__value');
var distribution = document.querySelector('.distribution');
var element1 = distribution.querySelector('.distribution__element--1');
var element2 = distribution.querySelector('.distribution__element--2');

var bill = element1.querySelector('.distribution__bill');
var tip2 = element2.querySelector('.distribution__tip--2');

var range1 = element1.querySelector('.range');
var range2 = element2.querySelector('.range');

var rangeInput1 = element1.querySelector('.range__input');
var rangeInput2 = element2.querySelector('.range__input');


rangeInput1.max = priceValue.textContent;
rangeInput1.value = priceValue.textContent / 2;
bill.textContent = priceValue.textContent / 2;

rangeInput2.max = priceValue.textContent;
rangeInput2.value = priceValue.textContent / 2;
tip2.textContent = priceValue.textContent / 2;


var calcFill = function (range, rangeInput) {
  var percent = (rangeInput.value / rangeInput.max) * 100;
  var rangeFill = range.querySelector('.range__fill');
  var gradient = 
  'linear-gradient(to right, ' + 
  'rgba(88, 88, 146, 0.50) 0%, ' +
  'rgba(88, 88, 146, 0.50) ' + percent + '%, ' +  
  '#F2F1FC ' + percent + '%, ' +
  '#F2F1FC 100%)';

  rangeFill.style.backgroundImage = gradient; 
}

var changeRange = function (rangeInput, range, element) {
  rangeInput.addEventListener('input', function () {
    element.textContent = rangeInput.value;
    calcFill(range, rangeInput);
  });

  calcFill(range, rangeInput);
}

changeRange(rangeInput1, range1, bill);
changeRange(rangeInput2, range2, tip2);


// Общая сумма
let total = parseInt(priceValue.textContent); 

rangeInput1.addEventListener('input', syncRanges);
rangeInput2.addEventListener('input', syncRanges);


function syncRanges() {
  var value1 = parseInt(rangeInput1.value);
  var value2 = parseInt(rangeInput2.value);

  // Вычисляем новые значения
  var newValue1 = total - value2;
  var newValue2 = total - value1; 

  // Присваиваем значения 
  rangeInput1.value = newValue1;
  rangeInput2.value = newValue2;

  bill.textContent = rangeInput1.value;
  tip2.textContent = rangeInput2.value;

  calcFill(range1, rangeInput1);
  calcFill(range2, rangeInput2);
}

syncRanges()
