import React, { Component } from "react"
class Bottom extends Component {
    constructor (props) {
        super(props);

        this.state = {
            data: []
        };

        this.setState = function (d) {
            this.state = d;
        };

        var fetchData = (function() {
                    return fetch("http://localhost:8080/user/data/", {mode:'cors'})
                    .then((response) => response.json())
                    .then((value) => fetchData=value)
                  })();

        this.setState({ data: fetchData})
    }

    render () {
        var x = this.state.data.then(value => { x = value });

        console.log(x);

        return (
          <div>
              <ul>
                { x.map((d) => { return <li>{d.name}</li> }) }
              </ul>
          </div>
        );
    }
}
export default Bottom