import React from 'react';


const button_style_bottom = {
    marginBottom: 0,
};

class JoinEditor extends React.Component {

    constructor(props) {
        super(props);

        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const code = this.state.value;

        if (code.match(/^[a-zA-Z]+$/)) {
            alert('valid code ' + code)
        } else {
            alert('invalid code ' + code)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <h5>
                            Code
                        </h5>
                        <input placeholder="..." type="text" className="text-center" value={this.state.value}
                               onChange={this.handleChange}/>
                    </label>
                    <input className="button primary" style={button_style_bottom} type="submit" value="Submit"/>
                </form>
            </div>
        );
    }
}

export default JoinEditor;
