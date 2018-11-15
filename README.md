# marmelad <sup>[4.20.9](CHANGELOG.md#4209-15112018)</sup>

<img src="marmelad.svg" align="right" title="Marmelad logo made by Jelly beans from www.flaticon.com is licensed by CC 3.0 BY" width="100" height="100">

Сборщик сайтов, предназначенный для подготовки вёрстки для использования в роли реального сайта, либо, для последующего использования в различных CMS, либо в React, Vue, Angular, и т.п. приложениях, ну или там где вам заблагорассудится, дело ваше 🤘.

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
Установка произойдёт также как и через **npm**, только в этом случае появится возможность быстро исправлять/улучшать **marmelad** либо под требования заказчика, либо под собственные нужды.

### Для определённого проекта

Такой тип установки подходит когда заказчик требует определённую структуру размещения файлов проекта, либо работа сборщика нуждается в переделке под требования заказчика. Там может быть всё что угодно.

```bash
git clone https://github.com/yunusga/marmelad.git && cd marmelad && npm i
```

Далее, инициализируея/запуская **marmelad** указывая NodeJs путь до исполняемого файла **marmelad**.

```bash
# node C:\marmelad\bin\marmelad.js
node <путь до исполняемого файла marmelad>
```

## Содержание
 - [Для Староверов](#Для-Староверов)
 - [Шаблоны](#Шаблоны)

## Шаблоны
 - [Nunjucks](https://mozilla.github.io/nunjucks/)
 - posthtml-[bem](https://github.com/rajdee/posthtml-bem/#modifiers)
 - posthtml-[postcss](https://github.com/posthtml/posthtml-postcss)
 - Фильтр [limitTo](https://gist.github.com/yunusga/1c5236331ddb6caa41a2a71928ac408a)

## Для Староверов
Новые версии `marmelad` можно тестировать не устанавливая его глобально, т.е. не ломая привычный уклад работы :)

### Для этого необходимо:
 - Клонировать `marmelad` в абсолютно любую папку на ПК
 - Переключится на нужную ветку, коммит или тег
 - Установить все зависимости
 - Запустить его в тестовой папке

#### Пример
Находясь в тестовой (`E:\user\marmelad\test>`) папке необходимо запустить локально установленный `marmelad` указав путь до него
```
../bin/marmelad.js

   ╔══════════════════════════════════╗
   ║                                  ║
   ║   MARMELAD v4.18.7 is Started!   ║
   ║                                  ║
   ╚══════════════════════════════════╝

```
> И, о Да, он работает :)

## Лицензия
[MIT](LICENSE)

*Логотип был взят и изменён, из набора иконок автора <a href="https://www.flaticon.com/authors/freepik" title="Jelly beans">Jelly beans</a> распространяемого под лицензией <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> с <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a>*
