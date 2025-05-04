import { Component } from 'react';

import Header from './components/Header/Header';
import CreateFlashCard from './components/CreateFlashCard/CreateFlashCard';
import FlashCardsList from './components/FlashCardsList/FlashCardsList';

import './css-reset.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [{ word: 'hy', meaning: 're' }]
    }
  }

  render() {
    return (
      <>
        <Header />
        <FlashCardsList words={this.state.words} />
      </>

    );
  }

}

export default App;
