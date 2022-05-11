import React from "react"
import Combobox from "react-widgets/Combobox"
import countries from "i18n-iso-countries"
import enLocale from "i18n-iso-countries/langs/en.json"
class Top extends React.Component {
    constructor (props) {
        super(props);

        countries.registerLocale(enLocale);

        this.countryObject = countries.getNames("en", {select: "official"});
        this.countryArr = Object.entries(this.countryObject).map(([key, value]) => { return {
            label: value,
            value: key
        }});

//        console.log(this.countryArr);

        this.state = {_filter: { locale: "DE", label: "Germany" }};

        this.init();
    }

    init = function() {
        const container = document.getElementById('root');
        container.filter = this.state._filter;
    }

    handleClickEvent = function(e) {
        const container = document.getElementById('root');
        container.filter = this.state._filter;

//        console.log(this.state._filter);
    };

    handleChangeEvent = function(e) {
        this.state._filter.locale = e.value;
        this.state._filter.label = e.label;
        const container = document.getElementById('root');
        container.filter = this.state._filter;

        const list = document.getElementById('list');
        list.click();

//        console.log(this.state._filter);
    };

    render() {
        return (
          <Combobox
            data={this.countryArr}
            dataKey='value'
            textField='label'
            defaultValue={this.state._filter.locale}
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