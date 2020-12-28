$(function () {
  // 点击“去注册账号”的链接
  $('#link_reg').on('click', function () {
    $('.login-box').hide();
    $('.reg-box').show();
  })

  // 点击“去登录”的链接
  $('#link_login').on('click', function () {
    $('.login-box').show();
    $('.reg-box').hide();
  })

  // 从layui 中获取 form 对象
  // var form =layui.form通过 form.verifty() 函数自定义校验规则
  // const form = layui.form;
  const form= layui.form;
  // const layer= layui.layer;
  form.verify({
    pwd: [/^[\S]{6,12}$/, '密码是必须6到12位字符'],
    // 校验两次密码是否一致
    repwd:function (value) {
      const pwd = $('.reg-box [name=password]').value();
      if (pwd!==value) {
        return '两次密码不一致';
      }
    }
  })

  // 监听注册表单的提交事件
  $('#form_reg').on('submit', function (e) {
    // 1.阻止默认的提交行为
    e.preventDefault();
    // 2.发起ajax的POST请求
    $.ajax({
      method: 'POST',
      url: 'http://ajax.frontend.itheima.net/api/reguser',
      data: {
        username: $('#form_reg [name=username]').val(),
        password: $('#form_reg [name=password]').val()
      },
      success: function (res) {
        return console.log(res);
        // if (res.status !== 0) {
        //   return layer.msg(res.message || '注册失败');
        // }
        // layer.msg(res.message || '注册成功，请登录');
        // $('#link_login').click();
      }
    });
  });

  // $('#form_login').on('submit', function (e) {
  //   // 1.阻止默认的提交行为
  //   e.preventDefault();
  //   // 2.发起ajax的POST请求
  //   $.ajax({
  //     method: 'POST',
  //     url: 'http://ajax.frontend.itheima.net/api/login',
  //     data:$(this).serialize(),
  //     success: function (res) {
  //       if (res.status !== 0) {
  //         layer.msg(res.message || '注册失败');
  //         return;
  //       }
  //       layer.msg(res.message || '登录成功');
  //       localStorage.setItem('token', res.token);
  //       location.href = '/index.html';
  //     },
  //   });
  // });

 

 































})
