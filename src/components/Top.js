import React from "react"
import Combobox from "react-widgets/Combobox"
import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"
class Top extends React.Component {
    constructor (props) {
        super(props);

        this.list = null;

        countries.registerLocale(enLocale);

        this.countryObject = countries.getNames("en", {select: "official"});
        this.countryArr = Object.entries(this.countryObject).map(([key, value]) => { return {
            label: value,
            value: key
        }});

        console.log(this.countryArr);
    }

    handleClickEvent = function() {
        this.list = document.getElementById('list');
        this.list.click();
    };

    handleChangeEvent = function (e, box) {

    }

    render() {
        return (
          <Combobox
            data={this.countryArr}
            dataKey='value'
            textField='label'
            defaultValue={'DE'}
            onClick={this.handleClickEvent.bind(this)}
            onChange={this.handleChangeEvent.bind(this)}
            defaultOpen={false}
            style={{width:'200px'}}
          />
        );
    }
}
export default Top