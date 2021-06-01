import React from 'react';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header'
import './App.css';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!'
        }
    }
    render() {
        return (
            <div>
                <Header headTitle={this.state.headerText} />
                <SearchBox />
            </div>
        )
    }
}

export default App;
