function search_photo() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = element.getAttribute('data-caption');
    
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        } else {
            x[i].style.display="list-item";
        }
    }
}

// for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//         x[i].style.display="none";
//     } else {
//         x[i].style.display="list-item";
//     }
// }