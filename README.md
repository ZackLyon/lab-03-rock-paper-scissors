## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.

## HTML Setup
1) 3 radio `<inputs>` w/ name and value attributes inside `<labels>`
1) submit button
2) 2 injection sites for user and computer choices
1) 1 large injection site for win/loss message
1) 3 injection sites for running total of wins, losses and draws
1) Stretch: reset button
1) Stretch: injection site for running total resets

## States
1) total wins
2) total losses
3) total draws
1) Stretch: total resets

## Functions
1) getRandomThrow : output rock, paper or scissors
2) doesUserWin :
    - parameters: player, computer
    - output: win, lose, draw
3) display current win/lose
4) display user/computer picked
5) display total wins/losses/draws
6) Stretch: reset