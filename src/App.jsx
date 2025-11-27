import React, { useState } from "react";

const GAME_DATA = [
  {
    id: "cat1",
    title: "ИСТОРИЯ И ФАКТЫ",
    color: "#1e3a8a",
    questions: [
      {
        id: "cat1-q200",
        price: 200,
        text: "Какой год считается годом первого празднования Дня Благодарения между пилигримами и индейцами?",
        options: ["А) 1492", "Б) 1621", "В) 1776"],
        answer: "Б) 1621",
      },
      {
        id: "cat1-q300",
        price: 300,
        text: "Как называлось судно, на котором пилигримы прибыли в Америку?",
        options: ["А) Санта-Мария", "Б) Мэйфлауэр", "В) Виктория"],
        answer: "Б) Мэйфлауэр",
      },
      {
        id: "cat1-q400",
        price: 400,
        text: "Какой президент США первым официально провозгласил День Благодарения национальным праздником?",
        options: [
          "А) Джордж Вашингтон",
          "Б) Авраам Линкольн",
          "В) Томас Джефферсон",
        ],
        answer: "Б) Авраам Линкольн (в 1863 году)",
      },
      {
        id: "cat1-q500",
        price: 500,
        text: "Пилигримы отправились в Америку в поисках религиозной свободы. Из какого города Англии они в основном были родом?",
        options: ["А) Лондон", "Б) Скруби", "В) Ливерпуль"],
        answer: "Б) Скруби",
      },
    ],
  },
  {
    id: "cat2",
    title: "ТРАДИЦИОННАЯ ЕДА",
    color: "#1e3a8a",
    questions: [
      {
        id: "cat2-q200",
        price: 200,
        text: "Какая птица является главным блюдом на столе в День Благодарения?",
        options: ["А) Утка", "Б) Гусь", "В) Индейка"],
        answer: "В) Индейка",
      },
      {
        id: "cat2-q300",
        price: 300,
        text: "Какой соус традиционно готовят из ягод и подают к индейке?",
        options: ["А) Томатный", "Б) Клюквенный", "В) Соус песто"],
        answer: "Б) Клюквенный",
      },
      {
        id: "cat2-q400",
        price: 400,
        text: "Какое блюдо, традиционно подаваемое на День Благодарения, представляет собой кусочки хлеба с пряностями, часто используемые для фаршировки индейки?",
        options: ["А) Краутбургер", "Б) Начос", "В) Стаффинг (Stuffing)"],
        answer: "В) Стаффинг (Stuffing)",
      },
      {
        id: "cat2-q500",
        price: 500,
        text: "Какой популярный десерт, часто подаваемый на День Благодарения, имеет тыквенную основу и обычно покрыт взбитыми сливками?",
        options: ["А) Чизкейк", "Б) Тыквенный пирог", "В) Яблочный штрудель"],
        answer: "Б) Тыквенный пирог",
      },
    ],
  },
  {
    id: "cat3",
    title: "СИМВОЛЫ И ТРАДИЦИИ",
    color: "#1e3a8a",
    questions: [
      {
        id: "cat3-q200",
        price: 200,
        text: "Что символизирует «Рог изобилия»?",
        options: [
          "А) Военную победу",
          "Б) Щедрость урожая и изобилие",
          "В) Морские путешествия",
        ],
        answer: "Б) Щедрость урожая и изобилие",
      },
      {
        id: "cat3-q300",
        price: 300,
        text: "Какой знаменитый парад транслируется по телевидению в Нью-Йорке в День Благодарения?",
        options: [
          "А) Парад Роз",
          "Б) Парад Мэйсис (Macy's Thanksgiving Day Parade)",
          "В) Карнавал в Рио",
        ],
        answer: "Б) Парад Мэйсис (Macy's Thanksgiving Day Parade)",
      },
      {
        id: "cat3-q400",
        price: 400,
        text: "Что традиционно делают с «индюшачьей вилкой» (wishbone)?",
        options: [
          "А) Украшают ей стол",
          "Б) Двое человек загадывают желание и ломают её; у кого осталась большая часть, у того сбудется желание",
          "В) Её отдают собаке",
        ],
        answer:
          "Б) Двое человек загадывают желание и ломают её; у кого осталась большая часть, у того сбудется желание",
      },
      {
        id: "cat3-q500",
        price: 500,
        text: "На следующий день после Дня Благодарения в США начинается период массовых покупок, известный как...",
        options: [
          "А) Киберпонедельник (Cyber Monday)",
          "Б) Чёрная пятница (Black Friday)",
          "В) День суперпродаж",
        ],
        answer: "Б) Чёрная пятница (Black Friday)",
      },
    ],
  },
  {
    id: "cat4",
    title: "БЛАГОДАРНОСТЬ И РАЗМЫШЛЕНИЯ",
    color: "#1e3a8a",
    questions: [
      {
        id: "cat4-q200",
        price: 200,
        text: "Какое чувство, по мнению психологов, активно развивается, когда человек регулярно практикует благодарность?",
        options: [
          "А) Чувство зависти",
          "Б) Чувство тревоги",
          "В) Чувство удовлетворённости и счастья",
        ],
        answer: "В) Чувство удовлетворённости и счастья",
      },
      {
        id: "cat4-q300",
        price: 300,
        text: "Практика «ведения дневника благодарности» предполагает, что человек...",
        options: [
          "А) Каждый день записывает все свои проблемы",
          "Б) Регулярно записывает вещи, за которые он благодарен",
          "В) Составляет список покупок на праздник",
        ],
        answer: "Б) Регулярно записывает вещи, за которые он благодарен",
      },
      {
        id: "cat4-q400",
        price: 400,
        text: "Согласно многим исследованиям, регулярное проявление благодарности положительно сказывается на...",
        options: [
          "А) Качестве сна и общем уровне стресса",
          "Б) Умении играть в шахматы",
          "В) Способности к быстрому бегу",
        ],
        answer: "А) Качестве сна и общем уровне стресса",
      },
      {
        id: "cat4-q500",
        price: 500,
        text: "Какая из этих фраз лучше всего отражает концепцию «быть благодарным за маленькие вещи»?",
        options: [
          "А) «Срывать звёзды с неба»",
          "Б) «Останавливаться, чтобы понюхать розы»",
          "В) «Плыть по течению»",
        ],
        answer: "Б) «Останавливаться, чтобы понюхать розы»",
      },
    ],
  },
  {
    id: "cat5",
    title: "КИНО И ЛИТЕРАТУРА",
    color: "#1e3a8a",
    questions: [
      {
        id: "cat5-q200",
        price: 200,
        text: "Какой известный комедийный актёр сыграл главную роль в фильме «Один дома», который часто смотрят в сезон праздников, начинающийся с Дня Благодарения?",
        options: ["А) Джим Керри", "Б) Маколей Калкин", "В) Эдди Мерфи"],
        answer: "Б) Маколей Калкин",
      },
      {
        id: "cat5-q300",
        price: 300,
        text: "В какой известной детской сказке главный герой, превращённый в осла, попадает на Поле Чудес, где царит атмосфера псевдо-благодарности и надежды на богатый урожай?",
        options: [
          "А) «Золотой ключик, или Приключения Буратино»",
          "Б) «Конёк-Горбунок»",
          "В) «Винни-Пух»",
        ],
        answer: "А) «Золотой ключик, или Приключения Буратино»",
      },
      {
        id: "cat5-q400",
        price: 400,
        text: "В каком популярном ситкоме есть эпизод, где друзья играют в регби на День Благодарения, и эта игра становится традицией?",
        options: [
          "А) «Друзья»",
          "Б) «Теория Большого взрыва»",
          "В) «Как я встретил вашу маму»",
        ],
        answer: "А) «Друзья»",
      },
      {
        id: "cat5-q500",
        price: 500,
        text: "В каком культовом фильме герой пытается добраться домой к семье во время праздничной суеты, что перекликается с темой семейного единства в День Благодарения?",
        options: [
          "А) «Самолётом, поездом и автомобилем»",
          "Б) «Аэроплан!»",
          "В) «Неспящие в Сиэтле»",
        ],
        answer:
          "А) «Самолётом, поездом и автомобилем» (с Джоном Кэнди и Стивом Мартином)",
      },
    ],
  },
  {
    id: "cat6",
    title: "НАУКА И УРОЖАЙ",
    color: "#1e3a8a",
    questions: [
      {
        id: "cat6-q200",
        price: 200,
        text: "Какой витамин в большом количестве содержится в тыкве, традиционном осеннем овоще, и полезен для зрения?",
        options: ["А) Витамин C", "Б) Витамин A", "В) Витамин K"],
        answer: "Б) Витамин A",
      },
      {
        id: "cat6-q300",
        price: 300,
        text: "Почему осенью листья на деревьях меняют цвет с зелёного на жёлтый и красный?",
        options: [
          "А) Их красят дожди",
          "Б) Из-за уменьшения количества солнечного света и разрушения хлорофилла",
          "В) Из-за того, что дерево «засыпает»",
        ],
        answer:
          "Б) Из-за уменьшения количества солнечного света и разрушения хлорофилла",
      },
      {
        id: "cat6-q400",
        price: 400,
        text: "Что из перечисленного НЕ является осенним плодом или овощем?",
        options: ["А) Баклажан", "Б) Кабачок", "В) Арбуз"],
        answer: "В) Арбуз (это летняя ягода)",
      },
      {
        id: "cat6-q500",
        price: 500,
        text: "Какое вещество в индейке часто, хоть и ошибочно, обвиняют в том, что оно вызывает сонливость после сытного ужина?",
        options: ["А) Мелатонин", "Б) Триптофан", "В) Серотонин"],
        answer: "Б) Триптофан",
      },
    ],
  },
];

