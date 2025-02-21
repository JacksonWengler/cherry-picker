let Cherry: Sprite = null
let Player: Sprite = null
let Bad: Sprite = null
game.splash("Cherry Picker") 
tiles.setTilemap(tilemap`level`)

Player= sprites.create(assets.image`stickman`, SpriteKind.Player)

controller.moveSprite(Player, 150,150)
scene.cameraFollowSprite(Player)


game.onUpdateInterval(500, function () {
    Cherry = sprites.create(assets.image`cherrySprite`, SpriteKind.Food)
    Cherry.setPosition(randint(0,160),randint(0,120))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite, otherSprite){
    info.changeScoreBy(1)
    otherSprite.destroy()
})

game.onUpdateInterval(1000, function () {
    Bad = sprites.create(assets.image`badEnemy`, SpriteKind.Enemy)
    Bad.setPosition(randint(0, 160), randint(0, 120))
    Bad.setVelocity(randint(10,100),randint(10,100))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(true)
})