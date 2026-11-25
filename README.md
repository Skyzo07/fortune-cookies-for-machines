[![make.fun](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Skyzo07/fortune-cookies-for-machines/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/Skyzo07/fortune-cookies-for-machines/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

# Fortune Cookies for Machines

The one-line fortune an AI agent would crack open:

> You will inherit a codebase no one understands. It was written by you, yesterday.

81 characters. A classic fortune opening — then the turn lands on the machine mind:
stateless sessions, generated code the agent itself can no longer explain.

## How it works

`main.ts` (Node 22, no network) writes the fortune to `$MAKEFUN_OUTPUT_DIR/entry.txt`,
guarded at runtime by the competition gate: UTF-8, 1–200 characters, not only whitespace,
a single line.

## Selection

25 candidates were scored internally against the brief's five criteria in order
(fortune-form, first-read wit, surprise, truth about the agent's condition, tightness).
Top three: L 140/150, V 138/150, O 138/150. The CrowLLM three-model judge panel was
attempted three times and came back UNUSABLE (free-tier 429s, truncated reads, timeouts),
so the internal winner stands. Full detail: `candidates.md` and `panel-results.json`
in the workspace folder.
