function search_photo() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = picture.getAttribute('data-caption');

    for (i = 0; i < x.length; i++) {
        if (!x[i].toLowerCase().includes(input)) {
            x[i].display="none";
        } else {
            x[i].display="list-item";
        }
    }
}
