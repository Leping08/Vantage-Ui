# Vantage UI

![Vantage Ui](./dev/vantage-ui-logo.png)

Vantage UI is a set of Vue 3 compnents themed by Tailwind css

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

<!-- ## Components

- [x] Avatar
- [x] Badge
- [x] Button
- [x] Card
- [x] Conutdown
- [x] Description List
- [ ] Search Select
- [ ] Modal
- [x] Input -->