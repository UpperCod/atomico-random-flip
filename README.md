# A simple "game" using `<web-cell>` and `<web-grid>` - `<random-flip>`

## Subjects

- Web component
- Atomico framework

## Purposes

Show how to build a simple "game" component from `<web-cell>` and `<web-grid>` components

## Notes

- The project source skeleton is based on the Hello World example of Atomico author. The component `<hello-world>` is kept for reference in case it's needed.
- Added `<web-cell>` component.
- Added `<web-grid>` component.
- New: `<random-flip>`
- Build, watch and run commands:

```bash
npm run dev # development mode; build and watch for code changes
npm run server # development mode; run dev server
```

## Component's logics
### `<web-cell>`
Component `<web-cell>` presents a box which can be in two states: true | false.
We can treat it as a living cell having states live | dead, or as a coin with 2 faces (head | tail), etc.

For that, `<web-cell>` has a Boolean property `live` which tells the cell is live (true) or dead (false). Visually a cell can be seen in 2 colors corresponding two states: dark `MidnightBlue` for live cell, and light `AliceBlue` for dead cell.

When user clicks on `<web-cell>` it simply dispatches event `togglecell`.

### `<web-grid>`
Component `<web-grid>` presents a grid containing web components `<web-cell>`.

*TBD*

### `<random-flip>`
Component `<random-flip>` presents a grid containing web components `<web-cell>`.

*TBD*

## Takeaways
*TBD*


## Discuss
*TBD*

## What's next
*TBD*
