import React from 'react';
import ons from 'onsenui';
import * as OnsenUI from 'react-onsenui';
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
            <OnsenUI.Page>
				<p>
					<Link to={'/'}>HOME</Link>
				</p>
                <p>
                    <OnsenUI.Input  type="text" placeholder="controlled text1" float modifier="underbar"
                        value={this.state.text1} onChange={this.onText1Changed.bind(this)} />
                </p>
                <p>
                    <OnsenUI.Input  type="text" placeholder="controlled text2" float modifier="underbar"
                        value={this.state.text2} onChange={this.onText2Changed.bind(this)} />
                </p>
                <p>
                    <OnsenUI.Input  type="text" placeholder="controlled text3" float modifier="underbar"
                        value={this.state.text3} onChange={this.onText3Changed.bind(this)} />
                </p>
                <p>
                    <OnsenUI.Input  type="text" placeholder="Not controlled" float modifier="underbar"
                        value={undefined} onChange={this.onText4Changed.bind(this)} />
                </p>
                <p>
                    <OnsenUI.Input  type="text" placeholder="Not controlled/no onchange" float modifier="underbar" style={{width: '300px'}}
                        value={undefined} />
                </p>
                <p>
                    <OnsenUI.Button onClick={this.toggleDialog.bind(this)}><OnsenUI.Ripple />Open Dialog</OnsenUI.Button>
                </p>

                <OnsenUI.AlertDialog
                    isOpen={this.state.showDialog}
                    isCancelable={false}>
                    <div className="alert-dialog-title">
                        Test Dialog
                    </div>
                    <div className="alert-dialog-content">

                    </div>
                    <div className="alert-dialog-footer">
                        <button onClick={this.toggleDialog.bind(this)} className="alert-dialog-button">
                            OK
                        </button>
                    </div>
                </OnsenUI.AlertDialog>
            </OnsenUI.Page>

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
