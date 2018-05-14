import React from 'react';
import PagePickContainer from './picker/PagePickContainer';
import Editor from './page/editor/Editor';
import JoinEditor from './page/joineditor/JoinEditor';
import '../foundation.min.css';

const background_color_title = {
    backgroundColor: "#074E68",
};
const title_style = {
    color: "white",
};

function HomeButton(props) {
    return (
        <div className="row">
            <div className="small-6 small-centered text-center columns">
                <button className="button hollow large secondary large-centered"
                        onClick={props.onClick}>Home
                </button>
            </div>
        </div>
    )
}

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentScreen: 'pagePicker',
        };

        this.handleEditor = this.handleEditor.bind(this);
        this.handleJoinEditor = this.handleJoinEditor.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
    }

    handleEditor() {
        this.setState({currentScreen: 'editor'});
    }

    handleJoinEditor() {
        this.setState({currentScreen: 'joinEditor'});
    }

    handleHomeClick() {
        this.setState({currentScreen: 'pagePicker'});
    }

    renderTitle() {
        return (
            <div>
                <div className="callout large" style={background_color_title}>
                    <h1 style={title_style}>Pair Programming</h1>
                </div>
            </div>
        )
    }

    render() {
        switch (this.state.currentScreen) {
            case 'pagePicker': {
                return (
                    <div>
                        {this.renderTitle()}
                        <PagePickContainer onEditorClick={() => this.handleEditor()}
                                           onJoinEditorClick={() => this.handleJoinEditor()}/>
                    </div>
                );
            }
            case 'editor': {
                return (
                    <div>
                        {this.renderTitle()}
                        <Editor/>
                        <HomeButton className="home-button" onClick={() => this.handleHomeClick()}/>
                    </div>
                );
            }
            case 'joinEditor': {
                return (
                    <div>
                        {this.renderTitle()}
                        <JoinEditor/>
                        <HomeButton className="home-button" onClick={() => this.handleHomeClick()}/>
                    </div>
                );
            }
            default: {
                console.log('Could not find out which screen to be at, it\'s ' + this.state.currentScreen + ' rn');
                break;
            }
        }
    }
}

export default Container;
