$(document).ready(() => {
    $('#tooltipMail').tooltip({'placement': 'right'});
    $('#tooltipPhone').tooltip({'placement': 'right'});
    let fDP = new FormDataProvider(formItemsIds);

    $('#orderFormBtn').click((e)=>{
        const formEl = document.getElementById('shippingForm').checkValidity();
        if (formEl) {
            fDP.readInputs();
        }
    });
});

var cw = $('.circle').width();
$('.circle').css({'height':cw+'px'});