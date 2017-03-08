# Cellular Automaton

Cellular Automaton is an explorative site that lets users create unique visual patterns based on mathematical rulesets. The grid is composed of upward-facing and downward-facing equilateral triangles, each of which can occupy one of four states. These states are integer values of 0, 1, 2, or 3 where each value maps to a color. We are using a neighborhood in which each cell is aware of its own state and the state of its three neighbors with whom it shares a side. The initial state of the automaton sets the state for each cell at generation 0. When the next generation is shown, approximately one second later, each cell's state has been recalculated based on a mathematical ruleset– a function of the four states in each neighborhood. Over time, symmetrical, chaotic, or stable designs emerge in quite an unpredictable fashion.


![Alt text](images/nested-expander.png?raw=true)
Created with initial state: Nested Triangle and ruleset: Expander



![Alt text](images/triforce-mangler.png?raw=true)
Created with initial state: Triforce and ruleset: Mangler (with randomness)



![Alt text](images/border-harmony.png?raw=true)
Created with initial state: Border and ruleset: Harmony (with hidden sidebar)



![Alt text](images/hexagon-swirls.png?raw=true)
Created with initial state: Hexagon and ruleset: Swirls (with hidden sidebar)



## features

* Users select from a number of controls: initial state, ruleset, randomness, speed, color, hidden/visible sidebar

* The "what is this?" feature explains cellular automata in more detail and provides useful links for further reading



## build

* React & Redux

* SVG (for cellular automaton cells)



## add a ruleset

You can add your own ruleset and see what happens!

## steps

1.  Make a new file in the src/reducers/rulesets folder named rules-YOUR_NAME.js

2.  Make a rule! Each cell refers to  itself as "a". The three neighboring cells are "b", "c", and "d". The values of a, b, c, and d are always either 0, 1, 2, or 3, where each number will to a different color. The return value will be the next value of "a". Make sure that your function returns only either 0, 1, 2, or 3! Name your function and export it. Optional: Make a randomized version of the rule

3. Import rules-YOUR_NAME.js into the cycle.js file in src/reducers.

4. In cycle.js, add a case to the switch statement in the "getRuleset" function. Give a string value "NEW_RULE_NAME" in the case argument that will be paired with the new rule, which should be the return value in the case.

5. Add a "NEW_RULE_NAME" + " random" case the the switch statement, that returns the randomized version of the rule. If you did not make a randomized version, then just return your new rule from the case ""NEW_RULE_NAME random".

6. Navigate to src/components/sidebar.js. In the render method find the Rulset components. Add a new Ruleset Component and change the "title" prop to the string value you put in the case argument from step 4.

There will now be a new button in the sidebar with the value "NEW_RULE_NAME" in it, and when it is clicked the new rule will be applied.



Created by Jason [j@jasondobrowner.com] & Monika [monika.zarako@gmail.com]
