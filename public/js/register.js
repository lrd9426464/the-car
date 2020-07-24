$(function(){
   $("#bod").on("blur","input",function(){
      var $this=$(this);
      if($this.attr("id")=="phone"){
         var reg=/^((\+86|0086)\s+)?1[3-9]\d{9}$/;
      }else if($this.attr("id")=="uname"){
         var reg=/^[0-9a-zA-Z]{3,7}$/;
      }else if($this.attr("id")=="upwd"){
         var reg=/^(\w|["*","-","+",".","~"]){6,12}$/;
      }else if($this.attr("id")=="_upwd"){
         if($this.val()==$("#upwd").val()&&$this.val()!==""){
            $this.next().attr("class","suc");
            return; 
         }else{
            $this.next().attr("class","err");
            return;
         }
      }else if($this.attr("id")=="email"){
         var reg=/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      }else if($this.attr("id")=="msg"){
         if($this.val()==""){
            return;
         }
         var reg=/^[0-9]{5,7}$/;
      }
      var bool=reg.test($this.val());
      if(bool!==true){
         $this.next().attr("class","err");
      }else{
         $this.next().attr("class","suc");
      }
   })
   $("#bod>button").click(function(){
      var bool=$("#bod input").next().is(".err");
      //遍历查询到的每个符合要求的input元素
      $(".must").each(function(i,elem){
         var value=$(elem).val();
         // console.log(value);
         if(value==""){
            //当遍历到某个input的value为空时，退出
            alert("请将必要信息填写完整");
            return false;
         }
      })
      // if(res.length>0){
      //    alert("请将必要信息填写完整");
      //    return;
      // }
      if(bool==true){
         return;
      }
      alert("登陆成功")
   })
})