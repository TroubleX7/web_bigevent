$.ajaxPrefilter(function (options) {
  console.log(options.url);
  options.url = 'http://ajax.frontend.itheima.net' + options.url;
  if (options.url.indexOf('/my/') !== -1) {
    options.headers = {
      AuthorRazition: localStorage.setItem('token') || ''
    }
    options.complete = function (res) {

      if (res.responseJSON.status === 1 && res.responseJSON.message === '身份认证失败') {
        // 满足以上条件 则 强制清空token
        localStorage.removeItem('token')
        // 强制跳转到登录界面
        location.href = '/login.html'
      }
    }
  }
})
