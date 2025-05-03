import btnCreate from '../../assets/btn-plus.svg';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <ul>
                <li>
                    <button className='list__cards'>Мои карточки</button>
                </li>
                <li><h1 className='heading'>Flash
                    <br />Quiz</h1></li>
                <li><div className="btn-create">
                    <img src={btnCreate} alt="create flashcard" />
                    <p>Создать <br />  карточку</p>
                </div>
                </li>
            </ul>
        </header>
    )
}

export default Header;