//your JS code here. If required.
function removeColor() {
    var select = document.getElementById("colorSelect");
        if (select.index !== -1) {
        select.remove(select.index);
    }
}


