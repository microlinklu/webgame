/**
 * Created by luwen on 2017/5/9.
 */
function Sprite(img,spW,spH,sequence){
  this.sequence=sequence;//帧序列数组
    var x,y;
    var spX,spY;
    var frameIndex;//动画帧索引
  this.draw=function(ctx){//绘制精灵
      if(spW==undefined){
          ctx.drawImage(img,x,y);
      }else{
          spX=sequence[frameIndex]%getClo()*spW;//使用帧序列计算精灵图片位置
          spY=sequence[frameIndex]/getClo()*spH;
          ctx.drawImage(img,spX,spY,spW,spH,x,y,spW,spH);
      }
  }
    this.next=function(){//计算动画帧，当达到最后一帧时回到第一帧继续播放
         frameIndex++;
        if(frameIndex>sequence.length)frameIndex=0;
    }
    function getRow(){//获取精灵帧的行数
        var row=img.height/spH;
        if(row<1)return;
        return row;
    }
    function getClo(){//获取精灵帧列数
        var col=img.width/spW;
        if(col<1)return;
        return col;
    }
    this.move=function(dx,dy){//精灵自主运动函数，参数为步距
        x+=dx;
        y+=dy;
    }
    this.setPosition=function(x1,y1){//将精灵放置到指定位置，参数为具体坐标
        x=x1;
        y=y1;
    }
    this.collidswith=function(obj){//碰撞

    }

}
var player=new Sprite(play,34,56,ss);
player.move(3,4);
player.next();
player.draw();