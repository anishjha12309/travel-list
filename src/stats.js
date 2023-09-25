export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items into the list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentageItems = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentageItems === 100
          ? "You got everythingg! Ready to Go ✈️"
          : `💼 You have ${numItems} items on your list , and you already packed
          ${numPacked} (${percentageItems}%)`}
      </em>
    </footer>
  );
}
