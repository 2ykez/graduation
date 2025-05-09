import { Component } from 'react';
import { auth, db } from './firebase';
import { collection, addDoc, getDocs } from "firebase/firestore";

import Header from './components/Header/Header';
import CreateFlashCard from './components/CreateFlashCard/CreateFlashCard';
import FlashCardsList from './components/FlashCardsList/FlashCardsList';

import './css-reset.css';
import './App.css';
import { onAuthStateChanged } from 'firebase/auth';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      showList: false,
      loading: true,
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

  addCard = async (newCard) => {
    const user = auth.currentUser;
    if (user) {
      try {
        await addDoc(collection(db, `users/${user.uid}/cards`), newCard);
        console.log('Карточка добавлена в Firestore');
      } catch (error) {
        console.error('Ошибка при добавлении карточек:', error);
      }
    }
    this.setState(prevCards => ({
      words: [...prevCards.words, newCard]
    }));
  }

  onDeleteCard = (idToDelete) => {
    this.setState(prevCards => ({
      words: prevCards.words.filter(card => card.id !== idToDelete)
    }))
  }

  async componentDidMount() {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const querySnapshot = await getDocs(collection(db, `users/${user.uid}/cards`));
        const words = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        this.setState({ words, loading: false });
      } else {
        this.setState({ loading: false });
      }
    })
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
        <FlashCardsList words={this.state.words} onShowForm={this.onShowForm} onDeleteCard={this.onDeleteCard} />
      </>
    );
  }

}

export default App;


// { word: 'orange', meaning: 'the fruit of a tree in the family Rutaceae.' },
// { word: 'plum', meaning: 'an oval fleshy fruit which is purple' },
// { word: 'melon', meaning: ' any of various plants of the family Cucurbitaceae with sweet, edible, and fleshy fruit.' }