document.addEventListener('DOMContentLoaded', function () {
  const yearElement = document.querySelector('.price-offer__item-year');
  const monthElement = document.querySelector('.price-offer__item-month');
  const buttonElement = document.querySelector('.price-offer__button');

  yearElement.addEventListener('click', function () {
    yearElement.classList.add('active');
    monthElement.classList.remove('active');
    updateButtonState();
  });

  monthElement.addEventListener('click', function () {
    monthElement.classList.add('active');
    yearElement.classList.remove('active');
    updateButtonState();
  });

  buttonElement.addEventListener('click', function () {
    const isSelected = yearElement.classList.contains('active') || monthElement.classList.contains('active');
    if (isSelected) {
      window.location.href = 'https://www.google.com';
    }
  });

  function updateButtonState() {
    const isYearActive = yearElement.classList.contains('active');
    const isMonthActive = monthElement.classList.contains('active');
    buttonElement.disabled = !isYearActive && !isMonthActive;
  }
});