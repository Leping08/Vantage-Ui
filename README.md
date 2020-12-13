![Vantage Ui](./dev/vantage-ui-logo-dark.svg)

Vantage UI is a set of Vue 3 components themed by Tailwind CSS.

## Docs

The full docs can be found at [https://vantageui.com/](https://vantageui.com/)

## Instlation

``` bash
$ npm install vantage-ui --save-dev
```

```javascript
import VantageUi from "vantage-ui";

app.use(VantageUi)
```

## Theme

The components theme can be changed using [Tailwind css](https://tailwindcss.com/) classes.

```javascript
app.use(VantageUi, {
  color: 'blue',
  shadow: 'shadow-lg',
  rounded: 'rounded-lg'
})
```