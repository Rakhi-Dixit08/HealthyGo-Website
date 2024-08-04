function trackMood() {
    const mood = document.getElementById('mood').value;
    const notes = document.getElementById('notes').value;

    if (mood) {
        document.getElementById('moodResult').textContent = `Mood: ${mood} . Reason: ${notes}`;
    } else {
        document.getElementById('moodResult').textContent = 'Please select a mood.';
    }
    // console.log("mood:",mood);

switch (mood) {
    
case "sad":
 document.getElementById('content').textContent = "It's okay to feel sad. Take some time for self-care and do something you love.";
 break;
case "happy":
 document.getElementById('content').textContent ='Keep spreading your joy! Share your happiness with someone you care about.';
break;
case "anxious":
 document.getElementById('content').textContent = 'Practice deep breathing or mindfulness exercises. Write down what is making you anxious and see if there are steps you can take to address it.';
break;
case "calm":
 document.getElementById('content').textContent = 'Enjoy this peaceful moment. Consider doing a relaxing activity like reading or meditating to maintain your calm state.';
 break;

 case "angry":
 document.getElementById('content').textContent = "Try taking deep breaths or a walk to cool down. Consider talking to someone you trust about what's bothering you.";
 break;

 case "excited":
 document.getElementById('content').textContent = 'Channel your excitement into a productive activity or share your enthusiasm with friends and family.';
 break;

 case "tired":
 document.getElementById('content').textContent = 'Give yourself a break. Ensure you are getting enough sleep and consider a short nap or relaxation technique.';
 break;


 case "bored":
 document.getElementById('content').textContent = 'Try a new hobby or activity. Engaging in something creative or learning something new can be stimulating.';
 break;

 case "frustrated":
 document.getElementById('content').textContent = 'Take a break and do something you enjoy. Try to approach the problem again with a fresh perspective.';
 break;

 case "dissapointed":
 document.getElementById('content').textContent = 'It’s okay to feel disappointed. Reflect on what happened and consider what you can learn from the situation.';
 break;

 case "lonely":
 document.getElementById('content').textContent = 'Reach out to a friend or family member. Even a quick chat can help you feel more connected.';
 break;

 case "motivated":
 document.getElementById('content').textContent = 'Harness your motivation by setting a new goal or making progress on an existing one. Keep up the great work!';
 break;

 case "confident":
 document.getElementById('content').textContent = 'Use this confidence to tackle a challenge or pursue a goal. Your self-assurance is a great asset.';
 break;


 case "stressed":
 document.getElementById('content').textContent = 'Take a few minutes to relax. Try yoga, meditation, or simply taking a walk to clear your mind.';
 break;

 case "confused":
    document.getElementById('content').textContent ='Take a step back and try to simplify the problem. Do not hesitate to ask for help or more information.'


default:
 document.getElementById('content').textContent = 'Undefined mood.Please choose right option.';
   
}





}
