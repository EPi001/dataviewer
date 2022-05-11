import React from 'react'
class Bottom extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            data: []
        };

       this.getData();
    }

    getData() {
        fetch("http://localhost:8080/user/data/", {mode:'cors'})
            .then((response) => response.json())
            .then((value) => this.setState({ data: this.filterData(value) }))
            .then(this.render());
    }

    filterData(data) {
        this.list = document.getElementById('list');
        var _filter = this.list.filter

        console.log(_filter);

        var out = data;

        if(_filter !== "undefined") {
            out = data.filter((d) => d.location.includes(_filter)).map((d) => { return d; });
        }

        return out;
    }

    handleClickEvent(e) {
        if (typeof e !== "undefined") {
            this.getData();
        }
    }

    render () {
        if (typeof this.state.data.map !== "function") return;
        return (
            <div id="list" style={{width:'1200px', height:'200px', overflow:'auto', margin:'150px 0 0 0'}} onClick={this.handleClickEvent.bind(this)} filter="">
              <ul>
                { this.state.data.map((d, index) => { return (<li key={index}>{d.name} + {d.location}</li>); }) }
              </ul>
            </div>
        );
    }
}
export default Bottom