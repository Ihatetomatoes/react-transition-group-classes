import React from 'react';
import logo from './assets/logo.svg';
import Card from './Card';
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Home = ({property}) => {

    return(
        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>React Transition Group classes breakdown.</h1>
            </section>
            
            <TransitionGroup className="card-container">
                <CSSTransition
                    key={property._id}
                    timeout={4500}
                    classNames="slide"
                >
                    <Card property={property} />
                </CSSTransition>
            </TransitionGroup>

        </div>   
    )
}

export default Home;