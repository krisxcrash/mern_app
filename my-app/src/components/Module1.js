import React, {Component} from 'react';

class Module1 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row module-one-div" id="module1">
                    <div className="col-md-6 col-xs-12">
                    <div className="row">
                        <div className="text-section">
                            <h4 className="module-1-title">PROJECT</h4>
                            <p className="module-1-p">
                            Lorem ipsum dolor amet echo park retro. Hashtag unicorn vegan, vinyl brunch glossier man bun distillery hoodie enamel pin semiotics shaman shoreditch 90's hell of.
                            </p>
                            <p><a href="#" className="learn-more-link"><span className="learn-span">LEAR</span>N MORE</a></p>
                        </div>
                    </div>
                    <div className="row">
                        <h5>01.</h5>
                    </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="square"></div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Module1;