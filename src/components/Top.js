import React from "react"
import Combobox from "react-widgets/Combobox"
class Top extends React.Component {
    constructor (props) {
        super(props);

        this.list = null;
    }

    handleClickEvent = function() {
        this.list = document.getElementById('list');
        this.list.click();
    };

    render() {
        var _that = this;
        return (
          <Combobox
            onClick={_that.handleClickEvent.bind(_that)}
            defaultValue="Yellow"
            data={["Red", "Yellow", "Blue", "Orange"]}
          />
        );
    }
}
export default Top