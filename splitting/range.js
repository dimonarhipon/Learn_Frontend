function splittingStep() {
  var amount = 6000.11;
  var tips = 600;
  var total = amount + tips;

  var remainder = total % 1;
  total = total - remainder;

  var priceValue = document.querySelector('.payment__amount');
  priceValue.textContent = total;

  var splitContainer = document.querySelector('.split');
  var buttonBillTips = splitContainer.querySelector('.split__button--bill-tips');
  var buttonSplit2 = splitContainer.querySelector('.split__button--2');
  var buttonSplit3 = splitContainer.querySelector('.split__button--3');
  var buttonSplit4 = splitContainer.querySelector('.split__button--4');

  var distribution = document.querySelector('.distribution');
  var element1 = distribution.querySelector('.distribution__element--1');
  var element2 = distribution.querySelector('.distribution__element--2');
  var element3 = distribution.querySelector('.distribution__element--3');
  var element4 = distribution.querySelector('.distribution__element--4');

  var bill = element1.querySelector('.distribution__bill');
  var tips2 = element2.querySelector('.distribution__tips--2');
  var tips3 = element3.querySelector('.distribution__tips--3');
  var tips4 = element4.querySelector('.distribution__tips--4');

  var range1 = element1.querySelector('.range');
  var range2 = element2.querySelector('.range');
  var range3 = element3.querySelector('.range');
  var range4 = element4.querySelector('.range');

  var LEFT_OFFSET = 180; // фиксированный отступ слева

  function SettingsRange(range) {
    var pointer = range.querySelector('.range__pointer');

    this.range = range;
    this.width = range.clientWidth;
    this.pointer = pointer;
    this.pointerWidth = pointer.clientWidth;
    this.value;
    this.max = total;
    this.min = 0;
    this.step;

    // Расчёт заливки
    this.calcFill = function () {
      var percent = (this.value / this.max) * 100;
      var rangeFill = range.querySelector('.range__fill');
      var gradient =
        'linear-gradient(to right, ' +
        'rgba(88, 88, 146, 0.50) 0%, ' +
        'rgba(88, 88, 146, 0.50) ' +
        percent +
        '%, ' +
        '#F2F1FC ' +
        percent +
        '%, ' +
        '#F2F1FC 100%)';

      rangeFill.style.backgroundImage = gradient;
    };

    // Положение ползунка
    this.pointerPosition = function () {
      var ratio = normalizeAmount((this.value - this.min) / (this.max - this.min));
      var newX = ratio * (this.width - this.pointerWidth);

      return (this.pointer.style.transform = 'translate(' + newX + 'px,' + '-50%)');
    };

    // Движение ползунка
    this.pointerMove = function (event, tips, noMore) {
      event.preventDefault();

      // не более верхней границы
      if (this.value > noMore) return;

      var newX = event.targetTouches[0].pageX - LEFT_OFFSET - this.pointerWidth / 2;
      newX = Number(newX.toFixed());

      // ограничения newX
      if (newX < 0) newX = 0;
      if (newX > this.width - this.pointerWidth) {
        newX = this.width - this.pointerWidth;
      }

      var newValue =
        (newX / (this.width - this.pointerWidth)) * (this.max - this.min) + this.min;
      newValue = Number(newValue.toFixed());

      // присваиваем верхнюю границу
      if (newValue > noMore) newValue = noMore

      tips.textContent = formatAmount(Number(normalizeAmount(newValue)));
      this.value = normalizeAmount(newValue);

      // стили
      this.pointer.style.transform = 'translate(' + newX + 'px,' + '-50%)';
      this.calcFill();
    }
  }


  SettingsRange1 = new SettingsRange(range1);
  SettingsRange2 = new SettingsRange(range2);
  SettingsRange3 = new SettingsRange(range3);
  SettingsRange4 = new SettingsRange(range4);

  var splittingStepBackBtn = document.querySelector('#splitting-step-back-btn');

	function formatAmount(amount) {
		var formattedAmount = amount.toLocaleString('ru', {
			style: 'currency',
			minimumFractionDigits: 0,
			maximumFractionDigits: 2,
			currency: 'rub',
		});

		return formattedAmount;
	}

  var normalizeAmount = function (number) {
    return Number(number.toFixed(3).slice(0, -1));
  };

  var syncRangesSplit2Handler = function (event) {
    syncRangesSplit2(SettingsRange1, SettingsRange2, event);
  };

  var syncRangesSplit3Handler = function (event) {
    syncRangesSplit3(SettingsRange1, SettingsRange2, SettingsRange3, event);
  };

  var syncRangesSplit4Handler = function (event) {
    syncRangesSplit4(SettingsRange1, SettingsRange2, SettingsRange3, SettingsRange4, event);
  };

  // Синхронизация двух range
  function syncRangesSplit2(range1, range2, event) {
    if (event.currentTarget === SettingsRange1.range) {
      // перемещаем pointer range1
      range1.pointerMove(event, bill);

      // вычисляем новые значения
      range2.value = total - range1.value;
      range1.value = total - range2.value;

      // перемещаем pointer range2
      range2.pointerPosition();
      range2.calcFill();
    }

    if (event.currentTarget === SettingsRange2.range) {
      // перемещаем pointer range2
      range2.pointerMove(event, tips2)

      // вычисляем новые значения
      range1.value = total - range2.value;
      range2.value = total - range1.value;

      // перемещаем pointer range1
      range1.pointerPosition();
      range1.calcFill();
    }

    bill.textContent = formatAmount(Number(range1.value));
    tips2.textContent = formatAmount(Number(range2.value));
    priceValue.textContent = formatAmount(Number(SettingsRange1.value));
  }

  // Синхронизация трёх range
  function syncRangesSplit3(range1, range2, range3, event) {
    // noMore - не более
    var noMore = normalizeAmount(total - range1.value);

    if (event.currentTarget === SettingsRange1.range) {
      // перемещаем pointer range1
      range1.pointerMove(event, bill);

      // вычисляем новые значения
      range2.value = (total - range1.value) / 2;
      range3.value = (total - range1.value) / 2;

      // перемещаем pointer range2, range3
      range2.pointerPosition();
      range2.calcFill();
      range3.pointerPosition();
      range3.calcFill();
    }

    if (event.currentTarget === SettingsRange2.range) {
      if (range2.value >= 0 && range2.value <= noMore) {
        // перемещаем pointer range2
        range2.pointerMove(event, tips2, noMore);

        // вычисляем новые значения
        range3.value = (total - range1.value) - range2.value;
        range2.value = (total - range1.value) - range3.value;

        // перемещаем pointer range2
        range3.pointerPosition();
        range3.calcFill();
      }
    }

    if (event.currentTarget === SettingsRange3.range) {
      if (range3.value >= 0 && range3.value <= noMore) {
        // перемещаем pointer range3
        range3.pointerMove(event, tips3, noMore);

        // вычисляем новые значения
        range2.value = (total - range1.value) - range3.value;
        range3.value = (total - range1.value) - range2.value;

        // перемещаем pointer range2
        range2.pointerPosition();
        range2.calcFill();
      }
    }
    bill.textContent = formatAmount(Number(range1.value));
    tips2.textContent = formatAmount(Number(range2.value));
    tips3.textContent = formatAmount(Number(range3.value));
    priceValue.textContent = formatAmount(Number(SettingsRange1.value));

    range1.calcFill();
    range2.calcFill();
    range3.calcFill();

    range1.pointerPosition();
    range2.pointerPosition();
    range3.pointerPosition();
  }

  function syncRangesSplit4(range1, range2, range3, range4, event) {
    console.log(event.currentTarget)
    if (event.currentTarget === SettingsRange1.range) {
      // перемещаем pointer range1
      range1.pointerMove(event, bill);

      // вычисляем новые значения
      range2.value = (total - range1.value) / 3;
      range3.value = (total - range1.value) / 3;
      range4.value = (total - range1.value) / 3;

      // перемещаем pointer range2, range3, range4
      range2.pointerPosition();
      range2.calcFill();
      range3.pointerPosition();
      range3.calcFill();
      range4.pointerPosition();
      range4.calcFill();
    }

    if (event.currentTarget === SettingsRange2.range) {
      // noMore - не более
      var noMore = normalizeAmount(total - range1.value);

      if (range2.value >= 0 && range2.value <= noMore) {
        // перемещаем pointer range2
        range2.pointerMove(event, tips2, noMore);

        // вычисляем новые значения
        range3.value = (total - range1.value - range2.value) / 2;
        range4.value = (total - range1.value - range2.value) / 2;

        // перемещаем pointer range3, range4
        range3.pointerPosition();
        range3.calcFill();
        range4.pointerPosition();
        range4.calcFill();
      }
    }
    if (event.currentTarget === SettingsRange3.range) {
      var noMore = normalizeAmount(total - range1.value - range2.value);

      if (range3.value >= 0 && range3.value <= noMore) {
        // перемещаем pointer range3
        range3.pointerMove(event, tips3, noMore);

        // вычисляем новые значения
        range4.value = (total - range1.value - range2.value) - range3.value;
        range3.value = (total - range1.value - range2.value) - range4.value;

        // перемещаем pointer range4
        range4.pointerPosition();
        range4.calcFill();
      }
    }

    if (event.currentTarget === SettingsRange4.range) {
      var noMore = normalizeAmount(total - range1.value - range2.value);
      console.log('SettingsRange4.range', 'noMore', noMore);
      if (range4.value >= 0 && range4.value <= noMore) {
        // перемещаем pointer range4
        range4.pointerMove(event, tips4, noMore);

        // вычисляем новые значения
        range3.value = (total - range1.value - range2.value) - range4.value;
        range4.value = (total - range1.value - range2.value) - range3.value;

        // перемещаем pointer range3
        range3.pointerPosition();
        range3.calcFill();
      }
    }

    bill.textContent = formatAmount(Number(range1.value));
    tips2.textContent = formatAmount(Number(range2.value));
    tips3.textContent = formatAmount(Number(range3.value));
    tips4.textContent = formatAmount(Number(range4.value));
    priceValue.textContent = formatAmount(Number(SettingsRange1.value));

    range1.calcFill();
    range2.calcFill();
    range3.calcFill();
    range4.calcFill();

    range1.pointerPosition();
    range2.pointerPosition();
    range3.pointerPosition();
    range4.pointerPosition();
  }

  function checkRanges () {
    if (typeof SettingsRange1 !== 'undefined') {
      deleteRangeListeners(SettingsRange1);
    }
    if (typeof SettingsRange2 !== 'undefined') {
      deleteRangeListeners(SettingsRange2);
    }
    if (typeof SettingsRange3 !== 'undefined') {
      deleteRangeListeners(SettingsRange3);
    }
    if (typeof SettingsRange4 !== 'undefined') {
      deleteRangeListeners(SettingsRange4);
    }
  }

  // Удаление обработчиков у SettingsRange
  function deleteRangeListeners (range) {
    if (range) {
      range.pointer.removeEventListener('touchmove', syncRangesSplit2Handler);
      range.pointer.removeEventListener('touchstart', syncRangesSplit2Handler);
      range.pointer.removeEventListener('touchmove', syncRangesSplit3Handler);
      range.pointer.removeEventListener('touchstart', syncRangesSplit3Handler);
      range.pointer.removeEventListener('touchmove', syncRangesSplit4Handler);
      range.pointer.removeEventListener('touchstart', syncRangesSplit4Handler);

      range.range.removeEventListener('touchstart', syncRangesSplit2Handler);
      range.range.removeEventListener('touchmove', syncRangesSplit2Handler);
      range.range.removeEventListener('touchstart', syncRangesSplit3Handler);
      range.range.removeEventListener('touchmove', syncRangesSplit3Handler);
      range.range.removeEventListener('touchstart', syncRangesSplit4Handler);
      range.range.removeEventListener('touchmove', syncRangesSplit4Handler);
    }
  }

  function initRange(SettingsRange, value, syncRanges) {
    SettingsRange.value = value;
    SettingsRange.calcFill();
    SettingsRange.pointerPosition();

    SettingsRange.pointer.addEventListener('touchmove', syncRanges);
    SettingsRange.pointer.addEventListener('touchstart', syncRanges);
    SettingsRange.range.addEventListener('touchstart', syncRanges);
    SettingsRange.range.addEventListener('touchmove', syncRanges);

    return SettingsRange;
  }

  // Функции инициализации
  function initBillTip() {
    element3.classList.add('hidden');
    element4.classList.add('hidden');

    SettingsRange1 = initRange(SettingsRange1, amount, syncRangesSplit2Handler);
    SettingsRange2 = initRange(SettingsRange2, tips, syncRangesSplit2Handler);

    bill.textContent = formatAmount(Number(amount));
    tips2.textContent = formatAmount(Number(tips));
    priceValue.textContent = formatAmount(Number(SettingsRange1.value));
  }

  function initSplit2() {
    element3.classList.add('hidden');
    element4.classList.add('hidden');

    var initValue = total / 2;

    SettingsRange1 = initRange(SettingsRange1, initValue + remainder, syncRangesSplit2Handler);
    SettingsRange2 = initRange(SettingsRange2, initValue, syncRangesSplit2Handler);

    bill.textContent = formatAmount(Number(initValue + remainder));
    tips2.textContent = formatAmount(Number(initValue));
    priceValue.textContent = formatAmount(Number(SettingsRange1.value));
  }

  function initSplit3() {
    element3.classList.remove('hidden');
    element4.classList.add('hidden');

    var initValue = total / 3;

    SettingsRange1 = initRange(SettingsRange1, initValue + remainder, syncRangesSplit3Handler);
    SettingsRange2 = initRange(SettingsRange2, initValue, syncRangesSplit3Handler);
    SettingsRange3 = initRange(SettingsRange3, initValue, syncRangesSplit3Handler);

    priceValue.textContent = formatAmount(Number(SettingsRange1.value));
    bill.textContent = formatAmount(Number(initValue + remainder));
    tips2.textContent = formatAmount(Number(initValue));
    tips3.textContent = formatAmount(Number(initValue));
  }

  function initSplit4() {
    element3.classList.remove('hidden');
    element4.classList.remove('hidden');

    var initValue = total / 4;

    SettingsRange1 = initRange(SettingsRange1, initValue + remainder, syncRangesSplit4Handler);
    SettingsRange2 = initRange(SettingsRange2, initValue, syncRangesSplit4Handler);
    SettingsRange3 = initRange(SettingsRange3, initValue, syncRangesSplit4Handler);
    SettingsRange4 = initRange(SettingsRange4, initValue, syncRangesSplit4Handler);

    priceValue.textContent = formatAmount(Number(SettingsRange1.value));
    bill.textContent = formatAmount(Number(initValue + remainder));
    tips2.textContent = formatAmount(Number(initValue));
    tips3.textContent = formatAmount(Number(initValue));
    tips4.textContent = formatAmount(Number(initValue));
  }

  // Переключение кнопок делений счёта
  var splitButtons = document.querySelectorAll('.split__button');

  splitButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      splitButtons.forEach(function (btn) {
        btn.classList.remove('choose__button--active');
      });
      this.classList.add('choose__button--active');

      if (buttonBillTips.classList.contains('choose__button--active')) {
        checkRanges();
        initBillTip();
      }
      if (buttonSplit2.classList.contains('choose__button--active')) {
        checkRanges();
        initSplit2();
      }
      if (buttonSplit3.classList.contains('choose__button--active')) {
        checkRanges();
        initSplit3();
      }
      if (buttonSplit4.classList.contains('choose__button--active')) {
        checkRanges();
        initSplit4();
      }
    });

    if (buttonBillTips.classList.contains('choose__button--active')) {
      checkRanges();
      initBillTip();
    }
    if (buttonSplit2.classList.contains('choose__button--active')) {
      initSplit2();
    }
    if (buttonSplit3.classList.contains('choose__button--active')) {
      checkRanges();
      initSplit3();
    }
    if (buttonSplit4.classList.contains('choose__button--active')) {
      checkRanges();
      initSplit4();
    }
  });
}
document.addEventListener('DOMContentLoaded', splittingStep);
