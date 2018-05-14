import React from 'react';

const button_style_bottom = {
    marginBottom: 0,
};

class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {code: 'default'};
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
    }

    render() {
        return (
            <div>
                <h5>Code: {this.state.code}</h5>
                <textarea id="textArea" style={button_style_bottom} placeholder="Hello World!" cols="50" rows="25"/>
            </div>
        );
    }
}

export default Editor;
