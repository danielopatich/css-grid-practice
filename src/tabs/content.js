import React from 'react';
import '../App.css';

class Content extends React.Component {
    render(){
        return(
            <div className="tab-content">
            	{this.props.currentTab === 1 ?
                <div className="about">
                <h3>Description</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo orci, facilisis sit amet risus sed, tempor pretium velit. Nulla nec orci eleifend, dictum purus non, iaculis nunc. Maecenas a felis non velit congue porttitor in sit amet nunc. Donec quis ultrices magna, sagittis porttitor erat. Vestibulum ullamcorper elit lorem, sit amet semper magna tristique vel. Etiam vitae orci non libero aliquet porta. Nunc lacinia finibus facilisis. Pellentesque ac porta eros, eu pulvinar mi. Pellentesque eget mauris posuere est vulputate ullamcorper vitae eget tortor. Cras iaculis massa eget nunc rutrum placerat. Donec viverra pellentesque scelerisque. Phasellus iaculis lectus imperdiet feugiat condimentum.
                Nulla ornare, erat nec ultricies suscipit, justo lorem consequat velit, auctor sollicitudin nibh dui nec nulla. Suspendisse sed porttitor lacus, in molestie justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed libero at lectus dictum tempus. Aenean pretium ac nisl vitae aliquam. Aenean vehicula sit amet risus id ultrices. Sed posuere purus a sem placerat, eget malesuada sem mollis. Pellentesque a tristique libero.
                </div>
            	:null}

            	{this.props.currentTab === 2 ?
              	<div className="activity-plan">
                  <h3>Activity Plan</h3>
                  Proin at ante ligula. Donec bibendum sed elit in elementum. Etiam ut nunc enim. Aenean et justo vestibulum, condimentum urna vel, gravida sapien. Curabitur ultricies leo sit amet aliquam blandit. Cras quam lacus, bibendum a sapien sed, dictum mollis urna. Fusce elementum sem eget iaculis dapibus. Nullam non vehicula enim. Vivamus egestas, sem a porttitor fermentum, felis turpis luctus dui, vel pretium ante nibh et quam. Duis a sem diam. Praesent ultricies metus a eros fermentum, quis venenatis tellus rutrum.
                  Curabitur aliquam magna sed elit tristique elementum. Phasellus dignissim turpis et mauris iaculis, gravida efficitur est auctor. Pellentesque quis lorem ac tellus tristique aliquam sed et sem. Nulla faucibus eget mauris sit amet pretium. Ut efficitur vitae ante mattis laoreet. Pellentesque porttitor tempus lorem sed mollis. In sollicitudin turpis vel convallis condimentum. Fusce ipsum turpis, gravida vitae efficitur id, gravida ut ipsum. Nunc accumsan lectus ipsum, sagittis auctor neque ultricies ac. Nunc vitae ex quis neque suscipit elementum in sit amet ipsum. Fusce tempor fermentum ex, ut aliquet quam fermentum eget. Mauris consectetur a felis rhoncus dignissim. Integer augue sem, lacinia non iaculis eu, tristique ac tortor. Vestibulum placerat ex eu est facilisis hendrerit. Sed nisi turpis, semper eu enim tincidunt, egestas lacinia est. Quisque ut aliquam odio.
              	</div>
            	:null}

            	{this.props.currentTab === 3 ?
  	            <div className="examples">
                  <h3>Examples</h3>
                  Nulla massa quam, dictum at pellentesque ut, imperdiet vitae erat. Nam nec tortor nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sollicitudin faucibus urna varius interdum. Sed ut tortor congue, efficitur risus non, tristique lectus. Suspendisse tincidunt, odio non posuere imperdiet, libero magna ultrices neque, elementum tristique turpis sem id massa. Donec urna purus, pulvinar id ipsum non, maximus congue ipsum. Curabitur euismod mollis cursus. Fusce eget augue eget metus congue venenatis vitae interdum quam. Nullam et cursus dolor. Suspendisse a hendrerit arcu, ut auctor sapien.
              	</div>
            	:null}
            </div>
        );
    }
};

export default Content;
