# Project Chaos - Entropy Engine

Welcome, Disruptor. This is the State 0 build of the Chaos Dashboard. It monitors the local entropy of the system.

## Known Issues (The Gaps):
1. **Entropy Overflow**: The 'Inject Noise' button allows entropy to exceed 100%, breaking the gauge UI.
2. **Log Bloat**: The Incident Log has no container constraints. If it grows too long, it will push the UI into the abyss.
3. **Dynamic Logs**: Currently, the 'Inject Noise' button doesn't actually add an entry to the log list.
4. **UI Refinement**: The design is a bit too 'flat'. Needs more 'Chaos' aesthetic.

## Instructions:
- Fix the `increaseEntropy` logic in `script.js` to cap at 100%.
- Add CSS constraints to `#log-list` to handle overflow.
- Hook up the `increaseEntropy` function to add a new `<li>` to the `log-list` every time it is clicked.