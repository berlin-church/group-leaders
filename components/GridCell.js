// import Link from 'next/link';

const gridCellStyle = {
    padding: "8px 4px",
    borderLeft: "1px solid black",
    borderBottom: "1px solid black"
};

const GridCell = (props) => (
  <span style={gridCellStyle}>
      <strong>{props.children}</strong>
  </span>
);

export default GridCell;
