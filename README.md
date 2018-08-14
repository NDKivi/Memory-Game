# Rothko Memory
A simple memory game where you must select all cards one by one without repeating until you have picked all cards (so you must remember your choices to avoid choosing the same one again).  

## Technical Details
Built using React with the following components:
* ```<Game />``` : contains the game logic and render function
  * The game state is managed with three properties
    1. highScore - the highest score thus far since browser refresh
    2. count - the score of the current game
    3. cards - array of objects storing the display cards, which crucially have a property called "clicked" that registers whether the user already clicked that particular card
  * Render function calls a helper function called ```renderCards``` that returns an array with the right xml for the cards, using ```shuffle``` to randomize the order.
* ```<Stats />```: displays the high score and current score taking the props for those values from its parent ```<Game />```
* ```<Card />```: displays an individual image card (in this case a Rothko painting) based on props for the image URL, etc. from its parent ```<Game />```