async function determineSwipeDirection(section) {
    let touchstartX = 0;
    let touchstartY = 0;
    let touchendX = 0;
    let touchendY = 0;
    const gesuredZone = section;

    await gesuredZone.addEventListener('touchstart', function (event) {
        touchstartX = event.screenX;
        touchstartY = event.screenY;
    })

    await gesuredZone.addEventListener('touchend', function (event) {
        touchendX = event.screenX;
        touchendY = event.screenY;
    });
    handleGesure();

    function handleGesure() {
        var swiped = 'swiped: ';
        if (touchendX < touchstartX) {
            console.log(swiped + 'left!');
        }
        if (touchendX > touchstartX) {
            console.log(swiped + 'right!');
        }
        if (touchendY < touchstartY) {
            console.log(swiped + 'down!');
        }
        if (touchendY > touchstartY) {
            console.log(swiped + 'left!');
        }
        if (touchendY === touchstartY) {
            console.log('tap!');
        }
    }
}

