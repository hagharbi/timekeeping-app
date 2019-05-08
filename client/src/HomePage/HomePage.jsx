import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component {

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Welcome to Sumit!</h1>
                <p> Login or create a new account</p>
                <button className="btn btn-primary">
                    <Link to="/login">Login</Link>
                </button>
                <button className="btn btn-primary">
                    <Link to="/register">Create an Account</Link>
                </button>
            </div>
        );
    }
}

export default HomePage;