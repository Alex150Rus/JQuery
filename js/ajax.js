const $ajaxData = $('.ajaxData');
const $ajaxBtn = $('.ajaxGet'); 

$ajaxBtn.on('click', function(){
  $.ajax({
    url: 'json/user.json',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      for (let user of data) {
        let $user = $(`<p>${user.name}</p>`);
        $ajaxData.append($user)
      }
    $ajaxBtn.attr('disabled', 'disabled')
    },
    error: function(error) {
      console.log(error);
    }
  })
})