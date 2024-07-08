export default function ButtonsBlock({ arr, elem, func }) {
  return arr.map((item, i) => (
    <button
      key={i}
      onClick={() => func(item)}
      className={item === elem ? "active" : ""}
    >
      {item}
    </button>
  ));
}
