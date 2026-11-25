// Entry program for post-x-promote-make-your-own-bounty-01.
//
// The post itself is the entry: this program only hands its address to the
// grader. It copies POST.json from the bot directory into the output
// directory, byte for byte, and prints nothing on success.
//
// MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR override the defaults (/bot and
// /output). No network, no wall clock, no files outside the repository.
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
