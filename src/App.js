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

  addCard = (newCard) => {
    this.setState(prevCards => ({
      words: [...prevCards.words, newCard]
    }));
  }

  onDeleteCard = (idToDelete) => {
    this.setState(prevCards => ({
      words: prevCards.words.filter(card => card.id !== idToDelete)
    }))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.words !== this.state.words || prevState.id !== this.state.id) {
      localStorage.setItem('flashcards', JSON.stringify(this.state.words));
      localStorage.setItem('flashcards_idCounter', JSON.stringify(this.state.id));
    }
  }

  componentDidMount() {
    const savedCards = localStorage.getItem('flashcards');
    if (savedCards) {
      try {
        this.setState({ words: JSON.parse(savedCards) });
      } catch (error) {
        console.error('Ошибка при разборе карточек из localStorage:', error);
      }
    }
  }

  render() {

    if (this.state.showForm) {
      return (
        <>
          <Header onShowForm={this.onShowForm} onShowList={this.onShowList} />
          <CreateFlashCard addCard={this.addCard} />
        </>
      )
    }

    return (
      <>
        <Header onShowForm={this.onShowForm} onShowList={this.onShowList} />
        <FlashCardsList words={this.state.words} onShowForm={this.onShowForm} onDeleteCard={this.onDeleteCard} />
      </>
    );
  }

}

export default App;


// { word: 'orange', meaning: 'the fruit of a tree in the family Rutaceae.' },
// { word: 'plum', meaning: 'an oval fleshy fruit which is purple' },
// { word: 'melon', meaning: ' any of various plants of the family Cucurbitaceae with sweet, edible, and fleshy fruit.' }