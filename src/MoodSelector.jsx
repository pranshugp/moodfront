

function MoodSelector({ onMoodChange }) {
  const moods = ["Happy", "Sad", "Adventurous", "Romantic", "Curious", "Relaxed"];

  const handleChange = (e) => {
    onMoodChange(e.target.value);
  };

  return (
    <div>
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Select your mood</option>
        {moods.map((mood) => (
          <option key={mood} value={mood}>{mood}</option>
        ))}
      </select>
    </div>
  );
}

export default MoodSelector;
