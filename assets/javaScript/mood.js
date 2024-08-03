function trackMood() {
    const mood = document.getElementById('mood').value;
    const notes = document.getElementById('notes').value;

    if (mood) {
        document.getElementById('moodResult').textContent = `Mood: ${mood}. Notes: ${notes}`;
    } else {
        document.getElementById('moodResult').textContent = 'Please select a mood.';
    }
}
