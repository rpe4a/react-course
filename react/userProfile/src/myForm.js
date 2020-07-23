import React from 'react';
import ReactDom from 'react-dom';
import Input from '@skbkontur/react-ui/Input';
import Button from '@skbkontur/react-ui/Button';
import Select from '@skbkontur/react-ui/Select';
import Gapped from '@skbkontur/react-ui/Gapped';
import Modal from '@skbkontur/react-ui/Modal';
import MyInput from './myInput.js'
import MySelect from './MySelect.js'
import './style.css';

const Gap = 20;
const Cities = ['One', 'Two', 'Three', 'Four'];

/**
 *  Итак, перед тобой пустой проект. Давай его чем-то заполним. Не стесняйся подсматривать в уже сделанные задачи,
 *  чтобы оттуда что-то скопировать.
 *
 *  1. Создай в файле index.html (он на уровень выше в файловой структуре) div с каким-нибудь id
 *  2. Импортируй сюда библиотеку React и ReactDom
 *  3. Отрендери "Hello world" на странице при помощи Реакта.
 *
 *  4. Добавь в разметку Button из библиотеки компонентов Контура (@skbkontur/react-ui).
 *     npm-пакет с библиотекой уже добавлен в проект.
 *
 *     Импортируется компонент на страницу так:
 *
 *     import Button from '@skbkontur/react-ui/Button';
 *
 *     Используется компонент так:
 *
 *     const MyApp = () => (
 *        <div>
 *            Click this button <Button onClick={() => console.log('Hey!')}>Click me</Button>
 *        </div>
 *     );
 *
 *
 *     Тут можно посмотреть, как компонентами пользоваться, какие у них атрибуты есть:
 *         http://tech.skbkontur.ru/react-ui/
 *
 *  5. Теперь, когда ты знаешь все основное, сверстай при помощи react-ui форму,
 *     как на картинке drafts/reactForm.png (можно открыть в браузере http://localhost:8080/drafts/reactForm.png)
 *     Для вертикальных отступов между элементами используй компонент Gapped из библиотеки.
 *     Если хочешь что-то стилизовать, используй файл style.css.
 *     Список городов придумай сам.
 *
 *  6. Сделай так, чтобы при клике по кнопке "Сохранить",
 *     показывалось модальное окно (компонент Modal из библиотеки) с текстом "Пользователь сохранен".
 *     выглядеть будет примерно как на картинке drafts/reactModal.png (http://localhost:8080/drafts/reactModal.png)
 *
 *  7. Сделай так, чтобы в той же модалке (в теле модального окна — Modal.Body) показывались изменения в полях.
 *     Смотри drafts/reactDiff.png (http://localhost:8080/drafts/reactDiff.png).
 *     Пример сообщения:
 *
 *       Измененные данные:
 *       Фамилия: было "Петров", стало "Петрова"
 *
 *     Для этого надо хранить где-то предыдущее (и текущее) значение. Придумай, как лучше это сделать.
 *
 *  8*. Необязательная задача.
 *      Сделай так, чтобы форма не сохранялась, если поле имя или фамилия не заполнено.
 *      Незаполненное поле должно анимацией покачаться из стороны в сторону (или придумай любой другой эффект).
 *
 *  9*. Необязательная задача.
 *      Добавь в эту форму еще поля: пол, дата рождения, город рождения, семейное положение,
 *      гражданство, национальность, номер телефона и адрес электронной почты.
 *      Придумай, как избежать излишнего дублирования.
 */

class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {modalOpened: false, saved: false, lastName: '', name: '', lastFamily: '', family: '', lastCity: '', city: ''}
	}

	render() {
        return (<Gapped gap={Gap} vertical>
            <h1>Информация о пользователе</h1>
            <div className="table">
                <MyInput label='Имя' onChange={(event) => this.setState({name: event.target.value})} />
                <MyInput label='Фамилия' onChange={(event) => this.setState({family: event.target.value})} />
                <MySelect label='Город' items={Cities} placeholder='Выберите город' onChange={(value) => this.setState({city: value})} />
            </div>
			<Button use="primary" onClick={this.open}>Primary</Button>
			{this.state.modalOpened && this.renderModal()}
        </Gapped>);
	}

	open = () => {
		this.setState({ modalOpened: true });
	}
	close = () => {
		this.setState({ modalOpened: false, saved: true, lastName: this.state.name, lastFamily: this.state.family, lastCity: this.state.city });
	}
	renderModal = () => {
		if (!this.state.saved)
			return (<Modal onClose={this.close}>
				<Modal.Header>Пользователь сохранен</Modal.Header>
			</Modal>);

		return (<Modal onClose={this.close}>
			<Modal.Header>Пользователь сохранен</Modal.Header>
			<Modal.Body>
				<div>Измененные данные:</div>
				{this.nameChanged() && <div>Имя: было {this.state.lastName}, стало: {this.state.name}</div>}
				{this.familyChanged() && <div>Фамилия: было {this.state.lastFamily}, стало: {this.state.family}</div>}
				{this.cityChanged() && <div>Город: было {this.state.lastCity}, стало: {this.state.city}</div>}
			</Modal.Body>
		</Modal>);
	}
	
	nameChanged = () => {return this.state.name !== this.state.lastName;}
	familyChanged = () => {return this.state.family !== this.state.lastFamily;}
	cityChanged = () => {return this.state.city !== this.state.lastCity;}
}

export default MyForm;