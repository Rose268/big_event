$(function () {
    // alert(11);
    getUserInfo();

    $('#btnLogout').on('click',function () {
        layer.confirm(
            '确定退出登录？',
            { icon: 3, title: '提示' },
            function (index) {
                localStorage.removeItem('token');
                location.href = '/login.html';
                layer.close(index);
            }
        )
    })
})
function getUserInfo() {
    $.ajax({
        method: 'GET',
        url: '/my/userinfo',
        headers: {
            Authorization: localStorage.getItem('token'),
        },
        success(res) {
            console.log(res);

            if (res.status !==0) {
                layui.layer.msg(res.message);
                return;
            }

            renderAvatar();
        },

        // 不论成功或者失败，最终都会调用complete回调函数
        error(err) { },
        complete:function (res) {
            if (res.responseJSON.status === 1 &&
                res.responseJSON.message==='身份认证失败') {
                l
                
            }
        }
    })
}

function renderAvatar(user) {
    const name = user.nickname || user.name;
    console.log(name);

    $('#welcome').html(`欢迎${name}`);

    if (user.user_pic) {
        // 图片头像
        $('.layui-nav-img').attr('src', user.user_pic).show();
        $('.text-avatar').hide();
    } else {
        // 文字头像
        const first = name[0].toUpperCase();
        $('.text-avatar').html(first).show();
        $('.layui-nav-img').hide();
    }
}