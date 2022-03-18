var body = document.querySelector('body');
let taskBanner = document.querySelector('.generator__col2__image');
var backgrounds = [/*'assets/img/bgs/bg1.webp','assets/img/bgs/bg2.webp','assets/img/bgs/bg3.webp','assets/img/bgs/bg4.webp','assets/img/bgs/bg5.webp','assets/img/bgs/bg6.webp','assets/img/bgs/bg7.webp','assets/img/bgs/bg9.webp','assets/img/bgs/bg10.webp','assets/img/bgs/bg11.webp','assets/img/bgs/bg12.webp', 'assets/img/bgs/bg13.webp','assets/img/bgs/bg14.webp', 'assets/img/bgs/bg15.webp','assets/img/bgs/bg16.webp','assets/img/bgs/bg17.webp','assets/img/bgs/bg18.webp','assets/img/bgs/bg19.webp', 'assets/img/bgs/bg20.webp', 'assets/img/bgs/bg21.webp', 'assets/img/bgs/bg22.webp', 'assets/img/bgs/bg23.webp', 'assets/img/bgs/bg24.webp', 'assets/img/bgs/bg25.webp', 'assets/img/bgs/bg26.webp', 'assets/img/bgs/bg27.webp',*/];
//bgs with old photos
var backgrounds = ['assets/img/bgs/bg7.webp', 'assets/img/bgs/bg9.webp', 'assets/img/bgs/bg10.webp', 'assets/img/bgs/bg13.webp', 'assets/img/bgs/bg15.webp', 'assets/img/bgs/bg18.webp', 'assets/img/bgs/bg19.webp', 'assets/img/bgs/bg20.webp', 'assets/img/bgs/bg21.webp', 'assets/img/bgs/bg23.webp', 'assets/img/bgs/bg24.webp', 'assets/img/bgs/bg25.webp', 'assets/img/bgs/bg26.webp', 'assets/img/bgs/bg27.webp',];
//bgs with new photos

var getBG = function(max) {
    var result = Math.round(Math.random() * max);
    return backgrounds[result]
};
//body.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;
taskBanner.style.backgroundImage = `url('${getBG(backgrounds.length - 1)}')`;