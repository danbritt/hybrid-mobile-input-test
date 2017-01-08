import React from 'react';
import ons from 'onsenui';
import {Meteor} from 'meteor/meteor';
import * as OnsenUI from 'react-onsenui';
import {Link} from 'react-router';

class OnsenUIPage extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            showDialog: false,
            showDrawer: false,
			text1: 'hjhjh',
            text1ErrorMsg: null,
			text2: null,
			text3: null,
			text4: ''
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
        console.log('render onsenui2');
        // console.log(this.state.text4);
        return (
            <OnsenUI.Splitter>
                <OnsenUI.SplitterSide
                    style={{
                        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
                    }}
                    width={'80%'}
                    onClose={() => {this.setState({showDrawer: false})}}
                    side="left"
                    collapse={true}
                    isSwipeable={false}
                    isOpen={this.state.showDrawer}
                    >
                    <OnsenUI.Page>
                        <p>
                            Drawer
                        </p>
                        <p>
                            <OnsenUI.Button onClick={this.toggleDrawer.bind(this)}><OnsenUI.Ripple />Close Drawer</OnsenUI.Button>
                        </p>
                    </OnsenUI.Page>
                </OnsenUI.SplitterSide>
                <OnsenUI.SplitterContent>
                    <OnsenUI.Page>
        				<p>
        					<Link to={'/'}>HOME</Link>
        				</p>
                        <p>
                            <OnsenUI.Input  type="text" placeholder="test1nx" float modifier="underbar"
                                value={this.state.text1} onChange={this.onText1Changed.bind(this)} onBlur={this.onText1Blur.bind(this)} />
                            <br/>
                            {this.state.text1ErrorMsg}
                            <br/>
                            <input value={this.state.text1} />
                        </p>
                        <p>
                            <OnsenUI.Input  type="text" placeholder="test2" float modifier="underbar"
                                value={this.state.text2} onChange={this.onText2Changed.bind(this)} />
                        </p>
                        <p>
                            <OnsenUI.Input  type="text" placeholder="test3" float modifier="underbar"
                                value={this.state.text3} onChange={this.onText3Changed.bind(this)} />
                        </p>
                        <p>
                            <input  type="text" placeholder="test4xx"
                                value={this.state.text4} onChange={this.onText4Changed.bind(this)} />
                        </p>
                        <p>
                            <OnsenUI.Input  type="text" placeholder="test4xx" float modifier="underbar"
                                value={this.state.text4} onChange={this.onText4Changed.bind(this)} />
                        </p>
                        <p>
                            <OnsenUI.Input  type="text" placeholder="test4xxt" float modifier="underbar"
                                value={undefined} onBlur={this.onText4Changed.bind(this)} />
                        </p>
                        <p>
                            <OnsenUI.Input  type="text" placeholder="not controlled" float modifier="underbar"
                                value={undefined} onChange={this.onText4Changed.bind(this)} />
                        </p>
                        <p>
                            <OnsenUI.Input  type="text" placeholder="no onchange" float modifier="underbar"
                                value={undefined} />
                        </p>
                        <p>
                            <OnsenUI.Button onClick={this.toggleDialog.bind(this)}><OnsenUI.Ripple />Open Dialog</OnsenUI.Button>
                        </p>
                        <p>
                            <OnsenUI.Button onClick={this.toggleDrawer.bind(this)}><OnsenUI.Ripple />Open Drawer</OnsenUI.Button>
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

                </OnsenUI.SplitterContent>
            </OnsenUI.Splitter>





        );
    }

    toggleDrawer() {
        this.setState({showDrawer: !this.state.showDrawer});
    }

    toggleDialog() {
        this.setState({showDialog: !this.state.showDialog, text4: 'howdy', text1: 'wahtsup'});
    }

    onText1Changed(event) {
        // var value = event.target.value;
        // var errorMsg = null;
        // if (value.length <= 3) {
        //     errorMsg = 'Has to be more than 3 chars';
        // }
        // if (this.state.text1ErrorMsg !== errorMsg) {
        //     this.setState({text1ErrorMsg: errorMsg});
        // }

        // This code shouldn't even work.
        // Inside the timer, the value shouldn't ever be different than what's in the state var... but it is
        // This does NOT work in material UI
        console.log('val: ' + event.target.value);
        Meteor.clearTimeout(this.timer);
        this.timer = Meteor.setTimeout(() => {
            var value = event.target.value;
            console.log('val2: ' + value);
            var errorMsg = null;
            if (value.length <= 3) {
                errorMsg = 'Has to be more than 3 chars';
            }
            this.setState({text1: value, text1ErrorMsg: errorMsg});
        }, 300);

    }

    onText1Blur(event) {
        // var value = event.target.value;
        // this.setState({text1: value});
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
