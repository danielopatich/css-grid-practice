var tabList = [
    { 'id': 1, 'name': 'Mike', 'url': '/mike' },
    { 'id': 2, 'name': 'Donnie', 'url': '/donnie' },
    { 'id': 3, 'name': 'Raph', 'url': '/raph' },
    { 'id': 4, 'name': 'Leo', 'url': '/leo' }
];

var Tab = React.createClass({
    handleClick: function(e){
        e.preventDefault();
    	this.props.handleClick();
    },
    
    render: function(){
        return (
            <li className={this.props.isCurrent ? 'current' : null}>
            	<a onClick={this.handleClick} href={this.props.url}>
            		{this.props.name}
	            </a>
            </li>
        );
    }
});

var Tabs = React.createClass({
    handleClick: function(tab){
    	this.props.changeTab(tab);
    },
    
    render: function(){
        return (
            <nav>
                <ul>
                {this.props.tabList.map(tab => (
                     <Tab
                         key={tab.id}
                         handleClick={this.handleClick.bind(this, tab)}
                         url={tab.url}
                         name={tab.name}
                         isCurrent={(this.props.currentTab === tab.id)}
                     />
                 ))}
                 </ul>
            </nav>
        );
    }
});

var Content = React.createClass({
    render: function(){
        return(
            <div className="content">
            	{this.props.currentTab === 1 ?
                <div className="mike">
                    <img src="https://s.mltshp.com/r/104TN" />
                </div>
            	:null}

            	{this.props.currentTab === 2 ?
            	<div className="donnie">
            		<img src="https://s.mltshp.com/r/103AG" />
            	</div>
            	:null}

            	{this.props.currentTab === 3 ?
	            <div className="raph">
            		<img src="https://s.mltshp.com/r/1CC2L" />
            	</div>
            	:null}
            
            	{this.props.currentTab === 4 ?
            	<div className="leo">
            		<img src="https://s.mltshp.com/r/ZJPL" />
            	</div>
            	:null}
            </div>
        );
    }
});

var App = React.createClass({
	getInitialState: function () {        
        return {
            tabList: tabList,
            currentTab: 1
        };
    },

    changeTab: function(tab) {
        this.setState({ currentTab: tab.id });
    },

    render: function(){
        return(
            <div>
                <Tabs
            		currentTab={this.state.currentTab}
            		tabList={this.state.tabList}
            		changeTab={this.changeTab}
            	/>
            	<Content currentTab={this.state.currentTab} />
            </div>
        );
    }
});

React.render(
    <App />,
    document.body
);