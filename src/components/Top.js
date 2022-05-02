import React from "react"
import Combobox from "react-widgets/Combobox"
function Top() {
    var list;

    var handleClickEvent = function() {
        list = document.getElementById('list');
        list.click();
    };

    return (
      <Combobox
        onClick={handleClickEvent}
        defaultValue="Yellow"
        data={["Red", "Yellow", "Blue", "Orange"]}
      />
    )
}
export default Top