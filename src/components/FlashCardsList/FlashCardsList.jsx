import './FlashCardsList.css';

function FlashCardsList({ words, onShowForm, onDeleteCard }) {

    if (words.length === 0) {
        return (
            <div className="empty-list">
                <p className='empty-text'>Вы пока не создали ни одной карточки. Чтобы это сделать, нажмите на кнопку:</p>
                <button className='btn__create-word' onClick={onShowForm}>Создать карточку</button>
            </div>
        )
    } else {
        return (
            <div className='list__words'>
                <h2>Мои карточки</h2>
                <ul className='list'>
                    {words.map(card => (
                        <li key={card.id}><div className="word">
                            <div className="word__meaning">
                                <p className='term'>{card.word}</p>
                                <p className='meaning'>{card.meaning}</p>
                            </div>
                            <button className='delete' onClick={() => onDeleteCard(card.id)}>Удалить</button>
                        </div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

}

export default FlashCardsList;