# A simple "game" component using Atomico - `<random-flip>`

### Subjects

- Web component, Atomico
- Build a simple "game" component with Atomico

### To show
- Define a web component without class (Atomico way, likes modern React)
- Using 'props' to set properties to web component (Atomico way, some 'yes' and 'no')
- Using dispatch mechanism to raise event from web component to outside world

### Source - Build - Run

- The project structure is based on the **Hello World** example of Atomico author. The component `<hello-world>` is kept for reference in case it's needed.
- Added `<web-cell>` component.
- Added `<web-grid>` component.
- Commands to install, build, watch and run:

```bash
npm install # install dependencies
npm run dev # build and watch for code changes
npm run server # run dev server at port 8080
```

### Component's logics
**`<web-cell>`**

Component `<web-cell>` presents a box which can be in two states: true | false.

We can treat it as a living cell having states (live | dead), or as a coin with 2 faces (head | tail), etc. 

For that, `<web-cell>` has a Boolean property `live` which tells the cell is live (true) or dead (false). Visually a cell can be seen in 2 colors corresponding two states: the dark `MidnightBlue` for live cell, and the light `AliceBlue` for dead cell.

When user clicks on `<web-cell>` it simply dispatches event `togglecell`. It won't change it's property by itself.

I keep this excersie very simple on purpose, just to show some basic (but fundamental) techniques which we need to go with Atomico.

**`<web-grid>`**

Component `<web-grid>` presents a grid containing web components `<web-cell>`.

*TBD*

### `<random-flip>`
Component `<random-flip>` presents a "game" built up from web components `<web-cell>` and `<web-grid>`.

Rules:
- Grid shows initial 'world'
- A timer is turned on. At each tick, `<random-flip>` component randomly picks a cell and flips it (toggle cell's state).
Then it checks if all cells have the same state (what ever live or dead state)
  If that the case, `<random-flip>` raises event 'done'
- User also can click on the cells to toggle their states
- Once got 'done' event, we stop the game by setting proerty `active` to `false`.
  Alert user that the game done.


*TBD*

### Takeaways
**Define functional web component - Atomico way (likes in the modern React)**

```bash
/src/web-components/web-cell/index.js

import { h, customElement, useEvent } from 'atomico'
...
const WebCell = props => {
  ...
  return (
    <host>...</host>
  )
}
...
export default customElement('web-cell', WebCell)
```

**Define props schema**

```bash
/src/web-components/web-cell/index.js

WebCell.props = {
  live: { # defines type and default value
    type: Boolean,
    /* event: true, */ # WebCell will automatically raise event 'live' whenever the value live is changed. This feature was not used in this exercise.
    get value () { return false }
  },
  col: Number, #simple declaration
  row: Number
}

/src/index.html
...
  <web-cell live='true'></web-cell>
```

**Catch `click` event and then dispatch custom event `togglecell`**

```bash
/src/web-components/web-cell/index.js

...
const dispatchToggleCell = useEvent('togglecell', { composed: true, bubbles: true})
...
return (
  <host
    ...
    onclick={e => dispatchToggleCell({ live, col, row })}
  />
)
```

**Communicate with outside world**

Outer codes can listen to event `togglecell` sending from inside web component.

In html `<script>` we get the webCell custom element (our `<web-cell`> web component), add event listener for `togglecell` event which will flip the `live` property.

```bash
/src/index.html
...
  <web-cell live='true'></web-cell>
...
<script>
  window.onload = function() {
    const webCell = document.getElementsByTagName("web-cell")[0];
    webCell.addEventListener("togglecell", e => {
      webCell.live = !webCell.live; # toggle 'live' property
    });
  };
<script>
```

However, following functional programming paradigm, avoiding side effect, I prefer to not mutate props inside web component codes. Instead, we let WebCell to raise event 'togglecell' and let outer/parent codes to respond accordingly.

(I'm not sure if I correctly understood the above mentioned situation. I will get help from Atomico author for clarifying.)

### What's next
- Improve `<random-flip>` from some aspects.  For example, add a web component playing "control panel" role, which allows user to change tick's duration, to apply initial world pattern, to PAUSE/ACTIVATE process. Or, maybe accumulate some interesting statistic data for the random process.

- Build `<game-of-life>` - an implementation of famous Conway's Game Of Life. However, this time we would use reactive (streaming) programming with RxJS to see how it works with Atomico.
