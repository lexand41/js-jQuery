/* eslint-disable no-undef */
const modalBtn = $('.present__modal-order');
const modalClose = $('.modal-order__close');
const modalOrder = $('.modal-order');
const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');
const whatBuildingList = $('.what-building__list');

modalBtn.on('click', function() {
  modalOrder.show(500);
});

modalClose.on('click', function() {
  modalOrder.hide(500);
});

// body.click(function (e) {
//   console.log(e.target);
//   if (e.target !== modalBodyWrapper) modalOrder.hide(500);
// });

modalOrderInput.focus(function() {
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`)
});

modalOrderInput.blur(function() {
  modalOrderTitle.text('Заполните форму');
});

const modalOrderWrapper = $('.modal-order__wrapper');

// $('.modal-order__form').submit(function (e) {
//   e.preventDefault();
//   $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize(),
//     function (data, status) {
//       console.log(data);
//       console.log(status);
//     }
//   );
// });

// $('.modal-order__form').submit(function (e) {
//   e.preventDefault();
//   $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize())
//     .then(function(data) {
//       console.log(data);
//       return data;
//     })
//     .then(function(request) {
//       console.log(request);
//     })
//     .catch(function(err) {
//       console.log(err.status);
//     });
// });

$('.modal-order__form').submit(function (e) {
  e.preventDefault();
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    type: 'POST',
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text('Спасибо ваша заявка принята, номер зявки ' + data.id)
      $('.modal-order__form').slideUp(300);
    },
    error() {
      modalOrderTitle.text('Что то пошло не так, попробуйте позже!')
    }
  })
});

const navMenu = $('.navigation');
const navMenuClose = $('.navigation__close');

function openNavMenu() {
  navMenu.animate({
    left: 0,
  }, 500, function() {
    navMenuClose.animate({
      opacity: 1,
    }, 300, 'swing');
  });
};

function  closeNavMenu() {
  navMenuClose.animate({
    opacity: 0,
  }, 300, function() {
    navMenu.animate({
      left: -400,
    }, 500)
  });
};

$('.page').on('click', function({target}) {
  if (target.closest('.present__modal-order')) {
  } else if (target.closest('.header__burger')) {
    openNavMenu();
  } else if (target.closest('.navigation')) {
    return;
  } else closeNavMenu();
});

navMenuClose.on('click', closeNavMenu);