function App() {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleQuestionClick = (question, category) => {
    if (usedQuestionIds.includes(question.id)) {
      return;
    }
    setActiveQuestion({
      ...question,
      categoryTitle: category.title,
      categoryColor: category.color,
    });
    setShowAnswer(false);
  };

  const handleCloseCard = () => {
    if (activeQuestion && !usedQuestionIds.includes(activeQuestion.id)) {
      setUsedQuestionIds((prev) => [...prev, activeQuestion.id]);
    }
    setActiveQuestion(null);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const isUsed = (id) => usedQuestionIds.includes(id);

  return (
    <div className="app-root">
      <div className="background-gradient"></div>

      <header className="header">
        <div className="header-title-block">
          <h1 className="header-title">СВОЯ ИГРА</h1>
          <p className="header-subtitle">
            Тематический выпуск: День Благодарения и благодарность
          </p>
        </div>
        <div className="header-info">
          {/* <span className="header-tag">Статическая игра</span>
          <span className="header-tag">Без подсчёта баллов и таймера</span> */}
        </div>
      </header>

      <main className="board-wrapper">
        <div className="board">
          {GAME_DATA.map((category) => (
            <div
              className="board-row"
              key={category.id}
              style={{
                gridTemplateColumns: `2.2fr repeat(${category.questions.length}, 1fr)`,
              }}
            >
              <div className="category-cell">
                <span className="category-cell-text">{category.title}</span>
              </div>
              {category.questions.map((question) => {
                const used = isUsed(question.id);
                return (
                  <button
                    key={question.id}
                    className={`price-cell ${used ? "price-cell-used" : ""}`}
                    onClick={() => handleQuestionClick(question, category)}
                    disabled={used}
                  >
                    <span className="price-cell-text">
                      {used ? "" : question.price}
                    </span>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </main>

      {/* <footer className="footer">
        <p className="footer-text">
          Подсказка ведущему: после закрытия карточки вопрос становится
          недоступен и «гаснет» на игровом поле.
        </p>
      </footer> */}

      {activeQuestion && (
        <div className="overlay">
          <div className="overlay-backdrop" onClick={handleCloseCard}></div>
          <div className="question-card">
            <div className="question-card-header">
              <div className="question-card-category">
                {activeQuestion.categoryTitle}
              </div>
              <div className="question-card-price">{activeQuestion.price}</div>
              <button className="question-card-close" onClick={handleCloseCard}>
                ✕
              </button>
            </div>

            <div className="question-card-body">
              <h2 className="question-card-title">ВОПРОС</h2>
              <p className="question-card-text">{activeQuestion.text}</p>

              {activeQuestion.options && (
                <ul className="question-options">
                  {activeQuestion.options.map((option) => (
                    <li key={option} className="question-option-item">
                      {option}
                    </li>
                  ))}
                </ul>
              )}

              <div className="answer-block">
                {!showAnswer ? (
                  <button
                    className="show-answer-button"
                    onClick={handleShowAnswer}
                  >
                    ПОКАЗАТЬ ОТВЕТ
                  </button>
                ) : (
                  <div className="answer-text-wrapper">
                    <h3 className="answer-title">ОТВЕТ</h3>
                    <p className="answer-text">{activeQuestion.answer}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="question-card-footer">
              <button className="close-card-button" onClick={handleCloseCard}>
                ЗАКРЫТЬ КАРТОЧКУ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
