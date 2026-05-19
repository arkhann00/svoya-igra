import React, { useEffect, useState } from "react";

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

const CSV_HEADER_ALIASES = {
  category: ["category", "theme", "topic", "категория", "тема"],
  price: ["price", "points", "стоимость", "цена", "очки"],
  question: ["question", "вопрос"],
  options: ["options", "варианты", "answers_options"],
  answer: ["answer", "правильный_ответ", "ответ"],
  color: ["color", "цвет"],
};

const DEFAULT_TEAM_COUNT = 2;
const DEFAULT_TEAM_SCORE = 0;

const cloneGameData = (source) =>
  source.map((category) => ({
    ...category,
    questions: category.questions.map((question) => ({
      ...question,
      options: question.options ? [...question.options] : null,
    })),
  }));

const createTeams = (count, initialScore) =>
  Array.from({ length: count }, (_, index) => ({
    id: `team-${index + 1}`,
    name: `Команда ${index + 1}`,
    score: initialScore,
  }));

const normalizeHeader = (value) => value.trim().toLowerCase();

const findColumnIndex = (headers, aliases) => {
  const normalizedHeaders = headers.map(normalizeHeader);
  const aliasesSet = new Set(aliases.map(normalizeHeader));
  return normalizedHeaders.findIndex((header) => aliasesSet.has(header));
};

const detectCsvDelimiter = (csvText) => {
  const firstLine = csvText.split(/\r?\n/, 1)[0] ?? "";
  const commas = (firstLine.match(/,/g) ?? []).length;
  const semicolons = (firstLine.match(/;/g) ?? []).length;
  return semicolons > commas ? ";" : ",";
};

const parseCsvRows = (csvText, delimiter) => {
  const rows = [];
  let currentRow = [];
  let currentCell = "";
  let insideQuotes = false;

  for (let index = 0; index < csvText.length; index += 1) {
    const char = csvText[index];

    if (char === '"') {
      const nextChar = csvText[index + 1];
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        index += 1;
      } else {
        insideQuotes = !insideQuotes;
      }
      continue;
    }

    if (char === delimiter && !insideQuotes) {
      currentRow.push(currentCell);
      currentCell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !insideQuotes) {
      if (char === "\r" && csvText[index + 1] === "\n") {
        index += 1;
      }
      currentRow.push(currentCell);
      currentCell = "";
      if (currentRow.some((cell) => cell.trim().length > 0)) {
        rows.push(currentRow);
      }
      currentRow = [];
      continue;
    }

    currentCell += char;
  }

  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell);
    if (currentRow.some((cell) => cell.trim().length > 0)) {
      rows.push(currentRow);
    }
  }

  return rows;
};

const parseScoreValue = (value, fallback = 0) => {
  const parsed = Number(value);
  if (!Number.isFinite(parsed)) {
    return fallback;
  }
  return Math.trunc(parsed);
};

