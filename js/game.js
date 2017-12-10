var w = $('.container').width();
var block = w/15;

$('#wrapper').css({'height': w+'px','width': w+'px'});
$('#ludo_wrapper').css({'height': w+'px','width': w+'px'});
$('#ludo_sprite').css({'height': w+'px','width': w+'px'});

$('.round-green').css({'height': w/3.65714285714+'px'  , 'width':w/3.65714285714+'px', 'top': w/15.36+'px' ,'left': w/15.36+'px'});
$('.round-red').css({'height': w/3.65714285714+'px'  , 'width':w/3.65714285714+'px', 'top': w/15.36+'px' ,'left': w/1.50588235294+'px'});
$('.round-blue').css({'height': w/3.65714285714+'px'  , 'width':w/3.65714285714+'px', 'top': w/1.50588235294+'px' ,'left': w/1.50588235294+'px'});
$('.round-yellow').css({'height': w/3.65714285714+'px'  , 'width':w/3.65714285714+'px', 'top': w/1.50588235294+'px' ,'left': w/15.36+'px'});

$('.butte-green').css({'height': w/15.36+'px'  , 'width': w/15.36+'px'});
$('.butte-red').css({'height': w/15.36+'px'  , 'width': w/15.36+'px'});
$('.butte-blue').css({'height': w/15.36+'px'  , 'width': w/15.36+'px'});
$('.butte-yellow').css({'height': w/15.36+'px'  , 'width': w/15.36+'px'});

$('.butte-green1').css({'top': w/4.21978021978+'px' ,'left': w/5.90769230769+'px'});
$('.butte-green2').css({'top': w/5.89351851852+'px' ,'left': w/4.21978021978+'px'});
$('.butte-green3').css({'top': w/9.61538461538+'px' ,'left': w/5.90769230769+'px'});
$('.butte-green4').css({'top': w/5.89351851852+'px' ,'left': w/9.6+'px'});

$('.butte-red1').css({'top': w/4.21978021978+'px' ,'left': w/1.30030643514+'px'});
$('.butte-red2').css({'top': w/5.89351851852+'px' ,'left': w/1.42393736018+'px'});
$('.butte-red3').css({'top': w/9.61538461538+'px' ,'left': w/1.30030643514+'px'});
$('.butte-red4').css({'top': w/5.89351851852+'px' ,'left': w/1.19642857143+'px'});


$('.butte-blue1').css({'top': w/1.2+'px' ,'left': w/1.30030643514+'px'});
$('.butte-blue2').css({'top': w/1.30169491525+'px' ,'left': w/1.42393736018+'px'});
$('.butte-blue3').css({'top': w/1.42750929368+'px' ,'left': w/1.30030643514+'px'});
$('.butte-blue4').css({'top': w/1.30169491525+'px' ,'left': w/1.19642857143+'px'});

$('.butte-yellow1').css({'top': w/1.30169491525+'px' ,'left': w/9.6+'px'});
$('.butte-yellow2').css({'top': w/1.30169491525+'px' ,'left': w/4.21978021978+'px'});
$('.butte-yellow3').css({'top': w/1.42750929368+'px' ,'left': w/5.90769230769+'px'});
$('.butte-yellow4').css({'top': w/1.2+'px' ,'left': w/5.90769230769+'px'});

$('#middle-img img').css({'height': (block*3)+'px'  , 'width':(block*3)+'px'});
$('#middle-img').css({'top': w/2.51803278689+'px' , 'left':w/2.50980392157+'px'});

$('#dice').css({'height': w/9.6+'px'  , 'width': w/9.6+'px' , 'top':(w+ w/20)+'px'});
$('#hidden-wrapper').css({'height': w/9.6+'px'  , 'width': w/9.6+'px', 'top':(w+ w/20)+'px'});
$('#back').css({'height': w/9.6+'px'  , 'width': w/9.6+'px', 'top':(w+ w/20)+'px'});
$('#shape').css({'height': w/9.6+'px'  , 'width': w/9.6+'px'});
$('.plane').css({'font-size': w/15+'px'});


$('.pawns').css({'height': w/15+'px'  , 'width': w/15+'px'});
$('.player-info img').css({'height': w/15+'px'  , 'width': w/15+'px'});

$('#redpawn1').css({'top': w/4.21978021978+'px' ,'left': w/1.30030643514+'px'});
$('#redpawn2').css({'top': w/5.89351851852+'px' ,'left': w/1.42393736018+'px'});
$('#redpawn3').css({'top': w/9.61538461538+'px' ,'left': w/1.30030643514+'px'});
$('#redpawn4').css({'top': w/5.89351851852+'px' ,'left': w/1.19642857143+'px'});


$('#yellowpawn1').css({'top': w/1.30169491525+'px' ,'left': w/9.6+'px'});
$('#yellowpawn2').css({'top': w/1.30169491525+'px' ,'left': w/4.21978021978+'px'});
$('#yellowpawn3').css({'top': w/1.42750929368+'px' ,'left': w/5.90769230769+'px'});
$('#yellowpawn4').css({'top': w/1.2+'px' ,'left': w/5.90769230769+'px'});

$('#greenpawn1').css({'top': w/4.21978021978+'px' ,'left': w/5.90769230769+'px'});
$('#greenpawn2').css({'top': w/5.89351851852+'px' ,'left': w/4.21978021978+'px'});
$('#greenpawn3').css({'top': w/9.61538461538+'px' ,'left': w/5.90769230769+'px'});
$('#greenpawn4').css({'top': w/5.89351851852+'px' ,'left': w/9.6+'px'});

$('#bluepawn1').css({'top': w/1.2+'px' ,'left': w/1.30030643514+'px'});
$('#bluepawn2').css({'top': w/1.30169491525+'px' ,'left': w/1.42393736018+'px'});
$('#bluepawn3').css({'top': w/1.42750929368+'px' ,'left': w/1.30030643514+'px'});
$('#bluepawn4').css({'top': w/1.30169491525+'px' ,'left': w/1.19642857143+'px'});

$('h3').css({'top':(w+(w/15) +'px') , 'left':w/3.75+'px'});
$('h3').css({'height': w/15+'px'  , 'width': w/15+'px'});

$('.board-wrapper').css({'height': block+'px'  , 'width':block+'px'});


$('.fa-long-arrow-down').css({ 'width':block/3.09090909091+'px','left':w/1.79649122807+'px' });
$('.fa-long-arrow-right').css({ 'width':block/3.09090909091+'px','top':w/2.4380952381+'px' });
$('.fa-long-arrow-left').css({ 'width':block/3.09090909091+'px','top':w/1.84504504505+'px' ,'left':w/1.12775330396+'px'});
$('.fa-long-arrow-up').css({ 'width':block/3.09090909091+'px','top':w/1.1320754717+'px' ,'left':w/2.38139534884+'px'});


