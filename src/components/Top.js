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

        this.state = {_filter: "Germany"};
    }

    handleClickEvent = function(e) {
        this.setState({_filter: e.target.value});
        this.list = document.getElementById('list');
        this.list.filter = this.state._filter;
        this.list.click();

        console.log(this.state._filter);
    };

    handleChangeEvent = function(e) {
        this.setState({_filter: e.label});
        this.list = document.getElementById('list');
        this.list.filter = this.state._filter;

        console.log(this.state._filter);
    };

    render() {
        return (
          <Combobox
            data={this.countryArr}
            dataKey='label'
            textField='label'
            defaultValue={this.state._filter}
            onClick={this.handleClickEvent.bind(this)}
            onChange={this.handleChangeEvent.bind(this)}
            defaultOpen={false}
            autoSelectMatches={true}
            style={{width:'200px'}}
          />
        );
    }
}
export default Top