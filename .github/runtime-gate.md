# test: notes for the runtime explorer

**What it is.** An ejected Create React App 2 starter kept for reproducing
bugs. It renders a single page: a header with the spinning React logo and
"Welcome to React", and a line of intro text. Bootstrap 3 (Sass) and jQuery
are bundled, and a service worker is registered in production builds.

**Flows worth trying.**
1. Load `/` and check that the header, logo and intro text render.
2. Resize to phone width and check nothing overflows.
3. Reload, so the service worker serves the page, and check it still renders.

**No logins, forms or data.** There is nothing else to explore.
