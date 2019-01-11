$(document).ready()



var colBtn = $("#collapseBtn");
var nightBtn = $("#nightBtn");
var navbar = $("#navBar");
var navActive = $(".nav-active, .nav-style");
var header = $(".header");
var icons = $(".footer-icon, .footer-icon:hover, .icon");

//initialized as false if the device is not mobile
var isMobile = false;

if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    isMobile = true;
    mobilePic();
    mobileCss();
    console.log("you're on mobile");
}

//changes the carousel pictures if you're on mobile
function mobilePic() {
    var pic1 = $("#pic1");
    var pic2 = $("#pic2");
    var pic3 = $("#pic3");
    pic1.attr("src", "./assets/images/Alley.png");
    pic2.attr({ src: "./assets/images/Tokyo-Disneyland.png", alt: "Tokyo Disney Resort castle" });
    pic3.attr({ src: "./assets/images/Tower.png", alt: "Inside a tower at Disney Sea! :)" })
}

function mobileCss() {
    navActive.css("border-bottom", "0px solid");
}

//checks local storage to see if night mode is preferred
userPreference();

function userPreference() {
    var nightPreference = localStorage.getItem("nightmode");

    if (nightPreference === "true") {
        toggleNight();
    }
    if (nightPreference === "false") {
    }
}

//button toggles night mode on/off
nightBtn.click(function () {
    toggleNight();
})

function toggleNight() {
    var nightAttr = nightBtn.attr("night");
    navbar.toggleClass("navbar-light navbar-dark");
    if (nightAttr === "false") {
        nightBtn.attr("night", "true");
        $('link[href="./assets/style/style.css"]').attr('href', './assets/style/nightstyle.css');
        localStorage.setItem("nightmode", true);
    }
    if (nightAttr === "true") {
        nightBtn.attr("night", "false");
        $('link[href="./assets/style/nightstyle.css"]').attr('href', './assets/style/style.css');
        localStorage.setItem("nightmode", false);
    }
}

// $(function () {

//     // init the validator
//     // validator files are included in the download package
//     // otherwise download from http://1000hz.github.io/bootstrap-validator

//     $('#contact-form').validator();

//     // when the form is submitted
//     $('#contact-form').on('submit', function (e) {

//         // if the validator does not prevent form submit
//         if (!e.isDefaultPrevented()) {
//             var url = "contact.php";

//             // POST values in the background the the script URL
//             $.ajax({
//                 type: "POST",
//                 url: url,
//                 data: $(this).serialize(),
//                 success: function (data) {
//                     // data = JSON object that contact.php returns

//                     // we recieve the type of the message: success x danger and apply it to the 
//                     var messageAlert = 'alert-' + data.type;
//                     var messageText = data.message;

//                     // let's compose Bootstrap alert box HTML
//                     var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

//                     // If we have messageAlert and messageText
//                     if (messageAlert && messageText) {
//                         // inject the alert to .messages div in our form
//                         $('#contact-form').find('.messages').html(alertBox);
//                         // empty the form
//                         $('#contact-form')[0].reset();
//                     }
//                 }
//             });
//             return false;
//         }
//     })
// });


