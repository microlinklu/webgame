/**
 * Created by luwen on 2017/5/8.
 */
//游戏入口脚本

   var ctx;
   var bt=[];
   var btimg=['img/btnew1.png','img/btnew2.png','img/btexit1.png','img/btexit2.png'];
   $(function(){
    var can=document.getElementById('MyGame');
       ctx=can.getContext('2d');
       drawCoverImage();
       for(var i=0;i<2;i++) {
           bt[i] = new Button(btimg[i*2],btimg[i*2+1], 0, i*40);
           bt[i].draw();
          }
       }
   )
  onmousedown=function(e) {
      var x = e.clientX;
      var y = e.clientY;
      for (var i = 0; i < 2; i++) {
          var w = bt[i].getWidth();
          var h = bt[i].getHeight();
          if (x > bt[i].x && x < bt[i].x + w && y > bt[i].y && y < bt[i].y + h) {
              bt[i].drawAct();
          } else {
              bt[i].drawDef();
          }
      }
  }

   onmouseout=function(){
       for(var i=0;i<2;i++)
       bt[i].drawDef();
   }
   onmouseup=function(){
       for(var i=0;i<2;i++)
       bt[i].drawDef();
   }
function Rect(x,y,w,h,x1,y1){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
    this.containt=function(){
        if(x1>x&&x1<x+w&&y1>y&&y1<y+h)return true;
        else return false;
    }
}
function Button(url1,url2,x,y){
    this.url1=url1;
    this.url2=url2;
    this.x=x;
    this.y=y;
    var def=new Image();//未被操作时的显示图像
    var click=new Image();//点击时显示的图像
      def.src=this.url1;
    click.src=this.url2;

    this.drawDef=function(){
        ctx.drawImage(def,x,y)
    }
    this.drawAct=function(){
        ctx.drawImage(click,x,y)
    }
    this.getWidth=function(){
        var w=0;
        def.onload=function(){
            w= def.width;
        }();
        return w;
    }
    this.getHeight=function(){
        var h=0;
        def.onload=function(){
             h= def.height;
        }();
      return h;
    }
    this.draw=function(){
        def.onload=function(){
            ctx.drawImage(def,0,0)
        }
    }


}
//new Button (canvas,button[0],0)
function menu(canvas){
   var newgame=new Rect();

    if(newgame.containt()){
        //进入游戏界面
    }
}
function draw(img,x,y,w,h){
   // canvas.drawImage(cover,0,0,cover.width,cover.height,0,0,800,600);
    if(x==undefined)x=0;
    if(y==undefined)y=0;
    if(w==undefined)w=img.width;
    if(h==undefined)h=img.height;
    ctx.drawImage(img,x,y,w,h);
}

var enemy=[];
var button=[];
var player;
function drawCoverImage(){
  var  img=new Image();
     img.src="img/cover.jpg";
    img.onload=function(){
        draw(img);
    }
}



