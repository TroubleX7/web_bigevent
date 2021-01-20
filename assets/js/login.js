$(function () {
  $("#reg_").on("click", function () {
    $('.login-box').hide();
    $('.reg-box').show();
  })
  $("#login_").on("click", function () {
    $('.login-box').show();
    $('.reg-box').hide();
  })

  let form = layui.form;

  form.verify({

    // 效验密码的格式
    pwd: [/^[\S]{6,12}$/, "密码必须是6到12位，且不能有空格"],

    // 效验 两次密码 是否相同
    repwd: function (value) {
      let pwd = $(".reg-box [name=password]").val();
      if (pwd != value) return alert("两次密码不一致");
    }
  })

  // 监听注册表单的提交事件
  // 'http://ajax.frontend.itheima.net/api/reguser'
  $(".reg-box").on('submit', function (e) {
    e.preventDefault();
    $.ajax({
      method: 'post',
      url: 'http://ajax.frontend.itheima.net/api/reguser',
      data: {
        username: $('#form_ [name=username]'),
        password: $('#form_ [name=password]')
      },
      success: function (res) {
        if (res.status != 0) {
          return layui.msg(res.message);
        }
        layui.msg('注册成功，请登录！')
      }

    })
  })

  // $(".reg-box").on('submit', function (e) {
  //   e.preventDefault();
  //   $.post('http://ajax.frontend.itheima.net/api/reguser',
  //     {
  //       username: $("#form_ [name=username]").val(),
  //       password: $("$form_ [name=password]").val()
  //     },
  //     function (res) { console.log(res) }
  //   )
  // })

})