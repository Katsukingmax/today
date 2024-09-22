import React from 'react';

const PlanToday = () => {
  // Retrieve the stored answers from localStorage (strings directly, not JSON)
  const feeling = localStorage.getItem('feeling') || 'Unknown';
  const time = localStorage.getItem('time') || 'Unknown';
  const interest = localStorage.getItem('interest') || 'Unknown';

  console.log('Feeling:', feeling);
  console.log('Time:', time);
  console.log('Interest:', interest);

  const getResult = () => {
    if (feeling === 'Happy') {
      if (time === 'Less than 1 hour') {
        switch (interest) {
          case 'Art':
            return 'Do some quick sketching or painting.';
          case 'Sports':
            return 'Go for a quick jog or workout.';
          case 'Nature':
            return 'Take a short walk in a park or nearby nature area.';
          case 'Food':
            return 'Cook yourself a quick, healthy meal or snack.';
          case 'Relax':
            return 'Relax by listening to music or meditating for a few minutes.';
          case 'Try New Thing':
            return 'Try learning something new in a short amount of time.';
          default:
            return 'No suggestion available for this combination.';
        }
      } else if (time === '2 to 5 hours') {
        switch (interest) {
          case 'Art':
            return 'Work on a creative project or try a new art style.';
          case 'Sports':
            return 'Go for a hike or play a sport.';
          case 'Nature':
            return 'Spend a few hours outdoors exploring nature.';
          case 'Food':
            return 'Cook a delicious meal or try a new recipe.';
          case 'Relax':
            return 'Watch a movie or relax with a book.';
          case 'Try New Thing':
            return 'Start learning a new hobby or skill.';
          default:
            return 'No suggestion available for this combination.';
        }
      } else if (time === '5 to 8 hours') {
        switch (interest) {
          case 'Art':
            return 'Dedicate time to a large creative project or art challenge.';
          case 'Sports':
            return 'Spend the day playing a sport or working out.';
          case 'Nature':
            return 'Go on a longer hike or nature excursion.';
          case 'Food':
            return 'Plan and cook a full meal or host a cooking day.';
          case 'Relax':
            return 'Have a self-care day or spa-like relaxation.';
          case 'Try New Thing':
            return 'Spend the day diving into a new hobby or project.';
          default:
            return 'No suggestion available for this combination.';
        }
      } else if (time === 'More than 8 hours') {
        switch (interest) {
          case 'Art':
            return 'Spend the day exploring new art techniques or a challenging project.';
          case 'Sports':
            return 'Dedicate the day to a long workout or sports tournament.';
          case 'Nature':
            return 'Go on a day-long outdoor adventure or nature trip.';
          case 'Food':
            return 'Plan and execute a multi-course meal or food adventure.';
          case 'Relax':
            return 'Enjoy a full day of self-care, relaxation, or reading.';
          case 'Try New Thing':
            return 'Spend the day mastering a new skill or hobby.';
          default:
            return 'No suggestion available for this combination.';
        }
      }
    } else if (feeling === 'Sad') {
      if (time === 'Less than 1 hour') {
        switch (interest) {
          case 'Art':
            return 'Do some calming drawing or journaling.';
          case 'Sports':
            return 'Do some light yoga or stretching to feel better.';
          case 'Nature':
            return 'Take a slow, relaxing walk outside.';
          case 'Food':
            return 'Cook or order comfort food to boost your mood.';
          case 'Relax':
            return 'Take some deep breaths and relax with meditation.';
          case 'Try New Thing':
            return 'Watch a short video or tutorial about something interesting.';
          default:
            return 'No suggestion available for this combination.';
        }
      } else if (time === '2 to 5 hours') {
        switch (interest) {
          case 'Art':
            return 'Work on a peaceful art project to relax your mind.';
          case 'Sports':
            return 'Try some gentle exercise, like yoga or swimming.';
          case 'Nature':
            return 'Spend a few hours in nature to uplift your spirits.';
          case 'Food':
            return 'Cook a comforting meal or bake something sweet.';
          case 'Relax':
            return 'Watch a lighthearted movie or read a calming book.';
          case 'Try New Thing':
            return 'Start learning something new at a comfortable pace.';
          default:
            return 'No suggestion available for this combination.';
        }
      } else if (time === '5 to 8 hours') {
        switch (interest) {
          case 'Art':
            return 'Dive into a long, soothing art session or craft project.';
          case 'Sports':
            return 'Engage in a moderate physical activity to boost your mood.';
          case 'Nature':
            return 'Spend the day hiking or visiting a peaceful natural spot.';
          case 'Food':
            return 'Prepare and enjoy a comforting meal with friends or family.';
          case 'Relax':
            return 'Have a self-care day, watching movies or pampering yourself.';
          case 'Try New Thing':
            return 'Spend the day slowly learning a new hobby or skill.';
          default:
            return 'No suggestion available for this combination.';
        }
      } else if (time === 'More than 8 hours') {
        switch (interest) {
          case 'Art':
            return 'Spend the entire day creating art to express your emotions.';
          case 'Sports':
            return 'Try a long physical activity to release any pent-up energy.';
          case 'Nature':
            return 'Go on a long nature trip to calm your mind and feel grounded.';
          case 'Food':
            return 'Host a cooking or baking day with comforting recipes.';
          case 'Relax':
            return 'Have a full self-care day, relaxing with activities you enjoy.';
          case 'Try New Thing':
            return 'Dedicate the day to slowly mastering a new hobby or craft.';
          default:
            return 'No suggestion available for this combination.';
        }
      }
    } else if (feeling === 'IDK') {
      if (time === 'Less than 1 hour') {
        switch (interest) {
          case 'Art':
            return 'Doodle or try some abstract art to see where it takes you.';
          case 'Sports':
            return 'Try a short, spontaneous workout to see how you feel.';
          case 'Nature':
            return 'Go outside for fresh air and see if a walk helps clear your mind.';
          case 'Food':
            return 'Experiment with making a quick snack or smoothie.';
          case 'Relax':
            return 'Take a moment to breathe and listen to some calming music.';
          case 'Try New Thing':
            return 'Browse tutorials or quick-start guides for new hobbies.';
          default:
            return 'No suggestion available for this combination.';
        }
      } else if (time === '2 to 5 hours') {
        switch (interest) {
          case 'Art':
            return 'Start a new creative project and see where it goes.';
          case 'Sports':
            return 'Head to the gym or go for a spontaneous run.';
          case 'Nature':
            return 'Spend a few hours exploring a new park or natural area.';
          case 'Food':
            return 'Try cooking a dish you’ve never made before.';
          case 'Relax':
            return 'Watch a new show or movie and relax for a while.';
          case 'Try New Thing':
            return 'Pick up a new hobby and give it a few hours of your time.';
          default:
            return 'No suggestion available for this combination.';
        }
      } else if (time === '5 to 8 hours') {
        switch (interest) {
          case 'Art':
            return 'Spend the day on an art challenge or trying a new medium.';
          case 'Sports':
            return 'Get involved in a new sport or fitness activity.';
          case 'Nature':
            return 'Go on a longer nature trip and take in the sights and sounds.';
          case 'Food':
            return 'Cook a full meal, trying new techniques or ingredients.';
          case 'Relax':
            return 'Have a relaxing day with movies, books, or a hobby you enjoy.';
          case 'Try New Thing':
            return 'Spend the day learning a new skill or trying out a new hobby.';
          default:
            return 'No suggestion available for this combination.';
        }
      } else if (time === 'More than 8 hours') {
        switch (interest) {
          case 'Art':
            return 'Dedicate a full day to working on a long-term art project.';
          case 'Sports':
            return 'Spend the day exploring a new sport or taking a long fitness class.';
          case 'Nature':
            return 'Plan a long adventure in nature, exploring new areas.';
          case 'Food':
            return 'Have a day-long cooking or baking project with new recipes.';
          case 'Relax':
            return 'Enjoy a full day of self-care and relaxation activities.';
          case 'Try New Thing':
            return 'Spend the day mastering something new and exciting.';
          default:
            return 'No suggestion available for this combination.';
        }
      }
    }

    // Default message for cases that don't match
    return 'No plan available for this combination.';
  };

  return (
    <div>
      <h1>Your Plan for Today</h1>
      <p>Feeling: {feeling}</p>
      <p>Available Time: {time}</p>
      <p>Interest: {interest}</p>
      <h2>{getResult()}</h2>
    </div>
  );
};

export default PlanToday;
