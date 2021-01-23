$(function () {
    let form = layui.form
    form.verify({
        pwd: [/^[\S]{6,12}$/, '密码必须是6到12位，且不能有空格'],
        samePwd: function (value) {
            if (value === $('[name=oldPwd]').val()) {
                return '新旧密码不可一致'
            }
        },
        rePwd: function (value) {
            if (value !== $('[name=newPwd]').val()) {
                return '两次密码不一致'
            }
        }
    })

    $('.layui-form').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/my/updatepwd',
            data: $(this).serialize(),
            success: function (res) {
                if (res.status !== 0) {
                    return layui.layer.msg('更新密码错误')
                }
                layui.layer.msg('更新密码成功')
                $('.layui-form')[0].reset()
            }

        })
    })



})