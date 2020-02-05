import React from 'react'
import { Switch, Route, Link, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'
import Octicon from "react-component-octicons";


function Contact () {
    const location = useLocation()
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })
    const Call = () => (
        <div className="link rounded-pill text-decoration-none p-2 d-flex justify-content-around" style={{ background: 'red'}}>
            <Link className="innerLink" to="/contact/b">Call</Link>
            <Octicon name="device-mobile" zoom="20%" style={{color: 'black'}}/>

        </div>
    )

    const Us = () => (
        <div className="link rounded-pill text-decoration-none p-2" style={{ background: 'blue' }}>
            <Link to="/contact/c">Us</Link>
            <Octicon name="organization" zoom="100%" style={{color: 'black'}}/>
        </div>
    )

    const Now = () => (
        <div className="link rounded-pill text-decoration-none p-2 d-flex justify-content-around" style={{ background: 'green' }}>
            <Link to="/contact/a">Now</Link>
            <Octicon name="octoface" zoom="30%"/>
        </div>
    )

    return transitions.map(({ item: location, props, key }) => (
        <div className="contactUs" style={{background: 'black'}}>
            <animated.div key={key} style={props}>
                <Switch location={location}>
                    <Route path="/contact" exact component={Call} />
                    <Route path="/contact/a" exact component={Call} />
                    <Route path="/contact/b" exact component={Us} />
                    <Route path="/contact/c" exact component={Now} />
                </Switch>
            </animated.div>
            <div>
                <Octicon name="flame" zoom="100%" style={{color: 'blue'}}/>
            </div>
        </div>


    ))
}

export default Contact;
