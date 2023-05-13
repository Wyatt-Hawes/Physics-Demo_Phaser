const game = new Phaser.Game({
    //type: Phaser.CANVAS,
    physics: {
        default: 'matter',
        //arcade: { debug: true },
        matter: {
            enableSleeping: true,
            debug: false,
            debug: {

                showAxes: false,
                showAngleIndicator: false,
                angleColor: 0xffffff,

                showBroadphase: false,
                broadphaseColor: 0xffffff,

                showBounds: false,
                boundsColor: 0xffffff,

                showVelocity: false,
                velocityColor: 0xffffff,

                showCollisions: false,
                collisionColor: 0xffffff,
    
                showSeparations: false,
                separationColor: 0xffa500,

                showBody: true,
                showStaticBody: true,
                showInternalEdges: true,

                renderFill: false,
                renderLine: true,
    
                fillColor: 0xFFFFFF,
                fillOpacity: 1,
                lineColor: 0xFFFFFF,
                lineOpacity: 1,
                lineThickness: 1,
    
                staticFillColor: 0xFFFFFF,
                staticLineColor: 0xFFFFFF,

                showSleeping: false,
                staticBodySleepOpacity: 1,
                sleepFillColor: 0x464646,
                sleepLineColor: 0x999a99,
    
                showSensors: false,
                sensorFillColor: 0x0d177b,
                sensorLineColor: 0x1327e4,
    
                showPositions: false,
                positionSize: 4,
                positionColor: 0xe042da,
    
                showJoint: true,
                jointColor: 0xe0e042,
                jointLineOpacity: 1,
                jointLineThickness: 2,
    
                pinSize: 4,
                pinColor: 0x42e0e0,
    
                springColor: 0x123456,
    
                anchorColor: 0xefefef,
                anchorSize: 4,
    
                showConvexHulls: false,
                hullColor: 0xd703d0
            }
        }
    },
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1380,
        height: 1920
    },
    scene: [Title,Victory, IntermThree, IntermTwo, IntermOne,  Three, Two, One ],
    title: "Adventure Game",
});

