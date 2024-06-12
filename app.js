// <<=== All Variable Declarations  ===>>

const sound = new Audio('css/assets/fart.mp3');
const sound2 = new Audio('css/assets/bite.mp3');
const sound3 = new Audio('css/assets/alert.wav');
const sound4 = new Audio('css/assets/radiation.wav');

const cookies = ['Chocolate Chip Cookie', 'Sugar Cookie', 'Oatmeal Cookie', 'Cookie Dough', 'Peanut Butter Cookie'];

let randomNumber = Math.floor(Math.random() * cookies.length);
let randomCookie = cookies[randomNumber];
let alertShown = false;
let btnClicked = false;

let clickCount1 = 0;
let clickCount2 = 0;
let clickCount3 = 0;
let clickCount4 = 0;
let clickCount5 = 0;

let newButton7Created = false;
let newButton8Created = false;
let newButton9Created = false;
let newButton10Created = false;
let newButton11Created = false;

// <<=== All Function Declarations  ===>>

$('#btn').hide();
$('#warning').hide();

function onClick() {
    $('#warning, #btn').hide();
    $('#content').css({ color: 'white', fontSize: '30px', fontWeight: 'bold', display: 'flex' }).text('What kind of Cookie do you want?');

    $('body').append('<button class="cookie1">Chocolate Chip Cookie</button>');
    $('body').append('<button class="cookie2">Sugar Cookie</button>');
    $('body').append('<button class="cookie3">Oatmeal Cookie</button>');
    $('body').append('<button class="cookie4">Cookie Dough</button>');
    $('body').append('<button class="cookie5">Peanut Butter Cookie</button>');
    $('body').append('<button class="cookie6">Choose For Me!</button>');

    $('body').css({ backgroundImage: 'url(css/assets/jars.png)', backgroundSize: 'cover' });

    $('.cookie1').click(ChocolateChip);
    $('.cookie2').click(SugarCookie);
    $('.cookie3').click(OatmealCookie);
    $('.cookie4').click(CookieDough);
    $('.cookie5').click(PeanutButterCookie);
    $('.cookie6').click(ChooseForMe).mouseover(function() {
        if (!alertShown) {
            alert('Double to click to confirm your desire for randomness!');
            alertShown = true;
        }
    });
}

function ChocolateChip() {
    $('#content').text('Click the Cookie as fast as you can for 10 seconds!!').css('display', 'flex');
    $('.cookie1').css({ backgroundImage: 'url(css/assets/chocolateChip.png)', backgroundSize: 'cover', width: '250px', height: '250px', border: 'none', outline: 'none', borderRadius: '50%', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }).empty();
    $('.cookie2, .cookie3, .cookie4, .cookie5, .cookie6').hide();
    $('body').append('<button class="tryAgain">Try again?</button>');
    if (clickCount1 > 14) {
        $('.cookie1').hide();
        $('#content').text('You ate too many cookies and now you are sick!');
        $('body').css({ backgroundImage: 'url(css/assets/bed.png)', backgroundSize: 'cover' });
    }
    $('.cookie1').click(ccScore);
    $('.tryAgain').click(reload);
    $('.cookie1').click(function() { sound2.play(); });
}

function SugarCookie() {
    $('#content').text('Click the Cookie as fast as you can for 10 seconds!!').css('display', 'flex');
    $('.cookie2').css({ backgroundImage: 'url(css/assets/sugar.png)', backgroundSize: 'cover', width: '250px', height: '250px', border: 'none', outline: 'none', borderRadius: '50%', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }).empty();
    $('.cookie1, .cookie3, .cookie4, .cookie5, .cookie6').hide();
    $('body').append('<button class="tryAgain">Try again?</button>');
    if (clickCount2 > 14) {
        $('.cookie2').hide();
        $('#content').text('You ate too many cookies and now you are sick!');
        $('body').css({ backgroundImage: 'url(css/assets/bed.png)', backgroundSize: 'cover' });
    }
    $('.cookie2').click(scScore);
    $('.tryAgain').click(reload);
    $('.cookie2').click(function() { sound2.play(); });
}

function OatmealCookie() {
    $('#content').text('Click the Cookie as fast as you can for 10 seconds!!').css('display', 'flex');
    $('.cookie3').css({ backgroundImage: 'url(css/assets/oatmeal.png)', backgroundSize: 'cover', width: '250px', height: '250px', border: 'none', outline: 'none', borderRadius: '50%', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }).empty();
    $('.cookie1, .cookie2, .cookie4, .cookie5, .cookie6').hide();
    $('body').append('<button class="tryAgain">Try again?</button>');
    if (clickCount3 > 14) {
        $('.cookie3').hide();
        $('#content').text('You ate too many cookies and now you are sick!');
        $('body').css({ backgroundImage: 'url(css/assets/bed.png)', backgroundSize: 'cover' });
    }
    $('.cookie3').click(ocScore);
    $('.tryAgain').click(reload);
    $('.cookie3').click(function() { sound2.play(); });
}

