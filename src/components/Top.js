import React from "react"
import Combobox from "react-widgets/Combobox"
class Top extends React.Component {
    constructor (props) {
        super(props);

        this.list = null;
        this.d = ['Red', 'Yellow', 'Blue', 'Orange'];
    }

    handleClickEvent = function() {
        this.list = document.getElementById('list');
        this.list.click();
    };

    handleChangeEvent = function (e, box) {
       // box._currentValue = e;
        console.log(box);
    }

    render() {
        return (
          <Combobox
            data={this.d}
            defaultValue={'Yellow'}
            onClick={this.handleClickEvent.bind(this)}
            onChange={this.handleChangeEvent.bind(this)}
            defaultOpen={false}
            style={{width:'200px'}}
          />
        );
    }
}
export default Top