export default [
    // gmr
    {
        name: 'gmr.setup',
        property: 'gmr.setup()',
        returns: 'gmrInstance',
        desc: 'Used to create a gmrInstance within a div tag.',
        example: "gmr.setup()",
        props: [
            ['id', 'string', 'Use this id when loading a new component.']
        ]
    },
    // gmrInstance
    {
        name: 'gmrInstance.scene',
        property: 'gmrInstance.scene()',
        returns: 'gmrScene',
        desc: 'Holds all the sprites and handles rendering for one scene.',
        example: "gmrInstance.scene()",
        props: [
            ['id', 'string', 'Use this id when loading a new component.']
        ]
    },
    {
        name: 'gmrInstance.sprite',
        property: 'gmrInstance.sprite()',
        returns: 'gmrSprite',
        desc: 'Holds all the sprites and handles rendering for one scene.',
        example: "gmrInstance.sprite()",
        props: [
            ['id', 'string', 'Use this id when loading a new component.']
        ]
    },
    {
        name: 'gmrInstance.prefab',
        property: 'gmrInstance.prefab()',
        returns: 'gmrPrefab',
        desc: 'Holds all the sprites and handles rendering for one scene.',
        example: "gmrInstance.prefab()",
        props: [
            ['id', 'string', 'Use this id when loading a new component.']
        ]
    },
    {
        name: 'gmrInstance.behavior',
        property: 'gmrInstance.behavior()',
        returns: 'gmrBehavior',
        desc: 'Holds all the sprites and handles rendering for one scene.',
        example: "gmrInstance.behavior()",
        props: [
            ['id', 'string', 'Use this id when loading a new component.']
        ]
    },
    // gmrScene - addSprite, removeSprite, onPreRender, onPostRender, addPrefab, removePrefab, spawn
    {
        name: 'gmrScene.addSprite',
        property: 'gmrScene.addSprite(sprite)',
        returns: 'undefined',
        desc: 'Add a sprite to the scene.',
        example: "gmrScene.addSprite( sprite )",
        props: [
            ['sprite', 'gmrSprite', 'The sprite added to the scene.']
        ]
    },
    {
        name: 'gmrScene.removeSprite',
        property: 'gmrScene.removeSprite(sprite)',
        returns: 'undefined',
        desc: 'Remove a sprite from the scene.',
        example: "gmrScene.removeSprite( sprite )",
        props: [
            ['sprite', 'gmrSprite', 'The sprite removed from the scene.']
        ]
    },
    {
        name: 'gmrScene.onPreRender',
        property: 'gmrScene.onPreRender(fn)',
        returns: 'undefined',
        desc: 'Set a function to run before a the render function is ran.',
        example: "gmrScene.onPreRender( () => console.log('works') )",
        props: [
            ['fn', 'function', 'Function to be ran before each render call.']
        ]
    },
    {
        name: 'gmrScene.onPostRender',
        property: 'gmrScene.onPostRender()',
        returns: 'undefined',
        desc: 'Set a function to run before a the render function is ran.',
        example: "gmrScene.onPostRender()",
        props: [
            ['fn', 'function', 'Function to be ran after each render call.']
        ]
    },
    {
        name: 'gmrScene.addPrefab',
        property: 'gmrScene.addPrefab(...prefab)',
        returns: 'undefined',
        desc: 'Add a prefab to the scene.',
        example: "gmrScene.addPrefab( prefabOne, prefabTwo, prefabThree )",
        props: [
            ['prefab', 'gmrPrefab', 'Prefab to be added to scene.']
        ]
    },
    {
        name: 'gmrScene.removePrefab',
        property: 'gmrScene.removePrefab(prefab)',
        returns: 'undefined',
        desc: 'Remove a prefab from the scene.',
        example: "gmrScene.removePrefab( prefab )",
        props: [
            ['prefab', 'gmrPrefab', 'Prefab to be removed from scene.']
        ]
    },
    {
        name: 'gmrScene.spawn',
        property: 'gmrScene.spawn(prefabName)',
        returns: 'gmrSprite',
        desc: 'Create and return a sprite generated from a prefab.',
        example: "const playerSprite = gmrScene.spawn('player')",
        props: [
            ['prefabName', 'string', 'The name of the prefab to spawn a sprite from.']
        ]
    },
    // gmrSprite - setAnimation, move, flip, getBounds, checkBounds, setOutline, addBehavior, removeBehavior, 
    // setBounds, trackUI, updateUI, getUI, clearUI, isTouching, setParent, destory, addSprite, removeSprite,
    // setOffset, getOffset, getParent
    {
        name: 'gmrSprite.setAnimation',
        property: 'gmrSprite.setAnimation(name, priority?, loop?, reset?)',
        returns: 'undefined',
        desc: 'Set the current animation.',
        example: "playerSprite.setAnimation('Idle')",
        props: [
            ['name', 'string', 'The name of the animation.'],
            ['priority', 'string', 'The name of the animation.'],
            ['loop', 'string', 'The name of the animation.'],
            ['reset', 'string', 'The name of the animation.'],
        ]
    },
    {
        name: 'gmrSprite.move',
        property: 'gmrSprite.move(x, y)',
        returns: 'undefined',
        desc: "Add to the sprite's bound's x and y.",
        example: "const jump = () => playerSprite.move(0, -20)",
        props: [
            ['x', 'number', 'Positive for right, negative for left, and zero for no movement.'],
            ['y', 'number', 'Positive for down, negative for up, and zero for no movement.'],
        ]
    },
    {
        name: 'gmrSprite.flip',
        property: 'gmrSprite.flip(setFlip?)',
        returns: 'undefined',
        desc: 'Set the flip of the sprite or inverse the flip if no boolean is passed.',
        example: "const left = () => playerSprite.flip(false)\nconst right = () => playerSprite.flip(true)",
        props: [
            ['setFlip', 'boolean', 'Set the flip to true or false.']
        ]
    },
    {
        name: 'gmrSprite.getBounds',
        property: 'gmrSprite.getBounds()',
        returns: 'gmrBounds',
        desc: 'Get your size and location.',
        example: "const playerHeight = player.getBounds().height",
        props: []
    },
    {
        name: 'gmrSprite.checkBounds',
        property: 'gmrSprite.checkBounds()',
        returns: 'undefined',
        desc: 'Prevents sprite from leaving the canvas bounds.',
        example: "player.move(20, 0)\nplayer.checkBounds()",
        props: [
        ]
    },
    {
        name: 'gmrSprite.setOutline',
        property: 'gmrSprite.setOutline(value)',
        returns: 'undefined',
        desc: 'Draws a red outline when rendering.',
        example: "playerSprite.setOutline(true)",
        props: [
            ['value', 'boolean', 'Turn outline on or off.']
        ]
    },
    {
        name: 'gmrSprite.setBounds',
        property: 'gmrSprite.setBounds(x, y, width, height)',
        returns: 'undefined',
        desc: 'Set your size and location.',
        example: "spritePlayer.setBounds(50, 50, 200, 400)",
        props: [
            ['x', 'number', 'Set the x location of the sprite.'],
            ['y', 'number', 'Set the y location of the sprite.'],
            ['width', 'number', 'Set the width of the sprite.'],
            ['height', 'number', 'Set the height of the sprite.'],
        ]
    },
    {
        name: 'gmrSprite.trackUI',
        property: 'gmrSprite.trackUI(id, tag, offset?)',
        returns: 'HTMLElement',
        desc: 'Create an HTMLElement that follows your sprite.',
        example: "const enemyBtn = enemy.trackUI('btn', 'button')\nenemyBtn.onclick = () => {...}",
        props: [
            ['id', 'string', 'How to refrence the ui.'],
            ['tag', 'string', 'What type of element to create.'],
            ['offset', 'object', 'x, y, width, and height offsets.']
        ]
    },
    {
        name: 'gmrSprite.updateUI',
        property: 'gmrSprite.updateUI()',
        returns: 'undefined',
        desc: 'Reposition UI to sprite.',
        example: "playerSprite.updateUI()",
        props: []
    },
    {
        name: 'gmrSprite.getUI',
        property: 'gmrSprite.getUI(id)',
        returns: 'HTMLElement',
        desc: 'Get sprite tracked ui by id.',
        example: "enemySprite.getUI('btn').onclick = () => {...}",
        props: [
            ['id', 'string', 'ID of the tracked ui.']
        ]
    },
    {
        name: 'gmrSprite.clearUI',
        property: 'gmrSprite.clearUI(...id)',
        returns: 'undefined',
        desc: 'Remove tracked ui by id.',
        example: "enemySprite.clearUI('btn', 'health-bar')",
        props: [
            ['id', 'string', 'ID of the tracked ui.'],
        ]
    },
    {
        name: 'gmrSprite.isTouching',
        property: 'gmrSprite.isTouching(bounds)',
        returns: 'boolean',
        desc: 'Check if sprite bounds are touching passed bounds.',
        example: "if( spritePlayer.isTouching( spriteEnemy.getBounds() ) )\n{...}",
        props: [
            ['bounds', 'object', '{x, y, width, height} to be checked for collision.']
        ]
    },
    {
        name: 'gmrSprite.setParent',
        property: 'gmrSprite.setParent(p)',
        returns: 'undefined',
        desc: "Set the sprite's parent.",
        example: "...",
        props: []
    },
    {
        name: 'gmrSprite.destory',
        property: 'gmrSprite.destory()',
        returns: 'undefined',
        desc: 'Remove the current sprite from parent.',
        example: "...",
        props: []
    },
    {
        name: 'gmrSprite.addSprite',
        property: 'gmrSprite.addSprite(sprite)',
        returns: 'undefined',
        desc: 'Add a sprite to a sprite. When the parent moves, the child sprites will move also.',
        example: "spritePlayer.addSprite( spriteHealthBar )",
        props: [
            ['sprite', 'gmrSprite', 'The sprite to be added.']
        ]
    },
    {
        name: 'gmrSprite.removeSprite',
        property: 'gmrSprite.removeSprite(sprite)',
        returns: 'undefined',
        desc: 'Remove child sprite.',
        example: "spritePlayer.removeSprite( spriteHealthBar )",
        props: [
            ['sprite', 'gmrSprite', 'The sprite to be removed.']
        ]
    },
    {
        name: 'gmrSprite.setOffset',
        property: 'gmrSprite.setOffset(x, y)',
        returns: 'undefined',
        desc: "Set the sprite's offset x and y.",
        example: "spritePlayer.setOffset(0, 0)",
        props: [
            ['x', 'number', 'Sets the x offset.'],
            ['y', 'number', 'Sets the y offset.'],
        ]
    },
    {
        name: 'gmrSprite.getOffset',
        property: 'gmrSprite.getOffset()',
        returns: '{x, y}',
        desc: "Get the sprite's offset.",
        example: "playerSprite.getOffset().y",
        props: [
        ]
    },
    {
        name: 'gmrSprite.getParent',
        property: 'gmrSprite.getParent()',
        returns: 'any',
        desc: 'Get the current parent of the sprite.',
        example: "const dad = spritePlayer.getParent()",
        props: [
        ]
    },
    // gmrPrefab sprite
    {
        name: 'gmrPrefab.sprite',
        property: 'gmrPrefab.sprite(x, y, width, height)',
        returns: 'gmrSprite',
        desc: "Create a sprite and set it's bounds.",
        example: "const player = prefabPlayer.sprite(50, 50, 200, 400)",
        props: [
            ['x', 'number', 'Set the x location of the sprite.'],
            ['y', 'number', 'Set the y location of the sprite.'],
            ['width', 'number', 'Set the width of the sprite.'],
            ['height', 'number', 'Set the height of the sprite.'],
        ]
    },
    // gmrBehavior attach
    {
        name: 'gmrBehavior.attach',
        property: 'gmrBehavior.attach( sprite )',
        returns: 'undefined',
        desc: "Attach the behavior to the sprite.",
        example: "behaviorMoveable.attach( player )",
        props: [
            ['sprite', 'gmrSprite', 'Sprite to attach behavior to.']
        ]
    },
]