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
            .then((value) => this.setState({ data: value }))
            .then(this.render());
    }

    handleClickEvent(e) {
        if (typeof e !== "undefined") {
//            e.preventDefault();
//            e.stopPropagation();
            this.getData();
        }
    }

    render () {
        if (typeof this.state.data.map !== "function") return;
        return (
            <div id="list" style={{width:'500px', height:'200px', overflow:'auto', margin:'150px 0 0 0'}} onClick={this.handleClickEvent.bind(this)}>
              <ul>
                { this.state.data.map((d, index) => { return (<li key={index}>{d.name}</li>); }) }
              </ul>
            </div>
        );
    }
}
export default Bottom