const buildGameDataFromCsv = (csvText) => {
  const delimiter = detectCsvDelimiter(csvText);
  const rows = parseCsvRows(csvText, delimiter);

  if (rows.length < 2) {
    throw new Error("CSV пустой или не содержит вопросов.");
  }

  const headers = rows[0];
  const categoryIndex = findColumnIndex(headers, CSV_HEADER_ALIASES.category);
  const priceIndex = findColumnIndex(headers, CSV_HEADER_ALIASES.price);
  const questionIndex = findColumnIndex(headers, CSV_HEADER_ALIASES.question);
  const answerIndex = findColumnIndex(headers, CSV_HEADER_ALIASES.answer);
  const optionsIndex = findColumnIndex(headers, CSV_HEADER_ALIASES.options);
  const colorIndex = findColumnIndex(headers, CSV_HEADER_ALIASES.color);

  if (categoryIndex === -1 || priceIndex === -1 || questionIndex === -1 || answerIndex === -1) {
    throw new Error(
      "Нужны столбцы: category, price, question, answer (options и color - опционально)."
    );
  }

  const categories = new Map();
  let categoryCounter = 0;
  let questionCounter = 0;

  for (let rowIndex = 1; rowIndex < rows.length; rowIndex += 1) {
    const row = rows[rowIndex];

    if (!row || row.every((cell) => !cell || cell.trim() === "")) {
      continue;
    }

    const categoryTitle = (row[categoryIndex] ?? "").trim();
    const questionText = (row[questionIndex] ?? "").trim();
    const answerText = (row[answerIndex] ?? "").trim();
    const rawPrice = (row[priceIndex] ?? "").trim().replace(",", ".");
    const parsedPrice = Number(rawPrice);
    const lineNumber = rowIndex + 1;

    if (!categoryTitle || !questionText || !answerText || !Number.isFinite(parsedPrice)) {
      throw new Error(
        `Ошибка в строке ${lineNumber}: проверьте поля category, price, question и answer.`
      );
    }

    if (!categories.has(categoryTitle)) {
      categoryCounter += 1;
      categories.set(categoryTitle, {
        id: `cat-imported-${categoryCounter}`,
        title: categoryTitle,
        color: "#1e3a8a",
        questions: [],
      });
    }

    const category = categories.get(categoryTitle);
    const colorValue = colorIndex === -1 ? "" : (row[colorIndex] ?? "").trim();
    if (colorValue) {
      category.color = colorValue;
    }

    const optionsRaw = optionsIndex === -1 ? "" : row[optionsIndex] ?? "";
    const options = optionsRaw
      .split("|")
      .map((option) => option.trim())
      .filter(Boolean);

    questionCounter += 1;
    category.questions.push({
      id: `imported-q-${questionCounter}`,
      price: Math.trunc(parsedPrice),
      text: questionText,
      options: options.length > 0 ? options : null,
      answer: answerText,
    });
  }

  const importedData = Array.from(categories.values())
    .map((category) => ({
      ...category,
      questions: category.questions.sort((left, right) => left.price - right.price),
    }))
    .filter((category) => category.questions.length > 0);

  if (importedData.length === 0) {
    throw new Error("CSV не содержит валидных вопросов для игры.");
  }

  return importedData;
};

