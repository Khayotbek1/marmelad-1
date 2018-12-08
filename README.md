[ci-img]:  https://travis-ci.org/solversgroup/marmelad.svg
[ci]:      https://travis-ci.org/solversgroup/marmelad

# marmelad <sup>[4.46.29](CHANGELOG.md#44629-04122018)</sup> [![npm](https://img.shields.io/npm/v/marmelad.svg)](https://www.npmjs.com/package/marmelad) [![Build Status][ci-img]][ci]

<img src="marmelad.svg?sanitize=true" align="right" title="Marmelad logo made by Jelly beans from www.flaticon.com is licensed by CC 3.0 BY" width="100" height="100">

Сборщик сайтов, предназначенный для подготовки вёрстки для использования в роли реального сайта, либо, для последующего использования в различных CMS, либо в React, Vue, Angular, и т.п. приложениях, или там, где вам заблагорассудится, дело ваше 🤘.

## Для разработчиков
Разработка ведётся по правилам **git-flow**. Ознакомиться и изучить мо в  [шпаргалке по git-flow](http://danielkummer.github.io/git-flow-cheatsheet/index.ru_RU.html)

### Этапы/соглашение по внесению изменения

 - Форк репозитория к себе
 - Разработка фичи по правилам git-flow
 - Завершение разработки фичи
 - Создание пул-реквеста
 - Скачивание изменений после одобрения пул-реквеста

## Установка

`marmelad` можно устанавливать тремя способами.

> Не пытайтесь установить marmelad путём копирования файлов сборщика с Windows на Linux. Для разных ОС устанавливаются разные зависимости. Пользуйтесь доступными способами для установки.

### Из npm
```bash
npm i marmelad -g
```

### Для разработчиков
```bash
git clone https://github.com/solversgroup/marmelad.git
cd marmelad
npm i . -g --from-lock-file
npm link
```
Установка произойдёт также, как и через **npm**, только в этом случае появится возможность быстро исправлять/улучшать **marmelad** либо под требования заказчика, либо под собственные нужды.

### Для определённого проекта

Такой тип установки подходит, когда заказчик требует определённую структуру размещения файлов проекта, либо работа сборщика нуждается в переделке под требования заказчика. Там может быть всё что угодно.

```bash
git clone https://github.com/solversgroup/marmelad.git && cd marmelad && npm i
```

Далее, инициализируея/запуская **marmelad** указывая NodeJs путь до исполняемого файла **marmelad**.

```bash
# node C:\marmelad\bin\marmelad.js
node <путь до исполняемого файла marmelad>
```

## Использование CLI

**Marmelad** устанавливается в систему как `marmelad` и `mmd` (сокращённый алиас для CLI). Для вызова справки по использованию необходимо запустить в консоли:
```bash
# без параметров
marmelad # или mmd
# или
marmelad --help # или mmd --help
```

Далее в консоль выведется справка с описанием команд и опций сборщика
```bash
mmd --help

Usage: marmelad [options] [command]

# описание из package.json

Options:
  -v, --version         output the version number
  -h, --help            output usage information

Commands:
  init [options] [dir]  initialize new project
  dev                   run development server
  cp <name>             create new page
  cb [options] <name>   create new block

Commands help:
  marmelad [command] --help
  mmd [command] --help
```

## Инициализация проекта

Для инициализации нового проекта, служит команда `mmd init [options] [dir]`.

В случае, когда не передан параметр для папки инициализации, проект инициализируется в текущей папке открытой в терминале.

### `init [options]`
`-c, --css` - заменяет значение ключа `app.css` в `settings.marmelad.js` при копировании заготовки нового проекта. Далее этот ключ используется для команды создания блока `mmd cb`, для создания файлов для css препроцессоров с расширением установленным в `app.css` в `settings.marmelad.js`. Для добавления поддержки в проект на старом проекте после обновления до актуальной версии **marmelad**, необходимо добавить в `settings.marmelad.js` в объект `app` свойство `css` с значением/расширением требуемого css препроцессора.

`-t, --test` - необходим только для тестирования, в разработке проектов никакого смысла он не имеет.

### `init [dir]`

`[dir]` - позволяет инициализировать проект в указанной папке. Например `mmd init new-and-awesome -t scss`.

## Запуск на проектах предыдущих версий

Необходимо заменить/добавить в `settings.marmelad.js`:
 - объекте `paths`, свойство `stylus` на `styles`
 - объект `app` свойство `css` с требуемого css препроцессора (scss, styl, sass)

## Шаблоны/Блоки

Блок состоит из набора файлов отвечающих за скрипты, данные, стили, разметку.

```bash
[example-block]
  ├ example-block.html  # разметка
  ├ example-block.styl  # стили (less,scss,sass,styl)
  ├ example-block.js    # скрипты
  └ example-block.json  # данные
```

### Данные для шаблонов/блоков

Данные для блока доступны в шаблонах по ключу с названием блока (если файл данных для блока создан и хоть чем-то заполнен), либо из `data.marmelad.js` (глобальные данные). Названия/ключи собственных данных блока преобразуются в **camelCase**.

## Модуль TCI

TCI (text command interface) - добавлен в шаблон вёрстки и дублирует CLI команды **marmelad** (cp, cb).

## Описание сборки стилей
```bash
Тест
```

## Лицензия
[MIT](LICENSE)

*Логотип был взят и изменён, из набора иконок автора <a href="https://www.flaticon.com/authors/freepik" title="Jelly beans">Jelly beans</a> распространяемого под лицензией <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> с <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a>*
