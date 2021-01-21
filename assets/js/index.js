$(function () { })


function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        header: {
            Authorization: localStorage.setItem('token')
        },
        success: function (res) {
            console.log(res);
        }


    })
}