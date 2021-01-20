$(function () {
  $("#reg_").on("click", function () {
    $('.login-box').hide();
    $('.reg-box').show();
  })
  $("#login_").on("click", function () {
    $('.login-box').show();
    $('.reg-box').hide();
  })

})