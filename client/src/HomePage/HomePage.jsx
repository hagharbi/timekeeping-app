import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';



const Header = ({title}) => (<header>{title}</header>);
const Main = ({title}) => (<main>{title}</main>);
const Footer = ({title}) => (<footer>{title}</footer>);

class HomePage extends React.Component {

    render() {

        return (
            <div className="HomePage">
                <h4>sumit</h4>
         <header className="Header">{Header}</header>
         <Main className="Main">{Main}</Main>
         <Footer className="Footer">{Footer}</Footer>
            </div>
        );
    }
}



export { HomePage }; 

// const connectedHomePage = connect(mapStateToProps)(HomePage);
// export { connectedHomePage as HomePage }; 