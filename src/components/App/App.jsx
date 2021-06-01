import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header'
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true
        }
    }

    handleInputChange = (inputText) => {
        this.setState({headerExpanded: !inputText});
    }

    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} headerExpanded={this.state.headerExpanded} />
                <SearchBox onInputChange={this.handleInputChange} />
            </div>
        )
    }
}

export default App;
