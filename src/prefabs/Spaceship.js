class Spaceship extends Phaser.GameObjects.Sprite {
   constructor(scene, x, y, texture, frame, pointValue) {
      super(scene,x,y,texture,frame);

      //add object ot existing scene
      scene.add.existing(this);
      this.points = pointValue;
      this.moveSpeed = 3;
   }

   update() {
      //left/Right
      this.x -= this.moveSpeed;
      //wrap around from left to right
      if(this.x <= 0 - this.width) {
         this.x = game.config.width;
      }
   }

   reset() {
      this.x = game.config.width;
   }
}