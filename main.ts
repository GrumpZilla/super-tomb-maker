function Characters () {
    if (blockSettings.readNumber("travelboy") == 1) {
        mySprite.setImage(img`
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            `)
        animation.runImageAnimation(
        mySprite,
        [img`
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffeeeeefffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            `,img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            ffffffffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            fffffeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            ffffffffffffffffffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffffffffffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffffffffffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffffffffffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ffffffffffffffffffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffff.....
            ...............ffffffffffffffffffffffffffffffffffffffff.....
            ...............ffffffffffffffffffffffffffffffffffffffff.....
            ...............ffffffffffffffffffffffffffffffffffffffff.....
            ...............ffffffffffffffffffffffffffffffffffffffff.....
            ...............ffffffffffffffffffffffffffffffffffffffff.....
            `,img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            ffffffffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            ffffffffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            ffffffffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            ffffffffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            ffffffffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            fffffeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff.....
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff.....
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff.....
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff.....
            fffffffffffffffffffffffffffffffffffffffffffffffffffffff.....
            `,img`
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ............................................................
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeefffffffffffffffeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            `,img`
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeeeeeeeffffffffffffffffffffffffffffff.....
            .....ffffffffffeeeeeeeeeefffffeeeeefffffeeeeeeeeeefffff.....
            .....ffffffffffeeeeeeeeeefffffeeeeefffffeeeeeeeeeefffff.....
            .....ffffffffffeeeeeeeeeefffffeeeeefffffeeeeeeeeeefffff.....
            .....ffffffffffeeeeeeeeeefffffeeeeefffffeeeeeeeeeefffff.....
            .....ffffffffffeeeeeeeeeefffffeeeeefffffeeeeeeeeeefffff.....
            ..........fffffffffffffffffffffffffffffffffffffffffffff.....
            ..........fffffffffffffffffffffffffffffffffffffffffffff.....
            ..........fffffffffffffffffffffffffffffffffffffffffffff.....
            ..........fffffffffffffffffffffffffffffffffffffffffffff.....
            ..........fffffffffffffffffffffffffffffffffffffffffffff.....
            `,img`
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            ...............fffffffffffffffffffffffffffffffffffffffffffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffeeeeeeeeeeeeeeeeeeeefffffeeeeeeeeeefffffeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeefffffeeeeeeeeeefffffffffffffffeeeeeeeeeefffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeffffffffff
            .....fffffeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeefffffffffffffffffffffffffffffffffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....fffffeeeeeeeeeefffffeeeeeeeeeefffffeeeeeeeeeefffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            .....ffffffffffffffffffffffffffffffffffffffffffffffffff.....
            `],
        200,
        true
        )
    } else if (blockSettings.readNumber("dog") == 1) {
    	
    } else if (blockSettings.readNumber("cyclop") == 1) {
    	
    } else if (blockSettings.readNumber("crow") == 1) {
    	
    } else if (blockSettings.readNumber("agent") == 1) {
    	
    } else if (blockSettings.readNumber("kitty") == 1) {
    	
    } else if (blockSettings.readNumber("robot") == 1) {
    	
    } else if (blockSettings.readNumber("koala") == 1) {
    	
    } else if (blockSettings.readNumber("knight") == 1) {
    	
    } else if (blockSettings.readNumber("piggy") == 1) {
    	
    } else if (blockSettings.readNumber("pirate") == 1) {
    	
    } else if (blockSettings.readNumber("rabbit") == 1) {
    	
    } else if (blockSettings.readNumber("shapito") == 1) {
    	
    } else if (blockSettings.readNumber("froggy") == 1) {
    	
    } else if (blockSettings.readNumber("skull") == 1) {
    	
    } else if (blockSettings.readNumber("voodoo") == 1) {
    	
    } else if (blockSettings.readNumber("Neighbor") == 1) {
    	
    }
}
blockMenu.onMenuOptionSelected(function (option, index) {
    if (blockMenu.selectedMenuOption() == "Character") {
        blockMenu.closeMenu()
        blockSettings.writeNumber("characters", 1)
        Characters()
        scene.cameraFollowSprite(mySprite)
    } else if (blockMenu.selectedMenuOption() == "Make!") {
    	
    } else if (blockMenu.selectedMenuOption() == "Play!") {
    	
    }
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
blockSettings.writeNumber("Characters", 0)
blockSettings.writeNumber("travelboy", 1)
blockSettings.writeNumber("cyclop", 0)
blockSettings.writeNumber("agent", 0)
blockSettings.writeNumber("robot", 0)
blockSettings.writeNumber("crow", 0)
blockSettings.writeNumber("dog", 0)
blockSettings.writeNumber("koala", 0)
blockSettings.writeNumber("knight", 0)
blockSettings.writeNumber("kitty", 0)
blockSettings.writeNumber("pirate", 0)
blockSettings.writeNumber("piggy", 0)
blockSettings.writeNumber("rabbit", 0)
blockSettings.writeNumber("shapito", 0)
blockSettings.writeNumber("froggy", 0)
blockSettings.writeNumber("skull", 0)
blockSettings.writeNumber("voodoo", 0)
blockSettings.writeNumber("Neighbor", 0)
blockMenu.showMenu(["Make!", "Character"], MenuStyle.List, MenuLocation.LeftHalf)
blockMenu.setColors(14, 15)
forever(function () {
    if (blockSettings.readNumber("Characters") == 1) {
        if (blockSettings.readNumber("travelboy") == 1) {
        	
        } else if (blockSettings.readNumber("dog") == 1) {
        	
        } else if (blockSettings.readNumber("cyclop") == 1) {
        	
        } else if (blockSettings.readNumber("crow") == 1) {
        	
        } else if (blockSettings.readNumber("agent") == 1) {
        	
        } else if (blockSettings.readNumber("kitty") == 1) {
        	
        } else if (blockSettings.readNumber("robot") == 1) {
        	
        } else if (blockSettings.readNumber("koala") == 1) {
        	
        } else if (blockSettings.readNumber("knight") == 1) {
        	
        } else if (blockSettings.readNumber("piggy") == 1) {
        	
        } else if (blockSettings.readNumber("pirate") == 1) {
        	
        } else if (blockSettings.readNumber("rabbit") == 1) {
        	
        } else if (blockSettings.readNumber("shapito") == 1) {
        	
        } else if (blockSettings.readNumber("froggy") == 1) {
        	
        } else if (blockSettings.readNumber("skull") == 1) {
        	
        } else if (blockSettings.readNumber("voodoo") == 1) {
        	
        } else if (blockSettings.readNumber("Neighbor") == 1) {
        	
        }
    }
})
