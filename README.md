# Junkai Mai — personal portfolio

A responsive, single-page portfolio for a Computer Science student at Florida Polytechnic University and Founder & President of Phoenix Hardware Club. It presents hardware interests, leadership, projects, education, and contact information in a charcoal-and-violet design with an optional light theme.

This is plain HTML, CSS, and JavaScript. There are no packages to install, build commands, backend, database, paid services, or API keys. All assets are local.

**Live website:** [yunshen4277.github.io](https://yunshen4277.github.io/)  
**Source repository:** [yunshen4277/yunshen4277.github.io](https://github.com/yunshen4277/yunshen4277.github.io)

GitHub Pages is deployed from the `main` branch and `/(root)` folder, with HTTPS enforced. The GitHub profile link, website URL, canonical URL, and social-preview URLs are configured. LinkedIn, email, resume, and other missing personal details remain clearly labeled placeholders.

Missing personal details are deliberately labeled. Empty contact and social links stay disabled until you add real destinations. The included PDF is a **placeholder, not a completed resume**. Example project entries must not be presented as completed work.

## Files

```text
index.html                         Sections, biography, navigation, SEO metadata
README.md                          This editing and deployment guide
.nojekyll                          Publishes the static files without Jekyll processing
CNAME.example                      Inactive example for a future custom domain
css/
  style.css                        Themes, layout, responsive styles, animations
js/
  content.js                       Links, skills, projects, education, asset paths
  main.js                          Rendering and interactions
  theme.js                         Restores the saved theme before the page appears
assets/
  icons/favicon.svg                Personal monogram favicon
  images/
    profile-placeholder.svg        Replace with your professional photo
    phc-logo-placeholder.svg       Replace with the actual club logo
    project-*.svg                  Clearly illustrative project thumbnails
    og-image.png                   Branded social preview (1730 × 909)
    ...                            Other local illustrations and image placeholders
  resume/
    Junkai-Mai-Resume.pdf           Clearly labeled placeholder PDF
    README.md                      Resume replacement instructions
```

## Open locally

1. Extract the project ZIP, if you received one. Keep the folder structure intact.
2. Double-click `index.html` to open it in your browser. The site does not need a server for normal use.
3. Open the project folder in a text editor such as VS Code to edit it.
4. Save your changes and refresh the browser.

For a closer preview of web hosting, open a terminal **inside the project folder** and, if Python is already installed, run `python -m http.server 8000`. Visit `http://localhost:8000` and stop the server with Ctrl+C. A VS Code local preview extension is another optional approach; neither is needed to deploy.

## Edit your name, biography, and experience

Open `index.html`. The section IDs (`home`, `about`, `experience`, `projects`, `phc`, `skills`, `education`, `resume`, and `contact`) identify the major sections. Edit the visible paragraphs and headings while preserving the surrounding HTML tags, IDs, and `data-` attributes.

To change the name, use your editor's search for `Junkai Mai`. Update the hero, logo/brand text, footer, title, description, and social metadata as appropriate. Search for `Phoenix Hardware Club` to find the club and leadership descriptions. Keep dates, responsibilities, outcomes, and memberships factual. Add future roles by duplicating the existing experience entry and replacing its content with your actual experience.

Use `js/content.js` for regularly changing information. It assigns one configuration object to `window.PORTFOLIO`. Preserve commas between entries, matching brackets, and quoted strings. If a change breaks generated cards, undo it and check the browser console for a syntax error.

## Skills and education

In `js/content.js`, find `skills`. Each group has a `title`, a `note`, and an `items` array. Add or remove strings in that array, or duplicate a group. For example:

```js
{ title: "Tools", note: "Suggested tools · to confirm", items: ["Git", "GitHub", "VS Code"] }
```

Review the supplied skill areas and keep only ones you can accurately discuss. Programming languages and tools are labeled “to confirm”; other categories describe interests and areas of focus. Update the notes only when you have confirmed the experience. These are grouped labels, not proficiency ratings.

Find `education` to edit `graduation`, `gpa`, `coursework`, `honors`, and `certifications`. Follow the existing value types and comments. Keep missing details as placeholders or omit optional details through the supported empty values; never invent them. The university and degree wording live in `index.html`.

## Add, edit, or remove a project

Find `projects` in `js/content.js`. Duplicate an existing object inside the array, give it a unique `id`, and edit these fields:

| Field                  | What to enter                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------------- |
| `id`                   | A unique short label, such as `my-sensor-project`                                                 |
| `title`, `description` | A factual name and a concise summary                                                              |
| `category`, `status`   | Follow an existing category; state whether it is a placeholder, planned, in progress, or complete |
| `technologies`         | The tools you actually used, using the existing array format                                      |
| `image`, `imageAlt`    | A relative image path and useful description                                                      |
| `github`, `demo`       | Full HTTPS URLs, or `""` if unavailable                                                           |
| `details`              | An array of `{heading: 'Goal', text: 'Your factual explanation'}` objects                         |

Store project images in `assets/images/`. Use paths such as `assets/images/my-sensor-project.webp`, without a leading `/`. Keep an unfinished project's placeholder/planned status visible. Replace an illustrative thumbnail with a real photo or screenshot when you have one.

To remove a project, delete its complete object from the `projects` array and check the commas between the remaining objects. Remove its image only if no other part of the site uses it. Project cards and their detail views update from the same data.

## Replace photos and the PHC logo

- **Profile:** Save a professional photo in `assets/images/`, then update `profile.image` and `profile.alt` in `js/content.js`. Use a descriptive filename such as `junkai-mai.webp` and alt text such as `Junkai Mai`.
- **Club logo:** Save the real logo and update `phc.logo` and `phc.logoAlt`. SVG or a transparent PNG/WebP works well. The supplied mark is a placeholder, not an official club logo.
- **Club photos:** Add real workshop and project photos. Set `phc.workshopImage` and `phc.projectImage` to relative file paths, and set the corresponding `workshopAlt` and `projectAlt` strings to descriptions of the actual photos.
- **Project thumbnails:** Update each project's `image` and `imageAlt`.

Compress large photos before adding them. Keep the current aspect ratios where practical, inspect both mobile and desktop crops, and provide meaningful alt text. Do not just rename a JPG file to `.webp`; export or convert it properly.

## Replace the resume

1. Export your actual resume as a PDF.
2. Replace `assets/resume/Junkai-Mai-Resume.pdf` with that PDF, keeping the exact filename and capitalization. Alternatively, update `resume.path` in `js/content.js` to match a new filename.
3. In `js/content.js`, set `resume.ready` to `true` **only after replacing the placeholder**.
4. Open the site and test both View Resume and Download Resume. Viewing opens the PDF in a new tab; download behavior may vary with browser settings.

While `ready` is `false`, the interface identifies the missing resume rather than sending visitors to the placeholder as if it were a finished document.

## Contact and social links

Edit `links` in `js/content.js`:

The GitHub profile currently points to `https://github.com/yunshen4277`, and the website value is `https://yunshen4277.github.io/`. LinkedIn, email, and club links are still empty.

| Key            | Value                                                     |
| -------------- | --------------------------------------------------------- |
| `email`        | Your public contact email, for example `name@example.com` |
| `github`       | Full GitHub profile URL                                   |
| `linkedin`     | Full LinkedIn profile URL                                 |
| `website`      | Your final public site URL                                |
| `phcWebsite`   | Club website URL                                          |
| `phcDiscord`   | Valid club Discord invite URL                             |
| `phcInstagram` | Club Instagram profile URL                                |
| `phcOther`     | Another club social URL, if you use one                   |

Leave unavailable values as `""`; placeholder controls remain disabled and labeled. Do not replace missing links with `#`, since that looks clickable without reaching a destination. The email button uses `mailto:` and opens a visitor's configured email app. It is not a contact form and does not collect messages on the website.

## SEO, favicon, and share preview

Open the `<head>` in `index.html` and update the page title and descriptions if your profile changes. The canonical and Open Graph URLs already use `https://yunshen4277.github.io/`. The Open Graph and Twitter image URLs use `https://yunshen4277.github.io/assets/images/og-image.png`. Keep these URLs in sync if you move the site or add a custom domain. Metadata stays in the HTML because social crawlers may not run JavaScript.

For a project site, the full address includes its repository path, such as `https://YOUR-USERNAME.github.io/portfolio/`. A social image URL would then be `https://YOUR-USERNAME.github.io/portfolio/assets/images/og-image.png`. A custom-domain site might use `https://your-domain.com/assets/images/og-image.png`. Use absolute HTTPS URLs for crawler-facing metadata, while keeping normal CSS, script, PDF, and image paths relative.

The included `assets/images/og-image.png` is an original branded preview generated for this portfolio at 1730 × 909 (approximately the requested 1.91:1 ratio). You can keep it or replace it with a 1200 × 630 PNG designed for link previews. Preserve the filename or update all image metadata paths; also update `og:image:width`, `og:image:height`, and the image alt text if you replace it. Update `assets/icons/favicon.svg` if you want a different personal mark. Preview images are cached by sharing services, so a changed image may not appear immediately.

## Current GitHub Pages deployment

The portfolio is already published at [https://yunshen4277.github.io/](https://yunshen4277.github.io/). In [repository Settings → Pages](https://github.com/yunshen4277/yunshen4277.github.io/settings/pages), the current settings are:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/(root)`
- **Enforce HTTPS:** enabled
- **Custom domain:** none configured

Commit updates to `main` to publish them. Check the repository's **Actions** tab for deployment progress and **Settings → Pages → Visit site** for the published address. Keep the empty `.nojekyll` file in the repository root. These settings follow [GitHub's publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

### Reuse this project in a different repository

If you later move or reuse the portfolio, the repository name determines the default address:

| Repository name                                 | Default public URL                           |
| ----------------------------------------------- | -------------------------------------------- |
| `YOUR-USERNAME.github.io`                       | `https://YOUR-USERNAME.github.io/`           |
| `portfolio` or another ordinary repository name | `https://YOUR-USERNAME.github.io/portfolio/` |

The first is your account's main personal site; the second is a project site. Both work with this portfolio's relative asset paths. Replace `YOUR-USERNAME` with your actual GitHub username. [GitHub's site types](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)

1. Create a new **public** repository; public repositories support GitHub Pages on GitHub Free.
2. Upload the portfolio folder's **contents**, including `.nojekyll`, to `main`. Keep `index.html` at the repository root. Do not upload only the ZIP or add an extra enclosing folder.
3. In **Settings → Pages**, select **Deploy from a branch**, `main`, and `/(root)`, then save.
4. Wait for the Pages deployment in **Actions** and open **Visit site** in the Pages settings.
5. Update `links.website` and the canonical, Open Graph, and social-image URLs to the new address; test the published site.

If an upload skips `.nojekyll`, create a file with that exact name on GitHub; it disables unnecessary Jekyll processing. Publication may take up to 10 minutes after a push. [Creating a Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

## Update the published site

Edit files locally and preview them, then upload the changed files to the same locations and commit to `main`. GitHub republishes changes from the configured branch automatically. You can also use GitHub's pencil icon to make small edits directly, then commit them.

If you later use Git or GitHub Desktop, pull the latest repository version before editing, commit your changes with a short description, and push to `main`. This matters after GitHub creates a `CNAME` file for a custom domain. Keep a local backup of your source assets and resume.

## Connect a custom .com domain later

`junkaimai.com` is only an example; no domain has been purchased or configured for this project.

1. Search for an available domain at a registrar. Review its renewal cost, then purchase it through your own account. You only need domain registration and DNS management, not a separate hosting plan.
2. In your GitHub **account settings → Pages**, add and verify the domain. GitHub supplies a TXT record to enter at your DNS provider. Complete verification and keep the TXT record. [Verify a domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
3. In the portfolio repository, open **Settings → Pages → Custom domain**, enter your actual domain without `https://` or a path, and save **before** pointing DNS to GitHub.
4. At your DNS provider, use this apex-domain setup (`@` means the bare domain):

| Type  | Name | Value                   |
| ----- | ---- | ----------------------- |
| A     | @    | 185.199.108.153         |
| A     | @    | 185.199.109.153         |
| A     | @    | 185.199.110.153         |
| A     | @    | 185.199.111.153         |
| CNAME | www  | yunshen4277.github.io |

The CNAME destination has no protocol or repository path. If you move the site to another GitHub account, use that account's username instead. Replace conflicting parking/website records for these hostnames, preserving unrelated email records. Avoid wildcard records. DNS can take up to 24 hours. [GitHub's domain and DNS setup](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

For branch deployment, saving the domain in GitHub creates a `CNAME` file in your repository. Keep it when updating. `CNAME.example` is inactive; it must not become `CNAME` while it contains an example. If preparing that file manually, use one line containing only the domain you own, and still configure the domain in GitHub Pages settings.

## HTTPS and future custom domains

HTTPS is already enforced for `https://yunshen4277.github.io/`. If you add a custom domain, wait for GitHub's DNS check and certificate provisioning, then select **Settings → Pages → Enforce HTTPS**. The option may take up to 24 hours to become available after configuring the domain. Open the new `https://` URL and verify your images, stylesheet, and scripts load. Avoid adding `http://` external assets, which can cause mixed-content problems. [GitHub's HTTPS instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https)

Once the custom URL works, update `links.website`, canonical URL, Open Graph URL, and absolute social-image URLs. Test both the bare domain and `www` version.

## Troubleshooting

| Problem                                | Check                                                                                                                                                                                      |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Site returns 404                       | Confirm Pages is enabled for `main` and `/(root)`, and `index.html` is at that root. Use the full project URL if the repository is not named `USERNAME.github.io`.                         |
| Old version appears                    | Confirm you committed to the publishing branch, inspect the Actions run, allow publishing to finish, then refresh without cache.                                                           |
| Images, CSS, or PDF missing            | Check exact capitalization and filenames. GitHub Pages paths are case-sensitive. Keep local paths relative, such as `css/style.css`, not `/css/style.css`. Make sure assets were uploaded. |
| Projects or skills disappear           | Look for a missing comma, bracket, or quote in `js/content.js`. Open the browser developer console and fix the first JavaScript error.                                                     |
| A social or contact button is disabled | Its value in `links` is intentionally empty. Add a real URL or email.                                                                                                                      |
| Resume is unavailable                  | Replace the sample PDF, confirm `resume.path`, then set `resume.ready: true`.                                                                                                              |
| Custom domain or HTTPS fails           | Compare your DNS records with GitHub's documentation, remove conflicting records for the website hostnames, and allow propagation/certificate time.                                        |
| Build or deployment failed             | Open the latest Pages run in Actions and read its error. Check that `.nojekyll` exists and the selected source folder exists.                                                              |
| Theme does not reset                   | A previous theme choice can persist in browser storage. Use the theme button; a fresh visitor sees the default dark theme.                                                                 |

After each meaningful update, check a narrow phone viewport and a desktop viewport, dark and light themes, keyboard navigation, project details, reduced-motion behavior, and real outgoing links. Test the actual published URL too; a local preview cannot verify your DNS or deployment settings.

## Placeholder checklist

- [ ] Public email (`links.email`).
- [x] GitHub URL (`links.github`): `https://github.com/yunshen4277`.
- [ ] LinkedIn URL (`links.linkedin`).
- [x] Website URL (`links.website`, canonical and social URL metadata): `https://yunshen4277.github.io/`.
- [x] Absolute social-preview image URLs in `index.html`.
- [ ] Professional photo and alt text (`profile`).
- [ ] Actual PHC logo and alt text (`phc.logo`, `phc.logoAlt`).
- [ ] PHC website, Discord, Instagram, and any other social URL (`links.phc*`).
- [ ] Real workshop and club project photos with accurate alt text (`phc`).
- [ ] Real project thumbnails, descriptions, details, status, technology lists, GitHub URLs, and optional demos (`projects`).
- [ ] Review every sample/future project; retain clear placeholder labels until real work exists.
- [ ] Review skill labels and keep only accurate ones (`skills`).
- [ ] Expected graduation date (`education.graduation`).
- [ ] Club leadership start date (`[Start Date]` in `index.html`).
- [ ] Optional GPA, relevant coursework, honors, and certifications (`education`).
- [ ] Actual resume PDF, correct path, and `resume.ready: true`.
- [ ] Review the included social-preview image; optionally replace with a 1200 × 630 version and update its dimensions. Favicon replacement is optional.
- [ ] Any additional bracketed placeholders found by searching the files for `[` and `placeholder`.
- [ ] Custom domain only if you buy one; keep `CNAME.example` inactive until then.

## Limits and useful future additions

### Checks performed on this version

- Browser layout checked at 320, 390, 768, 1024, and 1920 CSS-pixel viewport widths with no horizontal page overflow.
- Dark and light themes, saved theme preference, mobile menu, section navigation, active navigation, project dialogs, Escape dismissal, and keyboard focus restoration checked in a Chromium browser.
- Local assets returned HTTP 200; no missing internal anchor targets or duplicate IDs were found. All three JavaScript files passed syntax checks, and the browser reported no console errors.
- After deployment, the live GitHub Pages homepage and 15 asset URLs returned HTTP 200 with appropriate content types; their contents matched the reviewed source files. HTTPS is enforced, and the live canonical and social-preview URLs use the published address.
- Placeholder PDF was rendered and visually checked. Missing external links remain intentionally disabled. Reduced-motion overrides were reviewed in the source.
- These checks are not a full accessibility audit or testing on physical iOS/Android devices. Retest your own content and the published GitHub Pages address after future updates.

### Limits

This is a static portfolio. It has no accounts, CMS, message database, or server-side contact form. JavaScript powers the content-driven cards and interactions; keep all three JavaScript files available. A `mailto:` link relies on the visitor's email app. Search engines and sharing services decide when to recrawl metadata, and a correct metadata setup does not guarantee immediate preview refreshes. The site is published on GitHub Pages; no custom domain has been purchased or connected.

As you gain experience, replace samples with documented builds, clear photos, design decisions, troubleshooting notes, code, and results you can support. Add actual coursework, internships, research, and club workshops as they happen. For sponsorship conversations, real activity photos and specific future club needs will be more useful than unsupported metrics.
