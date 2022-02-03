export default function showError(message){
    $('#errors').text(message).css("color", "red");
    $('#errors').show()
    setTimeout(() => $('#errors').hide(), 5000)
}