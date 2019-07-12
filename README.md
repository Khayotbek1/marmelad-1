[ci-img]:  https://travis-ci.org/solversgroup/marmelad.svg
[ci]:      https://travis-ci.org/solversgroup/marmelad

# marmelad <sup>[6.10.4](CHANGELOG.md#6104-06072019)</sup> [![npm](https://img.shields.io/npm/v/marmelad.svg)](https://www.npmjs.com/package/marmelad)

<img src="marmelad.svg?sanitize=true" align="right" title="Marmelad logo made by Jelly beans from www.flaticon.com is licensed by CC 3.0 BY" width="100" height="100">

Заготовка фронтенд проекта для продвинутых и начинающих 🤘. Хорошо подходит для поддержания единой структуры проектов в команде и легкого переиспользования готовых блоков между проектами блогадаря БЭМ подходу к организации файловой структуры проекта.

## Содержание

- [Установка](#установка)
  - [Из npm](#установка-из-npm)
  - [Для разработчиков](#установка-для-разработчиков)
  - [Для определённого проекта](#установка-для-определённого-проекта)
- [Marmelad CLI](#marmelad-cli)
  - [`init [options]`](#init-options-инициализация)
  - [`dev [options]`](#dev-options-параметры-запуска)
  - [`cp <name>`](#cp-name-создание-страницы)
  - [`cb <name> [options]`](#cb-name-options-создание-блока)
  - [`lint`](#lint-w3c-валидатор)
  - [`format`](#format-форматирование-html)
  - [`pack [name] [options]`](#pack-name-options-архивирование-проекта)
  - [TCI](#tci)
- [Структура проекта](#структура-проекта)
- [Шаблоны/Блоки](#шаблоныблоки)
  - [Lagman](#lagman)
- [Данные для шаблонов/блоков](#данные-для-шаблоновблоков)
  - [`incw` расширение](#incw-расширение)
- [Сборка стилей](#сборка-стилей)
  - [Post CSS плагины](#post-css-плагины)
- [Bootstrap](#bootstrap)
  - [Bootstrap как донор](#bootstrap-как-донор)

## Внимание

> Вам нужно установить [java](https://java.com) для работы с [node-w3c-validator](https://www.npmjs.com/package/node-w3c-validator).

## Установка

> Не пытайтесь установить marmelad путём копирования файлов сборщика с Windows на Linux. Для разных ОС устанавливаются разные зависимости. Пользуйтесь доступными способами для установки.

### Установка из npm

```bash
npm i marmelad -g
```

### Установка для разработчиков

```bash
git clone https://github.com/solversgroup/marmelad.git
cd marmelad
npm i
npm link # sudo npm link для linux
```

### Установка для определённого проекта

Такой тип установки подходит, когда заказчик требует определённую структуру размещения файлов проекта, либо работа сборщика нуждается в переделке под проектные требования. Там может быть всё что угодно 😱.

Установка для определённого проекта производится также, как и [Установка для разработчиков](#установка-для-разработчиков), отличается только в запуск.

Для инициализируя/запуская **marmelad** необходимо указать путь до исполняемого файла **marmelad**.

```bash
# node C:\marmelad\bin\marmelad.js
node <путь до директории клона>\bin\marmelad.js
```

## Marmelad CLI

После [установки из npm](#установка-из-npm) или [для разработчиков](#установка-для-разработчиков), **marmelad** станет доступен в командной строке/терминале вашей системы как `marmelad` и `mmd`.

Для справки по командам **marmelad** необходимо ввести в консоле/терминале:

```bash
# без параметров
marmelad # или mmd
# или
marmelad --help # или mmd --help

Usage: marmelad [options] [command]

# описание из package.json

Options:
  -v, --version         # версия сборщика
  -h, --help            # показать спраку

Commands:
  init [options] [dir]  # создать новый проект
  dev [options]         # старт сервера разработки
  cp <name>             # создать новую страницу
  cb [options] <name>   # создать новый блок

Commands help:
  marmelad [command] --help
  mmd [command] --help
```

### `init [options]` инициализация

Для инициализации нового проекта, предназначена команда `mmd init [options] [dir]`.

В случае, когда не передан параметр для папки инициализации, проект инициализируется в текущей папке открытой в терминале.

`-c, --css` - заменяет значение ключа `app.css` в `settings.marmelad.js` при копировании заготовки нового проекта. Далее этот ключ используется для команды создания блока `mmd cb`, для создания файлов для css препроцессоров с расширением установленным в `app.css` в `settings.marmelad.js`. Для добавления поддержки в проект на старом проекте после обновления до актуальной версии **marmelad**, необходимо добавить в `settings.marmelad.js` в объект `app` свойство `css` с значением/расширением требуемого css препроцессора.

`-t, --test` - необходим только для тестирования, в разработке проектов никакого смысла он не имеет.

`--bootstrap` - инициализирует новый проект с bootstrap, копируя его в базовую заготовку.

`--bootstrap donor` - автоматически включает **bootstrap как донор**.

`[dir]` - позволяет инициализировать проект в указанной папке. Например `mmd init new-and-awesome -t scss`.

### `dev [options]` параметры запуска

- `dev` стандартный запуск
- `dev -a` запуск сервера с парольной защитой, логин и пароль генерируются автоматически
- `dev -a <login>@<password>` запуск сервера с парольной защитой, логин и пароль устанавливаются вручную
- `dev --build` одноразовая сборка проекта без запуска слежения за изменениями и пересборки
- `dev --minify` включает обжатие для js/css, создаёт файлы с суффиксом `.min` рядом с необжатым файлом
- `dev --proxy-mod` режим сборки статики + проксирование уже живого сайта с копированием необходимых ресурсов (css,js) в определённую директорию рабочего сайта

> `dev --proxy-mod` ошибка **Error: Missing positive glob** означает что вы не прописали в конфиге директории для копирования, по умолчанию они закомментированны.

### `cp <name>` создание страницы

Файл страницы создаётся в директории `marmelad/_pages`, в имени файла расширение не указывается.

### `cb <name> [options]` создание блока

Файлы блока создаются в директории `marmelad/_blocks`.

```bash
#.tci
cb new-block --t html,js
```

создаст одноимённый блок содержащий в себе все необходимые технологии.

```bash
# marmelad/_blocks
new-block
  ├─ new-block.html  # шаблон
  └─ new-block.js    # скрипты
```

Параметр `--t` позволяет указывать конкретно какие технологии необходимо создать. По сути в этот параметр можно перечислить через зяпятую сколько угодно форматов.

Формат для стилей указывать необязательно, если он не будет указан, то команда создаст файл с форматом стилей, который указан в `settings.marmelad.js -> app.css`.

### `lint` W3C валидатор

Запуск W3C валидатора на уже собранном проекте.

> Запуск W3C валидатора необходимо выполнять только после сборки проекта, иначе результаты валидации будут некорректны.

### `format` форматирование html

Форматирование HTML-кода страниц проекта в папке сборки (`static`).

> Эксперементальная функция, пока никаких опций передать нельзя. Готовится для следующего релиза.

### `pack [name] [options]` архивирование проекта

Упаковывает файлы проекта в **tgz** или **zip** архив.

- `pack` **tgz** архив
- `pack -z, --zip` **zip** архив
- `pack -f, --folders [marmelad,static]` упаковать только определённые директории в архив
- `pack --nodt` не подставлять дату и время создания в имя архива (отлючено по умолчанию)
- `pack custom-name` кастомное имя для архива, иначе имя архива позаимсвуется у корневой папки проекта

```bash
pack           # project_11072019-153012.tgz
pack my-name   # my-name_11072019-153012.tgz
pack -z        # project_11072019-153012.zip
pack -f static # project_11072019-153012.tgz только директория static
pack --nodt    # project.tgz без даты и времени в названии (отключено по умолчанию)
```

### TCI

TCI (text command interface) - добавлен в шаблон вёрстки и дублирует CLI команды **marmelad** (`cp`, `cb`), т.е. нет необходимости переходить в другую консоль/терминал, и в там уже выполнять доп. действия.

Теперь для этого есть файл **.tci**, все команды вводятся без префиксов `mmd` или `marmelad`.

## Структура проекта

```bash
├─ marmelad
│  ├─ _blocks                   # блоки
│  │   └─ some-block            # блок для примера
│  │       ├─ some-block.html   # шаблон блока
│  │       ├─ some-block.js     # скрипты блока
│  │       ├─ some-block.styl   # стили блока
│  │       └─ some-block.json   # данные блока
│  ├─ _pages                    # страницы
│  ├─ bootstrap                 # bootstrap, если нужен
│  ├─ iconizer                  # SVG-иконки для SVG-спрайта
│  │   ├─ colored               # цветные SVG-иконки
│  │   └─ icons                 # монохромные SVG-иконки
│  ├─ snippets                  # сниппеты BEML для редкаторов
│  ├─ static                    # статика для вёрстки
│  ├─ styles                    # стили, styl или scss
│  ├─ .editorconfig             # конфиг для редактора
│  ├─ .tci                      # TCI команды marmelad
│  ├─ data.marmelad.js          # глобальные данные
│  └─ settings.marmelad.js      # настройки сборки
└─ static                       # итоговая сборка
```

## Шаблоны/Блоки

- Шаблонизатор [nunjucks](https://mozilla.github.io/nunjucks/)
- БЭМ именование в HTML обеспечивает [posthtml-bem](https://www.npmjs.com/package/posthtml-bem)

### Lagman

Предназначен для оптимизации сборки шаблонов HTML на больших проектах, с большим кол-вом страниц.

**Lagman** строит связи/зависимости страниц от блоков или блоков от страниц. Что позволяет шаблонизатору понимать для какой из страниц изменился блок, и пересобирать HTML только тех страниц, в которых он используется.

Для правильной работы модуля, требуется строгое следовние правилам сборки блоков и страниц.

**Блок должен** содержать разметку БЭМ, с обязательным атрибутом `block`:

```html
<div block="block-name" mods="red">
  ...
</div>
```

Этот атрибут позволяет установить связь между страницей и блоком. В случае если этого атрибута нет в разметке блока, то, этот блок автоматичестки исключается из списка слежения за изменениями, и перестаёт запускать пересборку страниц в которых он используется.

## Данные для шаблонов/блоков

Данные для блока доступны в шаблонах по ключу с названием блока (если файл данных для блока создан и хоть чем-то заполнен), либо из `data.marmelad.js` (глобальные данные). Названия/ключи собственных данных блока преобразуются в **camelCase**.

### `incw` расширение

`incw` - это расширение позволяющее подключать шаблоны блоков с передачей в шаблон отдельных данных, без указания расширения файла блока.

```nunjucks
{# ручная передача данных в шаблон #}
{% incw 'имя шаблона без расширения', {title: 'Example', subtitle: 'An example component'} %}

{# передача данных в шаблон из переменной #}
{% incw 'имя шаблона без расширения', app.lang %}
```

Данные переданные в `incw` доступны внутри шаблона по ключу `_ctx`.

```nunjucks
{# подключение шаблона #}
{% incw 'avatar', { image: 'IMAGE URL', name: 'USERNAME'} %}

{# в шаблоне #}
<div block="incw-template">
  <img src="{{ _ctx.image }}" alt="">
  <span>{{ _ctx.name }}</span>
</div><!-- incw-template -->
```

> Вложенные `incw` не получают `_ctx` родительского блока, только глобальные данные. Для передачи конкретных данных в вложенный `incw` необходимо передать данные явно для вкладываемого `incw`.

## Сборка стилей

Сборка поддерживает `stylus`, `scss`, `sass`.

### Post CSS плагины

- [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- [gulp-group-css-media-queries](https://www.npmjs.com/package/gulp-group-css-media-queries)
- [postcss-flexbugs-fixes](https://www.npmjs.com/package/postcss-flexbugs-fixes)
- [postcss-inline-svg](https://www.npmjs.com/package/postcss-inline-svg)
- [postcss-momentum-scrolling](https://www.npmjs.com/package/postcss-momentum-scrolling)

## Bootstrap

Сборка **bootstrap** включается в `settings.marmelad.js` настройкой `app.bts.use: true`, все файлы собираются в корне сборке, в директории   `bootstrap`.

### Bootstrap как донор

Сборка **bootstrap как донор** включается в `settings.marmelad.js` настройкой `app.bts.donor: true`, при этом `app.bts.use` должен быть в `false`.

В случае использования **bootstrap** как **донора** для сборки стилей, файлы скриптов **bootstrap** копируются в директорию сборки `js/vendors`. Файлы стилей уже встраиваются так как вы их настроете, т.е. изменение файлов стилей **bootstrap** запускает сборку основных стилей, не запуская отдельную сборку стилей для **bootstrap**.

## Iconizer

Iconizer претерпел изменения в плане способах его подключения и использования в шаблонах.

### Использование Iconizer

**В шаблоне**

```HTML+Django
{{ _icon('marmelad', { tag: 'span' }) }}
```

**На выходе**

```HTML
<span class="svg-icon svg-icon--marmelad colored" aria-hidden="true" focusable="false">
  <svg class="svg-icon__link">
    <use xlink:href="#marmelad"></use>
  </svg>
</span>
```

### Опции Iconizer

```HTML+Django
{{ _icon('<name>', {
  tag: 'div',
  type: 'icons',
  class: '',
  mode: 'inline',
  url: '',
}) }}
```

Функция `icon` из `settings.marmelad.js -> iconizer` передаётся в шаблонизатор **nunjucks** под именем `_icon`.

### Типы SVG-спрайта

- `icons` - монохромные иконки, вырезаются все лишние атрибуты оформления
- `colored` - цветные иконоки, вырезается только тег `title`

### Пример использования цветной SVG-иконки

Для подключения цветной иконки необходимо добавить атрибут `type="colored"`

```HTML+Django
{{ _icon('marmelad', { type: 'colored' }) }}
```

### Режимы подключения SVG-спрайта

- `inline` - инлайнится в HTML-код страницы
- `external` - используется как отдельный файл, через обращение по URL его размещения

### Миграция для Iconizer 5+

В `settings.marmelad.js`, необходимо удалить:

- `paths.iconizer`
- `app.svgSprite`

```js
const paths = {
  // удалить
  iconizer: {
    ...
  },
};

const app = {
  // удалить
  svgSprite: {
    ...
  },
};
```

Добавить новый объект в `settings.marmelad.js`

```js
const iconizer = {
  cssClass: 'main-svg-sprite',
  mode: 'inline', // external отдельный подключаемый файл спрайта (default:inline)
  dest: path.join(paths.dist, 'img'), // путь для собираемых спрайтов
  url: 'img', // путь до подключаемого спрайта iconizer.dest без paths.dist
  srcIcons: path.join(folders.marmelad, folders.iconizer.src, 'icons'),
  srcColored: path.join(folders.marmelad, folders.iconizer.src, 'colored'),
  icon: (name, opts) => {
    opts = Object.assign({
      tag: 'div',
      type: 'icons',
      class: '',
      mode: 'inline',
      url: '',
    }, opts);

    let external = '';
    let typeClass = '';

    if (opts.mode === 'external') {
      external = `${opts.url}/sprite.${opts.type}.svg`;
    }

    if (opts.type !== 'icons') {
      typeClass = ` svg-icon--${opts.type}`;
    }

    opts.class = opts.class ? ` ${opts.class}` : '';

    return `
      <${opts.tag} class="svg-icon svg-icon--${name}${typeClass}${opts.class}" aria-hidden="true" focusable="false">
        <svg class="svg-icon__link">
          <use xlink:href="${external}#${name}"></use>
        </svg>
      </${opts.tag}>
    `;
  },
  plugin: {
    mode: {
      symbol: { // symbol mode to build the SVG
        example: false, // Build sample page
      },
    },
    svg: {
      xmlDeclaration: false, // strip out the XML attribute
      doctypeDeclaration: false, // don't include the !DOCTYPE declaration
    },
  },
};
```

и не забыть добавить его в экспорт настроек

```js
module.exports = {
  // добавить
  iconizer,
};
```

## Задержка отдачи контена сервером `latencyRoutes`

В `settings.marmelad.js app.bsSp` необходимо добавить настройки для задержки отдачи сервером контента

```js
// пример, для новых проектов по умолчанию задержка для /api
latencyRoutes: [
  {
    route: '/css',
    latency: 3000,
    active: true,
  },
],
```

## Лицензия

[MIT](LICENSE)

## Кодекс Поведения участника

Прочтите [Кодекс Поведения участника](CODE_OF_CONDUCT)

*Логотип был взят и изменён, из набора иконок автора <a href="https://www.flaticon.com/authors/freepik" title="Jelly beans">Jelly beans</a> распространяемого под лицензией <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> с <a href="https://www.flaticon.com/"     title="Flaticon">www.flaticon.com</a>*
