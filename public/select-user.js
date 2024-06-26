const passenger = document.querySelector('.passenger');
const driver = document.querySelector('.driver');


setTimeout(() => {
    passenger.style.top = '0.1px';
}, 1);

setTimeout(() => {
    driver.style.bottom = '0.1px';
}, 1);

// We select the ".pass-bttn" and ".dri-bttn" elements for the click event. 
// When the ".pass-bttn" is clicked, the ".passenger" div is enlarged to take up the full width and height of the viewport with a transition time of 10 seconds so it can be noticable and when we get the result it can be 2 or 3s max. 
// When the ".dri-bttn" is clicked, the ".driver" div is enlarged in a similar manner. 

const passBttn = document.querySelector('.pass-bttn');
const driBttn = document.querySelector('.dri-bttn');
const passengerDiv = document.querySelector('.passenger');
const driverDiv = document.querySelector('.driver');

passBttn.addEventListener('click', function () {
    passengerDiv.style.transition = 'width 4s, height 4s';
    passengerDiv.style.width = '100vw';
    passengerDiv.style.height = '100vh';
});

driBttn.addEventListener('click', function () {
    driverDiv.style.transition = 'width 4s, height 4s';
    driverDiv.style.width = '100vw';
    driverDiv.style.height = '100vh';
});

function redirectToPage() {
    window.location.href = "passenger-sign-up.html"
}

// this is for the new animation for each passenger and driver when clicked which is still not working damnit!

// passenger.addEventListener('click', function() {
//     this.querySelector('.expanded-content').classList.toggle('expanded');
// });

// driver.addEventListener('click', function() {
//     this.querySelector('.expanded-content').classList.toggle('expanded');
// });

