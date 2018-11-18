# marmelad <sup>[4.23.12](CHANGELOG.md#42312-16112018)</sup> [![npm](https://img.shields.io/npm/v/marmelad.svg)](https://www.npmjs.com/package/marmelad)

<img src="marmelad.svg?sanitize=true" align="right" title="Marmelad logo made by Jelly beans from www.flaticon.com is licensed by CC 3.0 BY" width="100" height="100">

Сборщик сайтов, предназначенный для подготовки вёрстки для использования в роли реального сайта, либо, для последующего использования в различных CMS, либо в React, Vue, Angular, и т.п. приложениях, или там, где вам заблагорассудится, дело ваше 🤘.

## Установка

`marmelad` можно устанавливать тремя способами.

> Не пытайтесь установить marmelad путём копирования файлов сборщика с Windows на Linux. Для разных ОС устанавливаются разные зависимости. Пользуйтесь доступными способами для установки.

### Из npm
```bash
npm i marmelad -g
```

### Для разработчиков
```bash
git clone https://github.com/yunusga/marmelad.git
cd marmelad
npm i . -g
npm link
```
Установка произойдёт также, как и через **npm**, только в этом случае появится возможность быстро исправлять/улучшать **marmelad** либо под требования заказчика, либо под собственные нужды.

### Для определённого проекта

Такой тип установки подходит, когда заказчик требует определённую структуру размещения файлов проекта, либо работа сборщика нуждается в переделке под требования заказчика. Там может быть всё что угодно.

```bash
git clone https://github.com/yunusga/marmelad.git && cd marmelad && npm i
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
  -v, --version        output the version number
  -h, --help           output usage information

Commands:
  init [dir]           initialize new project
  dev                  run development server
  cp <name>            create new page
  cb [options] <name>  create new block

Commands help:
  marmelad [command] --help
  mmd [command] --help
```

## Шаблон

### Модуль TCI

TCI (text command interface) - добавлен в шаблон вёрстки и дублирует CLI команды **marmelad** (cp, cb)

## Лицензия
[MIT](LICENSE)

*Логотип был взят и изменён, из набора иконок автора <a href="https://www.flaticon.com/authors/freepik" title="Jelly beans">Jelly beans</a> распространяемого под лицензией <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> с <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a>*
