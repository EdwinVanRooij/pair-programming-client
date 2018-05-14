import React from 'react';

import '../../foundation.min.css';
class PagePickItem extends React.Component {

    render() {
        return (
            <div className="game-pick-item" onClick={this.props.onClick}>
                <div className="row" >
                    <div className="columns small-4 medium-4 large-4 no-padding description-header">
                        <img alt="" src={this.props.imageUrl}/>
                    </div>
                    <div className="columns small-8 medium-8 large-8 ">
                        <div className="no-padding ">
                            <h1 className="text-center">{this.props.title}</h1>
                        </div>
                        <div className="description-footer">
                            <i>{this.props.subtitle}</i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PagePickItem;
