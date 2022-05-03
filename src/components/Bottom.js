import React from 'react'
class Bottom extends React.Component {
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

            _that.setState({ data: fetchData});

            return fetchData;
        })();
    }

    handleClickEvent(e) {
        if (typeof e !== "undefined") {
            e.preventDefault();
            e.stopPropagation();

            var fetchData = this.getData;
            this.setState({ data: fetchData});
            this.forceUpdate();
        }
    }

    render () {
        var _that = this;
        return (
          <div id="list" onClick={_that.handleClickEvent.bind(this)}>
              <ul>
                { _that.state.data.map((d, index) => { return <li key={index}>{d.name}</li>; }) }
              </ul>
          </div>
        );
    }
}
export default Bottom