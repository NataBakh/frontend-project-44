### Hexlet tests and linter status:
[![Actions Status](https://github.com/NataBakh/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/NataBakh/frontend-project-44/actions)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=NataBakh_frontend-project-44&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=NataBakh_frontend-project-44)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=NataBakh_frontend-project-44&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=NataBakh_frontend-project-44)


**Минимальные требования**

- Должен быть установлен npm
- Должена быть установлена последная версия Node.js глобально.

**Инструкция по установке и запуску**

Склонируйте репозиторий проекта локально:
git clone

Перейдите в директорию проекта 
cd frontend-project-44

В дирректории проекта запустите команду 
make install

Установить пакет в систему. Может потребоваться запуск с sudo!
npm link

Чтобы убедиться в том, что проект развернут успешно, запустите brain-games в терминале.

**Описание:**

«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.


**Игры:**

- Определение четного числа.<br>
  Суть игры в следующем: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.

- Калькулятор. Арифметические выражения, которые необходимо вычислить.<br>
  Суть игры в следующем: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.

- Определение наибольшего общего делителя.<br>
  Суть игры в следующем: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.

- Прогрессия. Поиск пропущенных чисел в последовательности чисел.<br>
  Игроку показывается ряд чисел, образующий арифметическую прогрессию, зпри этом одном из чисел закрыто двумя точками. Игрок должен определить это число.

- Определение простого числа.<br>
  Игрок должен определить, является ли показанное число простым или нет.

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

В случае, если пользователь дает неверный ответ, выводится сообщение:

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
[![asciicast](https://asciinema.org/a/y45obnfJ0g7AVgZu.svg)](https://asciinema.org/a/y45obnfJ0g7AVgZu)

Аскинема c запуском игры "Арифметическая прогрессия", победой и поражением игрока:
[![asciicast](https://asciinema.org/a/SZ7rZJ61n0tGdboa.svg)](https://asciinema.org/a/SZ7rZJ61n0tGdboa)

Аскинема c запуском игры "Простое ли число?", победой и поражением игрока:
[![asciicast](https://asciinema.org/a/0OuLVi5gRBhbTEwR.svg)](https://asciinema.org/a/0OuLVi5gRBhbTEwR)