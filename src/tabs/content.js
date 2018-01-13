import React from 'react';
import '../App.css';

class Content extends React.Component {
    render(){
        return(
            <div className="tab-content">
            	{this.props.currentTab === 1 ?
                <div className="about">
                  About
                </div>
            	:null}

            	{this.props.currentTab === 2 ?
              	<div className="activity-plan">
                  Activity Plan
              	</div>
            	:null}

            	{this.props.currentTab === 3 ?
  	            <div className="examples">
                  Examples
              	</div>
            	:null}
            </div>
        );
    }
};

export default Content;
