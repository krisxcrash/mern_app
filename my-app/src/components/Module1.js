import React, {Component} from 'react';

class Module1 extends Component {
    render() {
        return (
            <div className="container">
                <div className="row module-one-div" id="module1">
                    <div className="col-md-6 col-xs-12">
                    <div className="row">
                        <div className="col-md-8 col-xs-12">
                            <h3 className="module-1-title">PROJECT</h3>
                            <p className="module-1-p">
                            Lorem ipsum dolor amet echo park retro, DIY gochujang banjo artisan roof party activated charcoal aesthetic. 
                            </p>
                            <p><a href="#" className="learn-more-link"><span className="learn-span">LEAR</span>N MORE</a></p>
                        </div>
                    </div>
                    <div className="row">
                        <h4>01.</h4>
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