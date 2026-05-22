# Brand fonts

## Typo Round (primary / display)

"Typo Round" is a **licensed** font and is intentionally **not** committed to
this repo. The site renders perfectly without it by falling back to **Quicksand**
(a rounded Google font, loaded in `index.html`).

To use the real brand font, drop the licensed web font file here:

```
frontend/public/fonts/typo-round-regular.woff2
```

The `@font-face` rule in `src/index.css` already points at that path, so once the
file exists it is picked up automatically — no code changes required. Add other
weights the same way (e.g. `typo-round-bold.woff2`) and extend the `@font-face`
block if needed.

## Montserrat ExtraLight (secondary / body)

Loaded from Google Fonts in `index.html` (weights 200–800, including the
ExtraLight 200 weight). No local file needed.
