function getSelectValue(selectID) {
    pick_ = document.getElementById('selectX').value;
    localStorage.setItem("lastSelectedValue", pick_);
    location.reload();
}
function getLastSelectedValue() {
    var value = localStorage.getItem("lastSelectedValue")
    if (value) {
        document.getElementById('selectX').value = value;
    }
}