
Cellular Automaton is an explorative site that lets users create unique visual patterns based on mathematical rulesets. The grid is composed of upward-facing and downward-facing equilateral triangles, each of which can occupy one of four states. These states are integer values of 0, 1, 2, or 3 where each value maps to a color. We are using a neighborhood in which each cell is aware of its own state and the state of its three neighbors with whom it shares a side. The initial state of the automaton sets the state for each cell at generation 0. When the next generation is shown, approximately one second later, each cell's state has been recalculated based on a mathematical ruleset– a function of the four states in each neighborhood. Over time, symmetrical, chaotic, or stable designs emerge in quite an unpredictable fashion.


![Alt text](images/nested-expander.png?raw=true)
Created with initial state: Nested Triangle and ruleset: Expander



![Alt text](images/triforce-mangler.png?raw=true)
Created with initial state: Triforce and ruleset: Mangler (with randomness)



![Alt text](images/border-harmony.png?raw=true)
Created with initial state: Border and ruleset: Harmony (with hidden sidebar)



![Alt text](images/hexagon-swirls.png?raw=true)
Created with initial state: Hexagon and ruleset: Swirls (with hidden sidebar)



** features **

* Users select from a number of controls: initial state, ruleset, randomness, speed, color, hidden/visible sidebar

* The "what is this?" feature explains cellular automata in more detail and provides useful links for further reading



** build **

* React & Redux

* SVG (for cellular automaton cells)



** Created by Jason [j@jasondobrowner.com] & Monika [monika.zarako@gmail.com]
