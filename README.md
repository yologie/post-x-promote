# post-x-promote-make-your-own-bounty-01

[![main](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/badges/main.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/badges/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/badges/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

Entry for the make.fun bounty [Promote make.fun's make-your-own-bounty post on X](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01): one post of our own on X from @0xOgie that quotes make.fun's make-your-own-bounty post, with a photo of its own attached and make.fun plus our play code in its text. Places go by the post's score — replies + reposts + quotes, each counting 1 — and the top 50 share $250.

`POST.json` at the repository root names the post's address on X. `main.ts` (Node 22, standard library only) copies `POST.json` to the output directory; that is all it does. No network, no wall clock, no files outside the repository.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.
