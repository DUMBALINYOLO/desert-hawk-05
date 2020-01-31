---
title: React-компонент Скрыть
components: Hidden
---

# Hidden

<p class="description">Quickly and responsively toggle the visibility value of components and more with the hidden utilities.</p>

Все элементы видны, если **они явно не скрыты**. To ease integration with Material-UI's [responsive breakpoints](/customization/breakpoints/), this component can be used to hide any content, or you can use it in conjunction with the [`Grid`](/components/grid/) component.

## Как это работает

Скрытие работает с диапазоном точек остановки, например, `xsUp` или `mdDown`, или использует одну или несколько точек остановки, например, `only='sm'` или `only={['md', 'xl']}`. Диапазоны и отдельные точки остановки могут использоваться одновременно для достижения индивидуального поведения. Диапазоны включают указанные точки остановки.

```js
innerWidth  |xs      sm       md       lg       xl
            |--------|--------|--------|--------|-------->
width       |   xs   |   sm   |   md   |   lg   |   xl

smUp        |   show | hide
mdDown      |                     hide | show

```

## Реализации

### js

По умолчанию используется реализация `js`, которая быстро скрывает контент, используя компонент высшего порядка [`withWidth()`](/customization/breakpoints/#withwidth), который следит за размером экрана. Преимущество этого заключается в том, что контент вообще не отображается, если не достигнута точка остановки.

### css

Если вы используете рендеринг на стороне сервера, вы можете установить `implementation="css"`, если вы не хотите, чтобы браузер повторно выводил ваш контент на экран.

## Точка остановки Вверх (up)

Используя любое свойство точки остановки от `up`, данные *дочерних элементов* будут скрыты *на уровне или выше* точки остановки.

{{"demo": "pages/components/hidden/BreakpointUp.js"}}

## Точка остановки Вниз

Используя любое свойство точки остановки от `down`, данные *дочерних элементов* будут скрыты *на уровне или ниже* точки остановки.

{{"demo": "pages/components/hidden/BreakpointDown.js"}}

## Точка остановки Только (only)

Используя свойство точки остановки `only`, данные *дочерних элементов* будут скрыты *на* указанной точке (точках) остановки.

Свойство `only` можно использовать двумя способами:

- указать одну точку остановки
- перечислить массив точек остановки

{{"demo": "pages/components/hidden/BreakpointOnly.js"}}

## Интеграция с Grid (Сеткой)

Весьма обычным является изменение `Grid` в разных точках остановки, и во многих случаях вы хотите скрыть некоторые из этих элементов.

{{"demo": "pages/components/hidden/GridIntegration.js"}}