export default function toCapitalize (word){
    let words = word.split(" ");
    let completed = ''
    words.forEach( (w, i) => {
        if(i === 0)
            completed = w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        else
            completed += ` ${w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()}`
    });
    return completed
}