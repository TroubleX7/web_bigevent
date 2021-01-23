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
  let layer = layui.layer


  form.verify({

    // 效验密码的格式
    pwd: [/^[\S]{6,12}$/, "密码必须是6到12位，且不能有空格"],

    // 效验 两次密码 是否相同
    repwd: function (value) {
      let pwd = $(".reg-box [name=password]").val();
      if (pwd !== value) return "两次密码不一致";
    }
  })

  // 监听注册表单的提交事件
  // 'http://api-breakingnews-web.itheima.net/reguser'
  // 'http://api-breakingnews-web.itheima.net/api/login'

  $("#form_").on('submit', function (e) {
    e.preventDefault();
    let data = {
      username: $("#form_ [name=username]").val(),
      password: $("#form_ [name=password]").val()
    }
    $.post('/api/reguser', data, function (res) {
      if (res.status !== 0) {
        return layer.msg(res.message)
      }
      layer.msg('注册成功')
      $('#login_').click()
    })
  })

  $("#form__").submit(function (e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/login',
      data: $(this).serialize(),
      success: function (res) {
        if (res.status != 0) {
          return layer.msg('登录失败')
        }
        layer.msg('登录成功')
        localStorage.setItem('token', res.token)

        location.href = "/index.html"
      }
    })

  })

})