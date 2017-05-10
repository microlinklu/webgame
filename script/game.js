/**
 * Created by luwen on 2017/5/8.
 */
var score;
function loadBack(){
    var mapY=0;
    var backgroundMap=new Image();
    backgroundMap.onload=function(){
        setInterval(backRoll,50);
    }
    backgroundMap.src="img/background.jpg";
    var mapArr=[backgroundMap,backgroundMap];
    var i= 0,j=1;
    var isend=false;

    function  backRoll(){
        addEnemy();
        addBullet();
      ctx.drawImage(mapArr[i],0,mapY+i*602,800,600);
      ctx.drawImage(mapArr[j],0,mapY+j*602,800,600);
        mapY-=4;
        if(mapY<-600) {
            mapY = 0;
            isend=true;

        }else{
            isend=false;
        }
        if(isend){
            i=1;
            j=0;
        }else{
            i=0;
            j=1;
        }
        drawEne();
        drawPlayer();
       drawBullet();
        collid();
    }

    //敌机精灵生成与绘制
    var eneArr=[];
    var spEnemy;
    var imgEnemy=new Image();
    imgEnemy.onload=function(){
        spEnemy=new Sprite(imgEnemy);
    }
    imgEnemy.src="img/en3.png";
    function addEnemy(){
        var y=-88;
        var x=Math.random()*700+27;
        var pos=[x,y];
        if(eneArr.length<10){
            eneArr.push(pos);
        }

    }

    function drawEne(){
        for(var i=0;i<eneArr.length;i++){
            var pos=eneArr[i];
            spEnemy.setPosition(pos[0],pos[1]);
             pos[1]+=4;
            if(spEnemy.getY()>690){
               eneArr.splice(i,1);

            }
            spEnemy.draw();
        }

    }
    //玩家精灵的生成与绘制
    var spPlayer;
    var imgPlayer=new Image();
    imgPlayer.onload=function(){
       spPlayer=new Sprite(imgPlayer) ;
    }
    imgPlayer.src="img/player.png"

    function drawPlayer(){
        var pos=[playX,playY];
        spPlayer.setPosition(pos[0],pos[1]);
        spPlayer.draw();

    }
    //增加子弹
    var spBullet;
    var imgBullet=new Image();
    imgBullet.onload=function(){
        spBullet=new Sprite(imgBullet);
    }
    imgBullet.src="img/bullet1.png";
    var arrBullet=[];
    function addBullet(){
        var pos=[playX+19,playY];
        if(arrBullet.length<30)
        arrBullet.push(pos);

    }
    function drawBullet(){

        for(var i=0;i<arrBullet.length;i++){
            var pos=arrBullet[i];
            spBullet.setPosition(pos[0],pos[1]);
            pos[1]-=10;
            if(pos[1]<-20)arrBullet.splice(i,1);
            spBullet.draw();
        }
    }
    //碰撞检测
    function collid(){
        for(var i=0;i<eneArr.length;i++){
            var enepos=eneArr[i];
            for(var j=0;j<arrBullet.length;j++){
                var bPos=arrBullet[j];
                if(!(bPos[0]>enepos[0]+94||bPos[0]+16<enepos[0]
                ||bPos[1]>enepos[1]+70||bPos[1]+43<enepos[1])){
                    eneArr.splice(i,1);
                    arrBullet.splice(j,1);
                    score+=100;
                }
            }
        }
    }
}

