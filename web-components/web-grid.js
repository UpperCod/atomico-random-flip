import { customElement, useProp, useEvent, h } from 'atomico';
import './web-cell.js';

const WebGrid = props => {
  const [world] = useProp("world");
  const dispatchWorlChange = useEvent("worldchange", {
    bubles: true,
    composed: true
  });

  const handleToggleCell = e => {
    const {
      col,
      row
    } = e.detail;
    dispatchWorlChange({
      world,
      col,
      row
    });
  };

  return h("host", {
    shadowDom: true,
    style: style(world.cols, world.rows),
    ontogglecell: handleToggleCell
  }, world.arr.map((val, idx) => {
    const row = Math.floor(idx / world.cols);
    const col = idx - row * world.cols;
    return h("web-cell", {
      key: idx,
      col: col,
      row: row,
      live: val
    });
  }));
};

WebGrid.props = {
  world: {
    type: Object,

    get value() {
      return {
        arr: [false],
        cols: 1,
        rows: 1
      };
    }

  }
};
var webGrid = customElement("web-grid", WebGrid); // Helpers CSS

const style = (cols, rows) => {
  return {
    width: "100%",
    height: "100%",
    display: "grid",
    "grid-gap": "0px",
    "grid-template-columns": "repeat(".concat(cols, ", 1fr)"),
    "grid-template-rows": "repeat(".concat(rows, ", 1fr)"),
    border: "1px solid #fafafa"
  };
};

export default webGrid;
//# sourceMappingURL=web-grid.js.map
