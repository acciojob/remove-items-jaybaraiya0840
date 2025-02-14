//your JS code here. If required.
function removeColor() {
    var select = document.getElementById("colorSelect");
        if (select.selectedIndex !== -1) {
        select.remove(select.selectedIndex);
    }
}


