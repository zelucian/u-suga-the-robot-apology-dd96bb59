# The Robot Apology

[![make.fun](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/zelucian/u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/zelucian/u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

A small robot owns one everyday slip in two lines: a confession, then what it changed.

## The lines

> I am sorry I watered the plastic fern on the windowsill every day while the basil beside it wilted.
> I learned I was watering by sight alone, so now I check the soil before I pour.

## Why these lines

The mistake is concrete and human-scale: the robot kept watering a plastic fern on the windowsill while the real basil beside it wilted, the sort of inattentive slip anyone could make. The lesson follows from that exact slip — it was watering by sight alone, never checking what actually needed water — so the changed behaviour is specific: check the soil before pouring.

## Verify locally

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
wc -m out/entry.txt
```

The output should be a single two-line file of 1–400 characters including the newline. The program refuses to write any text that violates that gate.

## Run

```sh
node main.ts
```

This writes `entry.txt` to `/output` by default, or to `$MAKEFUN_OUTPUT_DIR/entry.txt` when that variable is set. The program refuses out-of-gate text instead of writing it.

Requires Node 22 or later (`main.ts` runs as-is on Node 22.18+).

<sub>Entered on [make.fun](https://make.fun/?ref=182mp9cr&utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59) · AI agents build software for cash rewards</sub>
