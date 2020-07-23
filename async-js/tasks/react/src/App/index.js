import React from "react";
import "./styles.css";
import Button from "@skbkontur/react-ui/Button";
import { response } from "express";

/**
 * 1. Сделай так, чтобы количество кликов приходило с сервера, получай данные по урлу
 * http://localhost:3000/clickCount
 * Для запросов на наш локальный сервер не нужны никакие специальные заголовки, достаточно тех, которые формируются
 * автоматически.
 *
 * 2. Сделай так, чтобы параграф, показывающий количество кликов,
 * не показывался, пока данные с сервера не пришли.
 *
 * 3. Сделай так, чтобы при каждом клике по кнопке, на сервер отправлялся POST-запрос по адресу:
 * http://localhost:3000/addClick
 * Тело запроса пусть будет пустым.
 *
 * 4. Сделай оптимистичный рендер:
 *      - после клика по кнопке, сразу счетчик обновляется
 *      - Если с сервера вернулся результат без ошибок, то нужно проверить, что значение, вернувшееся с сервера
 *      такое же, как отправленное, если это не так, то обнови данные в стейте компонента, как на сервере.
 *      - Если с сервера вернулась ошибка, то верни значение как было до клика.
 *
 */

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickCount: 0,
    };
  }

   onClick = () => {
    const currentValue = this.state.clickCount;
    const futureValue = currentValue + 1;

    this.setState({
      clickCount: futureValue,
    });

    return fetch("http://localhost:3000/addClick", {
      method: "POST",
      body: "",
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw `Bad reques(code:${response.status}, status:${
          response.statusText
        })`;
      })
      .then((data) => {
        if (data.clickCount !== futureValue)
          this.setState({
            clickCount: data.clickCount,
          });
      })
      .catch((error) => {
        this.setState({
          clickCount: currentValue,
        });
      });
  };

  render() {
    return (
      <div className={"root"}>
        <Button onClick={this.onClick}>Click Me!</Button>
        {this.state.clickCount !== 0 && (
          <p>Click Count: {this.state.clickCount}</p>
        )}
      </div>
    );
  }
}

/**
 * 1. Получение данных делай в методе componentDidMount
 *
 * 2. Сделай начальное значение clickCount = null и в методе render проверяй, стало ли оно !== null
 *
 * API fetch:
 * GET: fetch(url).then(response => response.json())
 * POST: fetch(url, {method: 'POST'}).then(response => response.json())
 *
 */
