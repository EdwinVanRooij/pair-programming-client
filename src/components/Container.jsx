import React from 'react';
import PagePickContainer from './picker/PagePickContainer';
import Timeline from './page/timeline/Timeline';
import Profile from './page/profile/Profile';
import '../foundation.min.css';

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

        this.handleTimeline = this.handleTimeline.bind(this);
        this.handleProfile = this.handleProfile.bind(this);
        this.handleHomeClick = this.handleHomeClick.bind(this);
    }

    handleTimeline() {
        this.setState({currentScreen: 'timeline'});
    }

    handleProfile() {
        this.setState({currentScreen: 'profile'});
    }

    handleHomeClick() {
        this.setState({currentScreen: 'pagePicker'});
    }

    render() {
        switch (this.state.currentScreen) {
            case 'pagePicker': {
                return (
                    <div>
                        <PagePickContainer onTimelineClick={() => this.handleTimeline()}
                                           onProfileClick={() => this.handleProfile()}/>
                    </div>
                );
            }
            case 'timeline': {
                return (
                    <div>
                        <Timeline accountId="21"/>
                        <HomeButton className="home-button" onClick={() => this.handleHomeClick()}/>
                    </div>
                );
            }
            case 'profile': {
                return (
                    <div>
                        <Profile accountId="21"/>
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
