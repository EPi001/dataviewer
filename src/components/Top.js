import React from "react"
import Combobox from "react-widgets/Combobox"
function Top() {
    return (
      <Combobox
        defaultValue="Yellow"
        data={["Red", "Yellow", "Blue", "Orange"]}
      />
    )
}
export default Top