import React from 'react';

import '../../foundation.min.css';


const row_item_style = {
    maxWidth: "60rem",
    marginRight: "auto",
    marginLeft: "auto",
};

const button_style_bottom = {
    marginBottom: 0,
};

const li_style = {
    margin: 0,
    padding: 0,
};

const ul_style = {
    listStyle: "none",
    margin: 0,
    padding: 0,
    fontSize: 0,
};

class PagePickContainer extends React.Component {

    render() {
        return (
            <div>
                <div style={row_item_style} className="callout small-12 column text-center">
                    <ul style={ul_style}>
                        <li style={li_style}>
                            <button className="button large primary large-centered expanded"
                                    onClick={this.props.onEditorClick}>
                                New Editor
                            </button>

                            {/*<PagePickItem class="page-pick-item" onClick={() => this.props.onTimelineClick()}*/}
                            {/*title={"Timeline"}*/}
                            {/*subtitle={"View your timeline"}/>*/}
                        </li>
                        <li>
                            <button style={button_style_bottom}
                                    className="button hollow large secondary large-centered expanded"
                                    onClick={this.props.onJoinEditorClick}>
                                Join Editor
                            </button>
                            {/*<PagePickItem class="page-pick-item" onClick={() => this.props.onProfileClick()}*/}
                            {/*title={"Profile"}*/}
                            {/*subtitle={"View your profile"}/>*/}
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default PagePickContainer;
