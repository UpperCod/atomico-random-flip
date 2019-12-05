import { customElement, useEvent, h } from 'atomico';

const WebCell = props => {
  const dispatchToggleCell = useEvent("togglecell", {
    composed: true,
    bubbles: true
  });
  return h("host", {
    shadowDom: true,
    onclick: e => dispatchToggleCell(props),
    style: getStyle(props.live)
  });
};

WebCell.props = {
  live: Boolean,
  col: Number,
  row: Number
};
var webCell = customElement("web-cell", WebCell); // Helpers CSS

const getStyle = live => {
  return {
    display: "block",
    cursor: "pointer",
    width: "100%",
    height: "100%",
    border: "1px solid gray",
    background: live ? "MidnightBlue" : "AliceBlue"
  };
};

export default webCell;
//# sourceMappingURL=web-cell.js.map
