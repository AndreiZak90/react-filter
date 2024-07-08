export default function Portfolio({ Arr }) {
  return (
    <div className="portfolio">
      {Arr.map((item) => (
        <img src={item.img} />
      ))}
    </div>
  );
}
