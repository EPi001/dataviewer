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

        var _that = this;

        this.getData = (async () => {
            var fetchData = await (function() {
                        return fetch("http://localhost:8080/user/data/", {mode:'cors'})
                        .then((response) => response.json())
                        .then((value) => fetchData=value)
                      })();

            _that.setState({ data: fetchData})

            return fetchData;
        })();
    }

    handleClickEvent(e) {
        if (typeof e !== "undefined") {
            e.preventDefault();
            e.stopPropagation();
            this.render();
        }
    }

    render () {
        return (
          <div id="list" onClick={this.handleClickEvent.bind(this)}>
              <ul>
                { this.state.data.map((d, index) => { return <li key="{index}">{d.name}</li> }) }
              </ul>
          </div>
        );
    }
}
export default Bottom