function CookieDough() {
    $('#content').text('Click the dough as fast as you can for 10 seconds!!').css('display', 'flex');
    $('.cookie4').css({ backgroundImage: 'url(css/assets/dough.png)', backgroundSize: 'cover', width: '250px', height: '250px', border: 'none', outline: 'none', borderRadius: '50%', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }).empty();
    $('.cookie1, .cookie2, .cookie3, .cookie5, .cookie6').hide();
    $('body').append('<button class="tryAgain">Try again?</button>');
    if (clickCount4 > 14) {
        $('.cookie4').hide();
        $('#content').text('You ate too many cookies and now you are sick!');
        $('body').css({ backgroundImage: 'url(css/assets/bed.png)', backgroundSize: 'cover' });
    }
    $('.cookie4').click(cdScore);
    $('.tryAgain').click(reload);
    $('.cookie4').click(function() { sound2.play(); });
}

function PeanutButterCookie() {
    $('#content').text('Click the Cookie as fast as you can for 10 seconds!!').css('display', 'flex');
    $('.cookie5').css({ backgroundImage: 'url(css/assets/peanut.png)', backgroundSize: 'cover', width: '250px', height: '250px', border: 'none', outline: 'none', borderRadius: '50%', boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)' }).empty();
    $('.cookie1, .cookie2, .cookie3, .cookie4, .cookie6').hide();
    $('body').append('<button class="tryAgain">Try again?</button>');
    if (clickCount5 > 14) {
        $('.cookie5').hide();
        $('#content').text('You ate too many cookies and now you are sick!');
        $('body').css({ backgroundImage: 'url(css/assets/bed.png)', backgroundSize: 'cover' });
    }
    $('.cookie5').click(pbScore);
    $('.tryAgain').click(reload);
    $('.cookie5').click(function() { sound2.play(); });
}

function ChooseForMe() {
    switch (randomNumber) {
        case 0:
            $('.cookie6').click(ChocolateChip);
            break;
        case 1:
            $('.cookie6').click(SugarCookie);
            break;
        case 2:
            $('.cookie6').click(OatmealCookie);
            break;
        case 3:
            $('.cookie6').click(CookieDough);
            break;
        case 4:
            $('.cookie6').click(PeanutButterCookie);
            break;
    }
}

setInterval(function() {
    if (clickCount1 > 14 && !newButton7Created) {
        createVomitButton();
        newButton7Created = true;
    }
    if (clickCount2 > 14 && !newButton8Created) {
        createVomitButton();
        newButton8Created = true;
    }
    if (clickCount3 > 14 && !newButton9Created) {
        createVomitButton();
        newButton9Created = true;
    }
    if (clickCount4 > 14 && !newButton10Created) {
        createVomitButton();
        newButton10Created = true;
    }
    if (clickCount5 > 14 && !newButton11Created) {
        createVomitButton();
        newButton11Created = true;
    }
}, 1000);

function createVomitButton() {
    $('body').append('<button></button>');
    $('button:last-child').css({ backgroundImage: 'url(css/assets/vomit.png)', width: '250px', height: '250px', backgroundSize: 'cover', textAlign: 'center', alignItems: 'center', color: 'white', display: 'flex', fontSize: '50px', fontWeight: 'bold', border: 'none', outline: 'none', borderRadius: '50%' });
}

function ccScore() {
    clickCount1++;
    $('#counter1').text(clickCount1).css({ display: 'flex', color: 'white', fontSize: '90px', fontWeight: 'bold' });
    $('.tryAgain').hide();
    $('body').append($('#counter1'));
}

function scScore() {
    clickCount2++;
    $('#counter2').text(clickCount2).css({ display: 'flex', color: 'white', fontSize: '90px', fontWeight: 'bold' });
    $('.tryAgain').hide();
    $('body').append($('#counter2'));
}

function ocScore() {
    clickCount3++;
    $('#counter3').text(clickCount3).css({ display: 'flex', color: 'white', fontSize: '90px', fontWeight: 'bold' });
    $('.tryAgain').hide();
    $('body').append($('#counter3'));
}

function cdScore() {
    clickCount4++;
    $('#counter4').text(clickCount4).css({ display: 'flex', color: 'white', fontSize: '90px', fontWeight: 'bold' });
    $('.tryAgain').hide();
    $('body').append($('#counter4'));
}

function pbScore() {
    clickCount5++;
    $('#counter5').text(clickCount5).css({ display: 'flex', color: 'white', fontSize: '90px', fontWeight: 'bold' });
    $('.tryAgain').hide();
    $('body').append($('#counter5'));
}

function reload() {
    location.reload();
}

// <<=== All Event Listeners  ===>>

$('#btn').click(onClick).click(function() {
    sound.play();
}).mouseover(function() {
    $('#risky').text('!! You will encounter elements that, when excessively consumed, pose risks to the well-being of children !!').css({ animation: 'flash 3s infinite', display: 'space-around', fontSize: '60px', justifyContent: 'center', alignItems: 'center', position: 'center', margin: 'center' });
}).mouseout(function() {
    $('#risky').empty();
}).mouseover(function() {
    if (!btnClicked) {
        sound3.play();
        sound4.pause();
    }
}).mouseout(function() {
    if (!btnClicked) {
        sound3.pause();
        sound4.play();
    }
}).click(function() {
    sound3.pause();
    sound4.pause();
    btnClicked = true;
});

$('#mute').click(function() {
    sound.load();
    sound2.load();
    sound3.load();
    sound4.load();
    sound4.play();
    $('#warning, #btn').show();
    $('#mute, #muteLabel').hide();
});
