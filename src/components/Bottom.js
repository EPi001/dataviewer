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
        const container = document.getElementById('root');
        let _filter = container.filter;

//        console.log(_filter);

        let out = data;

        if(typeof _filter !== "undefined") {
            out = data.filter((d) => d.location.includes("country=" + _filter.label)).map((d) => {
                d.location = d.location.replace("country=" + _filter.label, "country=" + "<b>" + _filter.label + "</b>");
                return d; });
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
            <div id="list" style={{width:'1200px', height:'500px', overflow:'auto', margin:'150px 0 0 0'}} onClick={this.handleClickEvent.bind(this)}>
              <ul>
                { this.state.data.map((d, index) => { let txt = d.name + d.location; return (<li dangerouslySetInnerHTML={{__html: txt}} key={index}></li>); }) }
              </ul>
            </div>
        );
    }
}
export default Bottom