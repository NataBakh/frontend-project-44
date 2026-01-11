### Hexlet tests and linter status:
[![Actions Status](https://github.com/NataBakh/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/NataBakh/frontend-project-44/actions)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=NataBakh_frontend-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=NataBakh_frontend-project-44)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=NataBakh_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=NataBakh_frontend-project-44)

**Описание:**

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.


**Игры:**

- Определение четного числа.
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Определение наибольшего общего делителя.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение простого числа.


**Пример игры:**
```
brain-progression

Welcome to the Brain Game!
What number is missing in the progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Roman!
```

В случае, если пользователь даст неверный ответ, необходимо вывести:

```
Question: 5 7 9 11 13 .. 17 19 21 23
Your answer: 1
'1' is wrong answer ;(. Correct answer was '15'.
Let's try again, Sam!
```

Аскинема с примером установки пакета, запуска игры "Проверка на четность", победой и поражением игрока:
[![asciicast](https://asciinema.org/a/f1KXvY9LLnIy2sS6CPxnbD328.svg)](https://asciinema.org/a/f1KXvY9LLnIy2sS6CPxnbD328)

Аскинема с запуском игры "Калькулятор", победой и поражением игрока:
[![asciicast](https://asciinema.org/a/oNE4r107x16dAPYB.svg)](https://asciinema.org/a/oNE4r107x16dAPYB)

Аскинема с запуском игры "Наибольший общий делитель (НОД)", победой и поражением игрока:
[![asciicast](https://asciinema.org/a/E0RROoJ2NfcSdOcb.svg)](https://asciinema.org/a/E0RROoJ2NfcSdOcb)

Аскинема c запуском игры "Арифметическая прогрессия", победой и поражением игрока:
[![asciicast](https://asciinema.org/a/SZ7rZJ61n0tGdboa.svg)](https://asciinema.org/a/SZ7rZJ61n0tGdboa)

Аскинема c запуском игры "Простое ли число?", победой и поражением игрока:
[![asciicast](https://asciinema.org/a/0OuLVi5gRBhbTEwR.svg)](https://asciinema.org/a/0OuLVi5gRBhbTEwR)