$(document).ready(function() {
    var $bannerBtn = $('.btn-banner');
    var $bannerTxt = $('.about__banner--content').find('p');
    var $mission = $('.mission');
    var $vision = $('.vision');

    

    $bannerBtn.on('click', function() {
        $mission.toggleClass('strong');
        $vision.toggleClass('strong');
        if($vision.hasClass('strong')) {
            $bannerTxt.fadeOut(300, function() {
                $(this).text('Do nisi sint elit adipisicing velit amet incididunt sit ad. Aliqua sit sint commodo nulla. Tempor aliquip proident sunt officia quis minim deserunt consequat laborum. Pariatur reprehenderit duis ex deserunt sint laborum duis labore labore ullamco nisi incididunt. Amet sit consequat ipsum aliquip dolore et consequat cupidatat aliqua eu ut ut ut quis. Mollit pariatur est veniam dolor. Minim in ullamco consectetur pariatur sit ea cillum dolore. Amet do mollit deserunt quis.').fadeIn(300);
            })
        } else {
            
            $bannerTxt.fadeOut(300, function() {
                $(this).text('Wierzymy, że kreatywność i postęp nie mają granic, a wychodzenie pozaramy otwiera wiele możliwości, dlatego tworzymy eventy, w których podstawą jest dostarczanie niezapomnianych emocji. W naszych produkcjach dążymy do kreowania zaskakującej i porywającej przestrzeni, w której uczestnicy eventu mogą poczuć się wyjątkowo i niepowatrzalnie. Multidyscyplinarny zespół, odwaga i nastawienie na sukces to fundamenty naszych działań.').fadeIn(300);
            });
        }
    })
     
})