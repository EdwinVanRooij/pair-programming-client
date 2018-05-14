import React from 'react';

const button_style_bottom = {
    marginBottom: 0,
};

class Editor extends React.Component {
    render() {
        return (
            <div>
                <h5>Code: {this.props.code}</h5>
                <textarea id="textArea" style={button_style_bottom} placeholder="Hello World!" cols="50" rows="25"/>
            </div>
        );
    }
}

export default Editor;
