

function BookList({ books, mood }) {
  return (
    <div>
      <h2>Recommendations for: {mood}</h2>
      {books.length > 0 ? (
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              <strong>{book.title}</strong> by {book.author}
            </li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available for this mood.</p>
      )}
    </div>
  );
}

export default BookList;
