import React from 'react';
import * as MUI from 'material-ui';
import {Link} from 'react-router';

class OnsenUIPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showDialog: false,
			text1: null,
			text2: null,
			text3: null,
			text4: null
        }
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
				<div>
					<Link to={'/'}>HOME</Link>
				</div>
                <div>
					<MUI.TextField floatingLabelText="controlled text1" value={this.state.text1} onChange={this.onText1Changed.bind(this)} />
                </div>
                <div>
					<MUI.TextField floatingLabelText="controlled text2" value={this.state.text2} onChange={this.onText2Changed.bind(this)} />
                </div>
				<div>
					<MUI.TextField floatingLabelText="controlled text3" value={this.state.text3} onChange={this.onText3Changed.bind(this)} />
                </div>
				<div>
					<MUI.TextField floatingLabelText="Not controlled" value={undefined} onChange={this.onText4Changed.bind(this)} />
                </div>
                <div>
					<MUI.TextField floatingLabelText="Not controlled/No onchange" value={undefined} />
                </div>
                <div>
                    <MUI.RaisedButton label="Open Dialog" primary onTouchTap={this.toggleDialog.bind(this)} />
                </div>

                <MUI.Dialog title="Test Dialog" modal open={this.state.showDialog}
                            actions={[
                                <MUI.FlatButton label="OK" primary onTouchTap={this.toggleDialog.bind(this)} />
                            ]}>
                </MUI.Dialog>
            </div>

        );
    }

    toggleDialog() {
        this.setState({showDialog: !this.state.showDialog});
    }

    onText1Changed(event) {
        var value = event.target.value;
		this.setState({text1: value});

    }

	onText2Changed(event) {
        var value = event.target.value;
		this.setState({text2: value});
    }

	onText3Changed(event) {
        var value = event.target.value;
		this.setState({text3: value});
    }

	onText4Changed(event) {
        var value = event.target.value;
		this.setState({text4: value});
    }

}



export default OnsenUIPage;
