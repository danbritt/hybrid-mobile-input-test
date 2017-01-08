import React from 'react';
import {Link} from 'react-router';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //
    // }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
				<Link to={'/materialui'}>MaterialUI</Link> | <Link to={'/onsenui'}>OnsenUI</Link> | <Link to={'/onsenui2'}>OnsenUI 2</Link>
			</div>
        );
    }
}

Home.contextTypes = {
	router: React.PropTypes.object.isRequired
}


export default Home;
