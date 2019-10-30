// import Link from 'next/link';
import GridCell from '../components/GridCell';

const Grid = (props) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${props.labels.length}, 1fr)`,
    borderTop: "1px solid black",
    borderRight: "1px solid black",
  };

  return (
    <div style={gridStyle}>
      {
        props.labels && props.labels.map(x => (<GridCell><strong>{x}</strong></GridCell>))

      }

      {
        props.data && props.data.map(x => (
          Object.entries(x).map(([key, value]) => <GridCell>{value}</GridCell>)
        ))
      }
    </div>
  )
};

export default Grid;
