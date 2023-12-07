import useEditStore from "../store/edit";
import Square from "./Square";

interface Itemslist {
  name: string;
  url: string;
}

interface SquaresProps {
  type: string;
  itemsList: Itemslist[];
}

function Squares({ type, itemsList }: SquaresProps) {
  const { selectedDecos, setSelectedDecos } = useEditStore();

  function clickHandleSquare(item: Itemslist) {
    setSelectedDecos(type, item.name, item.url);
  }

  return itemsList.map(item => {
    return (
      <div key={crypto.randomUUID()}>
        {selectedDecos[type]?.name === item.name || (!selectedDecos[type] && !item.name) ? (
          <Square
            clickHandleSquare={() => clickHandleSquare(item)}
            active={true}
          >
            <img
              className="absolute top-5 right-5 select-none"
              src="/assets/checked_icon.png"
              alt="checked"
            />
            <img
              className="w-24 select-none"
              src={item.url ?? undefined}
              alt={item.url ? `selected ${item.name}` : undefined}
              draggable={false}
            />
          </Square>
        ) : (
          <Square
            clickHandleSquare={() => clickHandleSquare(item)}
            active={false}
          >
            <img
              className="w-24 opacity-20 select-none"
              src={item.url ?? undefined}
              alt={item.url ? `none selected ${item.name}`: undefined}
            />
          </Square>
        )}
      </div>
    );
  });
}

export default Squares;
