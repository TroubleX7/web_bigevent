$(function () {
    // 调用 getUserInfo 获取用户基本信息
    getUserInfo();

    let layer = layui.layer

    $("#btnLogout").on('click', function () {
        // 提示用户是否需要退出
        layer.confirm('要退出？？', { icon: 1, title: '温馨提示' }, function (index) {

            // 退出时情况 token
            localStorage.removeItem('token')

            // 退出后 跳转到登录页面
            location.href = '/login.html'

            // 关闭 confirm 的询问框
            layer.close(index)
        })
    })
})


function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        // headers: {
        //     Authorization: localStorage.getItem('token')
        // },
        success: function (res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取失败');
            }
            renderAvatar(res.data);
        },

    })
}
// 渲染用户的头像
function renderAvatar(user) {
    let name = user.nickname || user.username
    $('#welcome').html('欢迎&nbsp;&nbsp' + name)
    if (user.user_pic !== null) {
        $('.layui-nav-img').attr('src', user.user_pic).show()
        $('.text-avatar').hide();
    } else {
        $('.layui-nav-img').hide()
        let first = name[0].toUpperCase()
        $('.text_avatar').html(first).show()
    }

}



