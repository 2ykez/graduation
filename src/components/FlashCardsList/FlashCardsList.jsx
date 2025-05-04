import './FlashCardsList.css';

function FlashCardsList({ words }) {

    if (words.length === 0) {
        return (
            <div className="empty-list">
                <p className='empty-text'>Вы пока не создали ни одной карточки. Чтобы это сделать, нажмите на кнопку:</p>
                <button className='btn__create-word'>Создать карточку</button>
            </div>
        )
    } else {
        return (
            <h1>Hello world</h1>
        )
    }

}

export default FlashCardsList;