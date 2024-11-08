import  { useState } from "react";
import MoodSelector from "./MoodSelector";
import BookList from "./BookList";
import axios from "axios";

function App() {
  const [mood, setMood] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const handleMoodChange = (selectedMood) => {
    setMood(selectedMood);
    fetchBooks(selectedMood);
  };

  const fetchBooks = async (selectedMood) => {
    try {
      const response = await axios.get(`http://localhost:3000/recommendation/${selectedMood}`);
      setBooks(response.data);
      setError("");
    } catch (error) {
      setError("Could not fetch book recommendations. Please try again.");
      setBooks([]);
    }
  };

  return (
    <div className="App">
      <h1>Find a Book Based on Your Mood</h1>
      <MoodSelector onMoodChange={handleMoodChange} />
      {error && <p className="error">{error}</p>}
      <BookList books={books} mood={mood} />
    </div>
  );
}

export default App;
