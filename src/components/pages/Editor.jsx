import React from 'react';

const button_style_bottom = {
    marginBottom: 0,
};

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {code: 'default', text: ''};
    }

    componentDidMount() {
        if (this.props.code) {
            console.log("We have a code! It's '" + this.props.code + "'");
            this.setState({code: this.props.code})
        } else {
            console.log("We do not have a code. Requesting a new one.");
            fetch('http://localhost:4567/newEditor')
                .then(response => response.json())
                .then(jsonResponse => this.setState({code: jsonResponse.message}))
                .catch(error => console.error(error))
        }

        // Initiate WebSocket connection
        // this is an "echo" websocket service for testing pusposes
        this.connection = new WebSocket('ws://145.93.62.78:8085');
        // ws://145.93.62.78:8085

        // listen to onmessage event
        this.connection.onmessage = evt => {
            // add the new message to state
            this.setState({
                text: evt.data
            })
        };

        // for testing: sending a message to the echo service every 2 seconds,
        // the service sends it right back
        // setInterval(_ => {
        //     this.connection.send("samplemessage");
        // }, 2000)
    }

    render() {
        return (
            <div>
                <h5>Code: {this.state.code}</h5>
                <textarea value={this.state.text} id="textArea" style={button_style_bottom} placeholder="Hello World!"
                          cols="50" rows="25"/>
            </div>
        );
    }
}

export default Editor;
