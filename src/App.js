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
      showForm: false,
      showList: false,
      words: []
    }
  }

  onShowForm = () => {
    this.setState({
      showForm: true,
      showList: false
    });
  }

  onShowList = () => {
    this.setState({
      showList: true,
      showForm: false,
    });
  }

  componentDidMount() {
    const savedCards = localStorage.getItem('flashcards_cards');
    if (savedCards) {
      try {
        this.setState({ words: JSON.parse(savedCards) });
      } catch (error) {
        console.error('Ошибка при разборе карточек из localStorage:', error);
      }
    }
  }

  saveToLocalStorage = (cards) => {
    localStorage.setItem('flashcards_cards', JSON.stringify(cards));
  };

  addCard = (card) => {
    this.setState(
      prevState => {
        const updatedCards = [...prevState.words, card];
        this.saveToLocalStorage(updatedCards);
        return { words: updatedCards };
      }
    );
  };

  deleteCard = (idToDelete) => {
    this.setState(
      prevState => {
        const updatedCards = prevState.words.filter(card => card.id !== idToDelete);
        this.saveToLocalStorage(updatedCards);
        return { words: updatedCards };
      }
    );
  };

  render() {

    if (this.state.showForm) {
      return (
        <>
          <Header onShowForm={this.onShowForm} onShowList={this.onShowList} />
          <CreateFlashCard addCard={this.addCard} />
        </>
      )
    }

    if (this.state.loading) {
      return (
        <>
          <Header onShowForm={this.onShowForm} onShowList={this.onShowList} />
          <h1>Loading...</h1>
        </>
      )
    }

    return (
      <>
        <Header onShowForm={this.onShowForm} onShowList={this.onShowList} />
        <FlashCardsList words={this.state.words} onShowForm={this.onShowForm} onDeleteCard={this.deleteCard} />
      </>
    );
  }

}

export default App;


// { word: 'orange', meaning: 'the fruit of a tree in the family Rutaceae.' },
// { word: 'plum', meaning: 'an oval fleshy fruit which is purple' },
// { word: 'melon', meaning: ' any of various plants of the family Cucurbitaceae with sweet, edible, and fleshy fruit.' }