import React from 'react';

const button_style_bottom = {
    marginBottom: 0,
};

class Editor extends React.Component {
    render() {
        return (
            <div>
                <label>
                    <h5>Code: {this.props.code}</h5>
                    <textarea style={button_style_bottom} placeholder="Hello World!" cols="30" rows="10"/>
                </label>
            </div>
        );
    }
}

export default Editor;
