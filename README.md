## Установка и Запуск

1. Установите необходимые модули:

```bash
    npm install
```

2. Запустите веб-сервер `localhost:8080`:

```bash
    npm run dev
```

3. Для сборки проекта в директорию `dist`, используйте:

```bash
    npm run build
```

## Линтинг

Весь код и стили в этом проекте проходят проверку линтерами. Чтобы запустить линтинг кода и стилей, выполните:

```bash
    npm run lint
```

#### ESLint для JavaScript и TypeScript

JavaScript и TypeScript код проходит проверку ESLint. Чтобы запустить линтинг кода, выполните:

```bash
    npm run lint:js
```

Чтобы отключить предупреждения правил в части файла, используйте блокирующие комментарии
в следующем формате:

```JavaScript
/* eslint-disable */
alert('foo');
/* eslint-enable */
```

Чтобы отключить предупреждения правил во всем файле,поместите комментарий

```JavaScript
/* eslint-disable */ в верхней части файла.
```

Чтобы отключить все правила в определенной строке, используйте строку или блокирующий комментарий
в одном из следующих форматов:

```JavaScript
alert('foo'); // eslint-disable-line
// eslint-disable-next-line
alert('foo');
/* eslint-disable-next-line */
alert('foo');
alert('foo'); /* eslint-disable-line */
```

#### StyleLint для стилей

Стилевые файлы проходят проверку Stylelint. Чтобы запустить линтинг стилей, выполните:

```bash
    npm run lint:style
```

Вы можете временно отключить правила, используя комментарии к конфигурации в вашем стилевом файле.
Например, вы можете либо отключить все правила:

```css
/* stylelint-disable */
a {
}
/* stylelint-enable */
```

Или вы можете отключить отдельные правила:

```css
/* stylelint-disable declaration-no-important */
#id {
	color: pink !important;
}
/* stylelint-enable declaration-no-important */
```
