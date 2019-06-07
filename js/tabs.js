
  let $paragrapgh1 = $('.paragraph1');
  let $paragrapgh2 = $('.paragraph2');
  let $paragrapgh3 = $('.paragraph3');
  let $paragrapgh4 = $('.paragraph4');

  let $btn1 = $('button:eq(0)');
  let $btn2 = $('button:eq(1)');
  let $btn3 = $('button:eq(2)');
  let $btn4 = $('button:eq(3)');

  $paragrapgh2.hide();
  $paragrapgh3.hide();
  $paragrapgh4.hide();

  $btn1.on('click', function () {
    $paragrapgh1.show();
    $paragrapgh2.hide();
    $paragrapgh3.hide();
    $paragrapgh4.hide();

    $btn1.addClass('borderBottomNull');
    $btn2.removeClass('borderBottomNull');
    $btn3.removeClass('borderBottomNull');
    $btn4.removeClass('borderBottomNull');
  });

  $btn2.on('click', function () {
    $paragrapgh2.show();
    $paragrapgh1.hide();
    $paragrapgh3.hide();
    $paragrapgh4.hide();

    $btn2.addClass('borderBottomNull');
    $btn1.removeClass('borderBottomNull');
    $btn3.removeClass('borderBottomNull');
    $btn4.removeClass('borderBottomNull');
  });

  $btn3.on('click', function () {
    $paragrapgh3.show();
    $paragrapgh2.hide();
    $paragrapgh1.hide();
    $paragrapgh4.hide();

    $btn3.addClass('borderBottomNull');
    $btn2.removeClass('borderBottomNull');
    $btn1.removeClass('borderBottomNull');
    $btn4.removeClass('borderBottomNull');
  })

  $btn4.on('click', function () {
    $paragrapgh4.show();
    $paragrapgh2.hide();
    $paragrapgh3.hide();
    $paragrapgh1.hide();

    $btn4.addClass('borderBottomNull');
    $btn2.removeClass('borderBottomNull');
    $btn3.removeClass('borderBottomNull');
    $btn1.removeClass('borderBottomNull');
  })