function App() {
  const [gameData, setGameData] = useState(() => cloneGameData(GAME_DATA));
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [usedQuestionIds, setUsedQuestionIds] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [teamCountInput, setTeamCountInput] = useState(DEFAULT_TEAM_COUNT);
  const [teamScoreInput, setTeamScoreInput] = useState(DEFAULT_TEAM_SCORE);
  const [teams, setTeams] = useState(() =>
    createTeams(DEFAULT_TEAM_COUNT, DEFAULT_TEAM_SCORE)
  );
  const [importStatus, setImportStatus] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState("team-1");

  useEffect(() => {
    if (teams.length === 0) {
      setSelectedTeamId(null);
      return;
    }

    if (!teams.some((team) => team.id === selectedTeamId)) {
      setSelectedTeamId(teams[0].id);
    }
  }, [teams, selectedTeamId]);

  const maxQuestionCount = Math.max(
    1,
    ...gameData.map((category) => category.questions.length)
  );
  const totalQuestions = gameData.reduce(
    (total, category) => total + category.questions.length,
    0
  );
  const selectedTeam = teams.find((team) => team.id === selectedTeamId) ?? null;

  const handleQuestionClick = (question, category) => {
    if (!question) {
      return;
    }
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

  const markQuestionAsUsed = (questionId) => {
    setUsedQuestionIds((prevIds) =>
      prevIds.includes(questionId) ? prevIds : [...prevIds, questionId]
    );
  };

  const handleCloseCard = () => {
    if (activeQuestion) {
      markQuestionAsUsed(activeQuestion.id);
    }
    setActiveQuestion(null);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const isUsed = (id) => usedQuestionIds.includes(id);

  const handleApplyTeamsSettings = (event) => {
    event.preventDefault();

    const nextCount = Math.max(
      1,
      Math.min(12, parseScoreValue(teamCountInput, DEFAULT_TEAM_COUNT))
    );
    const nextStartScore = parseScoreValue(teamScoreInput, DEFAULT_TEAM_SCORE);

    setTeamCountInput(nextCount);
    setTeamScoreInput(nextStartScore);
    setTeams((prevTeams) =>
      Array.from({ length: nextCount }, (_, index) => ({
        id: prevTeams[index]?.id ?? `team-${index + 1}`,
        name: prevTeams[index]?.name ?? `Команда ${index + 1}`,
        score: prevTeams[index]?.score ?? nextStartScore,
      }))
    );
  };

  const handleResetTeamScores = () => {
    const resetValue = parseScoreValue(teamScoreInput, DEFAULT_TEAM_SCORE);
    setTeams((prevTeams) =>
      prevTeams.map((team) => ({ ...team, score: resetValue }))
    );
  };

  const handleResetBoardProgress = () => {
    setUsedQuestionIds([]);
    setActiveQuestion(null);
    setShowAnswer(false);
  };

  const handleResetDefaultQuestions = () => {
    setGameData(cloneGameData(GAME_DATA));
    handleResetBoardProgress();
    setImportStatus({
      type: "success",
      text: "Загружен стандартный набор тем и вопросов.",
    });
  };

  const handleJudgeAnswer = (isCorrect) => {
    if (!activeQuestion || !selectedTeam) {
      return;
    }

    const scoreDelta = isCorrect ? activeQuestion.price : -activeQuestion.price;

    setTeams((prevTeams) =>
      prevTeams.map((team) =>
        team.id === selectedTeam.id
          ? { ...team, score: team.score + scoreDelta }
          : team
      )
    );

    markQuestionAsUsed(activeQuestion.id);
    setActiveQuestion(null);
    setShowAnswer(false);
  };

  const handleCsvImport = async (event) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    try {
      const csvText = await file.text();
      const importedGameData = buildGameDataFromCsv(csvText);
      const importedQuestionsCount = importedGameData.reduce(
        (total, category) => total + category.questions.length,
        0
      );

      setGameData(importedGameData);
      handleResetBoardProgress();
      setImportStatus({
        type: "success",
        text: `Импорт завершён: ${importedGameData.length} тем и ${importedQuestionsCount} вопросов.`,
      });
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Не удалось обработать CSV. Проверьте формат файла.";
      setImportStatus({ type: "error", text: message });
    } finally {
      event.target.value = "";
    }
  };

  return (
    <div className="app-root">
      <div className="background-gradient"></div>

      <header className="header">
        <div className="header-title-block">
          <h1 className="header-title">СВОЯ ИГРА</h1>
          <p className="header-subtitle">Локальная игра с настройкой команд и CSV-импортом</p>
        </div>
        <div className="header-info">
          <span className="header-tag">Тем: {gameData.length}</span>
          <span className="header-tag">Вопросов: {totalQuestions}</span>
          <button
            className="settings-toggle-button"
            type="button"
            onClick={() => setShowSettings(true)}
          >
            Настройки
          </button>
        </div>
      </header>

      <section className="scoreboard">
        <div className="scoreboard-header">
          <h2 className="scoreboard-title">Команды</h2>
          <p className="scoreboard-hint">
            Выберите активную команду. Ей начисляются или снимаются очки в карточке вопроса.
          </p>
        </div>

        <div className="scoreboard-grid">
          {teams.map((team) => (
            <button
              type="button"
              key={team.id}
              className={`scoreboard-team ${
                team.id === selectedTeamId ? "scoreboard-team-active" : ""
              }`}
              onClick={() => setSelectedTeamId(team.id)}
            >
              <span className="scoreboard-team-name">{team.name}</span>
              <span className="scoreboard-team-score">{team.score}</span>
            </button>
          ))}
        </div>
      </section>

      <main className="board-wrapper">
        <div className="board">
          {gameData.length === 0 && (
            <p className="empty-board-text">Нет тем для показа. Импортируйте CSV.</p>
          )}

          {gameData.map((category) => (
            <div
              className="board-row"
              key={category.id}
              style={{
                gridTemplateColumns: `2.2fr repeat(${maxQuestionCount}, 1fr)`,
              }}
            >
              <div className="category-cell">
                <span className="category-cell-text">{category.title}</span>
              </div>

              {Array.from({ length: maxQuestionCount }, (_, index) => {
                const question = category.questions[index];

                if (!question) {
                  return (
                    <div
                      key={`${category.id}-empty-${index + 1}`}
                      className="price-cell price-cell-empty"
                    />
                  );
                }

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

      {showSettings && (
        <div className="settings-overlay">
          <div
            className="settings-backdrop"
            onClick={() => setShowSettings(false)}
          ></div>
          <div className="settings-modal">
            <div className="settings-modal-header">
              <h2 className="settings-modal-title">Настройки игры</h2>
              <button
                className="question-card-close"
                type="button"
                onClick={() => setShowSettings(false)}
              >
                ✕
              </button>
            </div>

            <div className="settings-modal-body">
              <article className="control-card">
                <h3 className="control-card-title">Команды и очки</h3>
                <form className="team-settings-form" onSubmit={handleApplyTeamsSettings}>
                  <label className="field-group">
                    <span className="field-label">Количество команд</span>
                    <input
                      className="field-input"
                      type="number"
                      min={1}
                      max={12}
                      value={teamCountInput}
                      onChange={(event) => setTeamCountInput(event.target.value)}
                    />
                  </label>

                  <label className="field-group">
                    <span className="field-label">Стартовые очки</span>
                    <input
                      className="field-input"
                      type="number"
                      value={teamScoreInput}
                      onChange={(event) => setTeamScoreInput(event.target.value)}
                    />
                  </label>

                  <div className="control-actions">
                    <button type="submit" className="control-button">
                      Применить
                    </button>
                    <button
                      type="button"
                      className="control-button control-button-secondary"
                      onClick={handleResetTeamScores}
                    >
                      Сбросить очки
                    </button>
                  </div>
                </form>
              </article>

              <article className="control-card">
                <h3 className="control-card-title">Импорт тем и вопросов</h3>
                <p className="csv-note">
                  CSV: <strong>category,price,question,options,answer[,color]</strong>.
                  <br />
                  В поле <strong>options</strong> перечисляйте варианты через символ{" "}
                  <strong>|</strong>.
                </p>
                <input
                  className="csv-file-input"
                  type="file"
                  accept=".csv,text/csv"
                  onChange={handleCsvImport}
                />
                <div className="control-actions">
                  <button
                    type="button"
                    className="control-button control-button-secondary"
                    onClick={handleResetDefaultQuestions}
                  >
                    Вернуть стандартные вопросы
                  </button>
                  <button
                    type="button"
                    className="control-button control-button-secondary"
                    onClick={handleResetBoardProgress}
                  >
                    Сбросить прогресс поля
                  </button>
                </div>
                {importStatus && (
                  <p
                    className={`import-status ${
                      importStatus.type === "error"
                        ? "import-status-error"
                        : "import-status-success"
                    }`}
                  >
                    {importStatus.text}
                  </p>
                )}
              </article>
            </div>
          </div>
        </div>
      )}

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

            <div className="question-card-footer question-card-footer-judge">
              <div className="judge-team-label">
                Активная команда:{" "}
                <strong>{selectedTeam ? selectedTeam.name : "не выбрана"}</strong>
              </div>
              <div className="judge-actions">
                <button
                  type="button"
                  className="judge-button judge-button-correct"
                  onClick={() => handleJudgeAnswer(true)}
                  disabled={!selectedTeam}
                >
                  ПРАВИЛЬНО +{activeQuestion.price}
                </button>
                <button
                  type="button"
                  className="judge-button judge-button-wrong"
                  onClick={() => handleJudgeAnswer(false)}
                  disabled={!selectedTeam}
                >
                  НЕПРАВИЛЬНО -{activeQuestion.price}
                </button>
                <button className="close-card-button" onClick={handleCloseCard}>
                  ЗАКРЫТЬ БЕЗ НАЧИСЛЕНИЯ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
