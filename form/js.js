$(document).ready(function(){

		//用户名正则表达式
		var ret_txt=/^[A-Za-z0-9]{3}$/;
        //密码框正则表达式
        var ret_password=/^[A-Za-z0-9]{10}$/;

		//用户名获取焦点
       $('.txt').focus(function(){
       	$(this).siblings("p").show(500);
       })
       //用户名失去焦点
       $('.txt').blur(function(){
       	 if(this.value==0){
           $(this).siblings('p').html('!不能为空');
       	}else 
       	{
       		$(this).siblings("p").html('请输入3位数的用户名，以数字，字母组成');
       		var str=$(".txt").val();
       		if(ret_txt.test(str)){
            $('.txt').siblings("p").hide();
            }
            else
       	    {
            $(this).siblings("p").show();
            }
       	}
       	 })
       	
        //密码框获取焦点
       $('.password').focus(function(){
       	$(this).siblings("p").show();
       })
       	 //密码框失去焦点
       	$('.password').blur(function(){
       		var password_txt=$(this).val();
       		if(ret_password.test(password_txt))
       			{
       				 $(this).siblings('p').hide();
       			}else
       		   {
                     $(this).siblings("p").show();
       		    }
        
       	})


       //密码框2框获取焦点
       $('.password2').focus(function(){
       	$(this).siblings("p").show();
       })
       //密码框2失去焦点
       	$('.password2').blur(function(){
       		if($(this).val()==$('.password').val())
       		{
       			$(this).siblings('p').hide();
       		}
            
       	})

	})