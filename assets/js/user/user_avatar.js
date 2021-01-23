$(function () {
    let $image = $('#image')
    const options = {
        aspectRatio: 1,
        preview: '.img-preview'
    }
    $image.cropper(options)

    $("#btnChooseImage").on('click', function () {
        $('#file').click()
    })

    $("#file").on('change', function (e) {
        let filelist = e.target.files
        if (filelist.length === 0) {
            return layer.msg('请上传照片')
        }
        let file = e.target.files[0]
        let imgURL = URL.createObjectURL(file)
        $image.cropper('destroy').attr('src', imgURL).cropper(options)

    })
    $('#btnUpload').on('click', function () {
        let dataURL = $image.cropper('getCroppedCanvas', {
            width: 100,
            height: 100
        }).toDataURL('image/png')
        $.ajax({
            method: 'POST',
            url: '/my/update/avatar',
            data: {
                avatar: dataURL
            },
            success: function (res) {
                if (res.status !== 0) {
                    return lyaer.msg('更新头像失败')
                }
                layer.msg('更新头像成功')
                window.parent.getUserInfo()
            }


        })

    })





})