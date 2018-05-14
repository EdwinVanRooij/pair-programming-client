import React from 'react';

import '../../foundation.min.css';

const background_color_title = {
    backgroundColor: "#074E68",
};
const title_style = {
    color: "white",
};

const row_item_style = {
    maxWidth: "60rem",
    marginRight: "auto",
    marginLeft: "auto",
};

const button_style = {
    margin: "0.5rem",
};

class PagePickContainer extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div className="callout large" style={background_color_title}>
                        <h1 style={title_style}>Pair Programming</h1>
                    </div>
                </div>
                <div className="row align-center" style={row_item_style}>
                    <ul className="callout no-bullet small-12 column text-center">
                        <li>
                            <button style={button_style} className="button large primary large-centered"
                                    onClick={this.props.onClickNewEditor}>
                                New Editor
                            </button>

                            {/*<PagePickItem class="page-pick-item" onClick={() => this.props.onTimelineClick()}*/}
                            {/*title={"Timeline"}*/}
                            {/*subtitle={"View your timeline"}/>*/}
                        </li>
                        <li>
                            <button style={button_style} className="button hollow large secondary large-centered"
                                    onClick={this.props.onClickJoinEditor}>
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
