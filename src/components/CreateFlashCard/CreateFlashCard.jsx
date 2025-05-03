import './CreateFlashCard.css';

function CreateFlashCard() {
    return (
        <form className='create'>
            <h2 className='heading-s'>Создать карточку</h2>
            <div className="inputs-form">
                <div>
                    <label htmlFor="term">Термин</label>
                    <input type="text" placeholder='Введите термин' id='term' />
                </div>
                <div><label htmlFor="meaning">Значение</label>
                    <textarea id="meaning" placeholder='Введите значение'></textarea>
                </div>


            </div>
            <button className='btn-submit' type="submit">Создать карточку</button>
        </form>
    )
}

export default CreateFlashCard;