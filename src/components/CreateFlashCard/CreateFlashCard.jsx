import { Component } from 'react';

import './CreateFlashCard.css';

class CreateFlashCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            word: '',
            meaning: '',
            id: 0
        }
    }

    onChangeTerm = (e) => {
        this.setState({
            word: e.target.value
        })
    }

    onChangeMeaning = (e) => {
        this.setState({
            meaning: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const { word, meaning, id } = this.state;
        this.props.addCard({ word, meaning, id });
        console.log('hi');
        this.setState({
            word: '',
            meaning: '',
            id: id + 1
        })
    }

    render() {
        return (
            <form className='create' onSubmit={this.onSubmit}>
                <h2 className='heading-s'>Создать карточку</h2>
                <div className="inputs-form">
                    <div>
                        <label htmlFor="term">Термин</label>
                        <input type="text" placeholder='Введите термин' value={this.state.word} id='term' required onChange={this.onChangeTerm} />
                    </div>
                    <div><label htmlFor="meaning">Значение</label>
                        <textarea id="meaning" placeholder='Введите значение' value={this.state.meaning} required onChange={this.onChangeMeaning}></textarea>
                    </div>
                </div>
                <button className='btn-submit' type="submit">Создать карточку</button>
            </form>
        )
    }

}

export default CreateFlashCard;