class Game {
  constructor() {}
  //BP
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  //BP
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  // TA
  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];
    fules=new Group
 powercoin=new Group
 this.addSrprites(fules,4,fuleImage,0.02)
 this.addSrpites(powercoin,18,powerCoinImage,0.9)

  }

  //BP
  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }
  addSrprite(spriteGroup,NumberofSprites,spriteImage,scale){
    for(var i=0;i<NumberofSprites;i++){
      var x,y 
      x=ramdom (width/2+150,width/2-150)
      y=ramdom(-height*4.5,height-100)
      var sprite=createSprite(x,y)
      sprite.addImage("sprite",spriteImage)
      sprite.scale=scale
      spritGroup.add(sprite)}
  //SA
  play() {
    this.handleElements();

    Player.getPlayersInfo(); //added

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //index of the array
      var index = 0;
      for (var plr in allPlayers) {
        //use data form the database to display the cars in x and y direction
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index].position.x = x;
        cars[index].position.y = y;

        //add 1 to the index for every loop
        index = index + 1;

        if (index === player.index) {
          stroke(10);
          fill("red");
          ellipse(x, y, 60, 60);
        }
      }

      // handling keyboard events
      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }
 
      drawSprites();
       
        }
      }
      handlefule(index){
        cars[index-1].overlap(fules,function(collecter,collected){
          player.fule=185
          collected.remove()
        });
       
        }
        handlepowercoins(index){
          cars[index-1].overlap(powercoins,funtion(collecter,collected){
            player.score+=21
            player.update()
            collected.remove
          });
      }
    }
  }
}
