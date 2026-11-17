# GTA VI Countdown

A static, mobile-friendly countdown page with a native share button and WhatsApp-friendly link sharing.

## Run locally

1. Download and extract the project.
2. Open the `gta-vi-countdown` folder in VS Code.
3. Open `index.html` in a browser. For the best experience, use VS Code's Live Server extension.

No Node.js, backend, API key, or database is required.

## Countdown target

The countdown currently targets **00:00 on 19 November 2026 in each visitor's local timezone**.

To change it, edit this line in `script.js`:

```js
const releaseDate = new Date(2026, 10, 19, 0, 0, 0);
```

JavaScript months are zero-indexed: January is `0`, November is `10`.

If Rockstar later announces an exact global release time, replace the date construction with the appropriate timestamp and timezone.

## Publish with GitHub Pages

1. Create a new public repository on GitHub, for example `gta-vi-countdown`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the repository root.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select branch **main** and folder **/(root)**, then save.
6. Wait for GitHub Pages to publish. Your site URL will look like:
   `https://YOUR-USERNAME.github.io/gta-vi-countdown/`
7. Open that URL on your phone and use **Share the countdown**. On supported phones this opens the system share sheet; choose WhatsApp. You can also paste the URL into any WhatsApp chat.

## Artwork and branding

The hero artwork in this starter project is an original CSS sunset/city illustration, not official Rockstar artwork. If you have permission to use an official promotional image, you can add it to `assets/` and adapt the `.artwork` background in `style.css`.

This is an unofficial fan-made countdown and is not affiliated with or endorsed by Rockstar Games.
