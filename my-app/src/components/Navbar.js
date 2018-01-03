import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="pos-f-t">
                <div className="collapse" id="navbarToggleExternalContent">
                    <div className="bg-dark p-4">
                    <h4 className="text-white">Collapsed content</h4>
                    <span className="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
                <nav className="navbar navbar-dark bg-dark navbar-bg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="nav navbar-nav nav-ul">
                        <li className="nav-item">HOME</li>
                        <li className="nav-item">HOME</li>
                        <li className="nav-item">HOME</li>
                    </ul>
                </nav>
                </div>
            </div>

        )
    }
}

export default Navbar;