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
            <div className='list__words'>
                <h2>Мои карточки</h2>
                <ul className='list'>
                    <li><div className="word">
                        <div className="word__meaning">
                            <p className='term'>{words[0].word}</p>
                            <p className='meaning'>{words[0].meaning}</p>
                        </div>
                        <button className='delete'>Удалить</button>
                    </div>
                    </li>
                    <li><div className="word">
                        <div className="word__meaning">
                            <p className='term'>{words[1].word}</p>
                            <p className='meaning'>{words[1].meaning}</p>
                        </div>
                        <button className='delete'>Удалить</button>
                    </div>
                    </li>
                </ul>
            </div>
        )
    }

}

export default FlashCardsList;