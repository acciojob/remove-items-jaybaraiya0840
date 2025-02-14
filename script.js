//your JS code here. If required.
function removeColor() {
    var select = document.getElementById("colorSelect");
        if (select.selectedIndex !== -1) {
        // Remove the selected option
        select.remove(select.selectedIndex);
    }
}
