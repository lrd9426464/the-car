$(function(){
   $("#uname>input").focus(function(){
      var $this=$(this);
      $this.next().addClass("show");
   })
   $("#uname>input").blur(function(){
      var $this=$(this);
      //正则
      var reg=/^[0-9a-zA-Z]{3,7}$/;
      var bool=reg.test($this.val());
      $this.next().removeClass();
      if(bool!==true){
         $this.next().addClass("error");
         // $this.next().html("用户名由3~7位的数字、字母组成")
      }
   })
   $("#upwd>input").focus(function(){
      var $this=$(this);
      $this.next().attr("class","show");
   })
   $("#upwd>input").blur(function(){
      var $this=$(this);
      //正则
      var reg=/^(\w|["*","-","+",".","~"]){6,12}$/;
      var bool=reg.test($this.val());
      $this.next().removeClass();
      if(bool!==true){
         $this.next().addClass("error");
         // $this.next().html("密码由6~12位的数字、字母以及符号组成")
      }
   })
   $("#msg>button").click(function(){
      var bool=$("#msg input").next().is(".error");
      // console.log($("#msg input"));
      if($("#uname input").val()==""||$("#upwd input").val()==""){
         alert("账号或密码为空");
         return;
      }
      if(bool==true){
         return;
      }
      alert("登陆成功")
   })
})