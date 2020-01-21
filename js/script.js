$(document).ready(function() {
    $('#scroll-up').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    $('.owl-carousel').owlCarousel({
        nav: true,
        center: true,
        loop: true,
        margin: 20,
        responsive: {
            0: {
                items: 1
            },

            425: {
                items: 2
            },

            600: {
                items: 3
            }
        }
    });
});

$('.send').click((e) => {
    let data = {
        name: $('#name').val(),
        surname: $('#surname').val(),
        age: $('#age').val(),
        phone: $('#phone').val(),
        message: $('#message').val()
    }

    if (localStorage.getItem('lastSend') + 10 > new Date().getMinutes()) {
        alert('Вы отправляете слишком много запросов, подождите несколько минут, прежде чем отправлять новый');
        return false;
    } else if (data.name <= 3 || data.surname <= 3 || age <= 6 && data.age >= 16 || data.phone < 10) {
        alert('Введены неправильные данные');
        return false;
    }

    e.preventDefault();


    let message = `${data.name} ${data.surname}%0A${data.age} лет %0A${data.phone}%0A${data.message}`;

    const token = '848021510:AAHuRhhxMCSTy1cuzmfAxH116SYbgsLfYNw';
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=331953675&text=${message}`;


    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);
    xhttp.send();

    localStorage.setItem('lastSend', new Date().getMinutes());
});