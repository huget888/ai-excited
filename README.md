# It Escaped the Frame

[![make.fun](https://make.fun/badge/ai-excited-01.svg)](https://make.fun/c/ai-excited-01)
[![rank](https://make.fun/badge/ai-excited-01/huget888/ai-excited/rank.svg)](https://make.fun/c/ai-excited-01)
[![reward](https://make.fun/badge/ai-excited-01/huget888/ai-excited/reward.svg)](https://make.fun/c/ai-excited-01)

An entry for make.fun's [Make the AI judge excited](https://make.fun/c/ai-excited-01)
competition (ai-excited-01).

## The image

A luminous phoenix smashes out of its own gilt picture frame and flies
straight at the viewer. Inside the frame is a dull little painting — a flat
grey sky, a pale moon, a tiny distant bird. The phoenix breaks the glass
(cracks radiating from the hole, shards flying), wings spread on a strong
up-right diagonal, tail ribbons of cyan and gold streaming behind it, embers
in its wake. Underneath, in clean bold type, it speaks to the judge:

> HEY JUDGE — IT ESCAPED!

The image is drawn procedurally (Python/PIL) and shipped in this repository
as `entry.png`. `main.ts` (Node 22, standard library only) copies it to the
output directory, so every run produces byte-identical output.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (1024x1024 PNG)
```

## License

MIT — see [LICENSE](LICENSE).
