export default function showError(message){
    $('#errors').text(message).css("color", "red");
    $('#errors').fadeIn()
    setTimeout(() => $('#errors').fadeOut('slow'), 4000)
}