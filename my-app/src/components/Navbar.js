import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="container">
            <nav className="navbar navbar-dark navbar-fixed-top">
                <a className="navbar-brand justify-content-left">Navbar</a>
                        <button className="btn btn-outline-success btn-sm my-0 justify-content-right" type="button">Home</button>
            </nav>
            </div>

        )
    }
}

export default Navbar;