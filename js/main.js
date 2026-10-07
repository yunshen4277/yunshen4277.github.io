/* Render editable content and add lightweight, accessible interactions. */
(() => {
  "use strict";
  const data = window.PORTFOLIO;
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [
    ...root.querySelectorAll(selector),
  ];
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const externalURL = (value) => {
    try {
      return ["https:", "http:"].includes(new URL(value).protocol);
    } catch {
      return false;
    }
  };
  const placeholders = {
    email: "[Email]",
    github: "[GitHub URL]",
    linkedin: "[LinkedIn URL]",
    phcWebsite: "[PHC Website URL]",
    phcDiscord: "[PHC Discord URL]",
    phcInstagram: "[PHC Instagram URL]",
    phcOther: "[Other PHC Social URL]",
  };
  function setLink(anchor, value, placeholder, isEmail = false) {
    const valid = isEmail
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
      : externalURL(value) || /^#[a-zA-Z][\w-]*$/.test(value);
    if (!valid) {
      anchor.removeAttribute("href");
      anchor.setAttribute("role", "link");
      anchor.setAttribute("aria-disabled", "true");
      anchor.title = `${placeholder} — not provided yet`;
      if (!anchor.querySelector(".contact-value"))
        anchor.append(element("span", "pending-label", "Pending"));
      return;
    }
    anchor.href = isEmail ? `mailto:${value}` : value;
    if (externalURL(value)) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
    const contactValue = $(".contact-value", anchor);
    if (contactValue)
      contactValue.textContent = isEmail
        ? value
        : value.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
  $$("[data-link]").forEach((a) =>
    setLink(
      a,
      data.links[a.dataset.link],
      placeholders[a.dataset.link],
      a.dataset.link === "email",
    ),
  );
  if (data.links.email || data.links.github || data.links.linkedin)
    $(".contact-links .small-note").hidden = true;

  function tags(items) {
    const list = element("div", "tag-list");
    items.forEach((item) => list.append(element("span", "tag", item)));
    return list;
  }
  function projectLink(label, url, placeholder) {
    const link = element("a", "project-link", label);
    setLink(link, url, placeholder);
    return link;
  }
  const grid = $("#project-grid");
  data.projects.forEach((project, index) => {
    const article = element("article", "project-card");
    const visual = element("div", "project-visual");
    const img = element("img");
    Object.assign(img, {
      src: project.image,
      alt: project.imageAlt,
      loading: "lazy",
      width: 640,
      height: 320,
    });
    visual.append(
      img,
      element("span", "project-number", String(index + 1).padStart(2, "0")),
    );
    const body = element("div", "project-body");
    body.append(
      element("p", "project-category", project.category),
      element("h3", "", project.title),
      element("p", "project-description", project.description),
      tags(project.technologies),
    );
    const status = element("p", "project-status", project.status);
    if (/placeholder/i.test(project.status))
      status.classList.add("is-placeholder");
    body.append(status);
    const actions = element("div", "project-actions");
    const detail = element("button", "detail-button", "Project details");
    detail.type = "button";
    detail.setAttribute("aria-label", `Project details: ${project.title}`);
    detail.addEventListener("click", () => openProject(project, detail));
    actions.append(
      detail,
      projectLink("GitHub", project.github, "[Project GitHub URL]"),
    );
    if (project.demo)
      actions.append(
        projectLink(
          project.demo.startsWith("#") ? "Explore" : "Live demo",
          project.demo,
          "[Live Demo URL]",
        ),
      );
    body.append(actions);
    article.append(visual, body);
    grid.append(article);
  });
  data.skills.forEach((group, index) => {
    const card = element("article", "skill-card");
    card.append(
      element("span", "skill-number mono", String(index + 1).padStart(2, "0")),
      element("h3", "", group.title),
      element("p", "skill-note", group.note),
      tags(group.items),
    );
    $("#skills-grid").append(card);
  });

  // A native dialog provides keyboard focus containment and Escape-to-close.
  const dialog = $("#project-dialog");
  let projectTrigger;
  let projectDestination;
  function openProject(project, trigger) {
    projectTrigger = trigger;
    $("#dialog-title").textContent = project.title;
    $("#dialog-status").textContent = project.status;
    $("#dialog-description").textContent = project.description;
    $("#dialog-image").src = project.image;
    $("#dialog-image").alt = project.imageAlt;
    $("#dialog-tags").replaceChildren(...tags(project.technologies).children);
    const details = $("#dialog-details");
    details.replaceChildren();
    project.details.forEach((item) => {
      const section = element("section");
      section.append(
        element("h3", "", item.heading),
        element("p", "", item.text),
      );
      details.append(section);
    });
    $("#dialog-links").replaceChildren(
      projectLink("GitHub repository", project.github, "[Project GitHub URL]"),
    );
    if (project.demo)
      $("#dialog-links").append(
        projectLink(
          project.demo.startsWith("#") ? "Explore on this site" : "Live demo",
          project.demo,
          "[Live Demo URL]",
        ),
      );
    dialog.showModal();
    document.body.classList.add("dialog-open");
  }
  $(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    if (
      event.target === dialog &&
      (event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom)
    )
      dialog.close();
    const internalLink = event.target.closest('a[href^="#"]');
    if (internalLink) {
      projectDestination = document.getElementById(internalLink.hash.slice(1));
      dialog.close();
    }
  });
  dialog.addEventListener("close", () => {
    document.body.classList.remove("dialog-open");
    (projectDestination || projectTrigger)?.focus({ preventScroll: true });
    projectDestination = null;
  });

  $("#profile-image").src = data.profile.image;
  $("#profile-image").alt = data.profile.alt;
  $("#profile-label").hidden = !data.profile.image.includes("placeholder");
  $("#phc-logo").src = data.phc.logo;
  $("#phc-logo").alt = data.phc.logoAlt;
  $("#phc-logo-label").hidden = !data.phc.logo.includes("placeholder");
  [
    ["workshop-photo", data.phc.workshopImage, data.phc.workshopAlt],
    ["club-project-photo", data.phc.projectImage, data.phc.projectAlt],
  ].forEach(([id, path, alt]) => {
    if (!path) return;
    const img = element("img", "club-photo");
    Object.assign(img, {
      src: path,
      alt: alt || "Phoenix Hardware Club photo",
      loading: "lazy",
      width: 720,
      height: 360,
    });
    document.getElementById(id).replaceWith(img);
  });
  if (data.education.graduation)
    $("#graduation").textContent = data.education.graduation;
  const educationLabels = {
    gpa: "GPA",
    coursework: "Relevant coursework",
    honors: "Honors",
    certifications: "Certifications",
  };
  Object.entries(educationLabels).forEach(([key, label]) => {
    if (!data.education[key]) return; // Optional unconfirmed education details stay hidden.
    const row = element("div");
    row.append(
      element("dt", "", label),
      element("dd", "", data.education[key]),
    );
    $("#education-extras").append(row);
  });
  ["#resume-view", "#resume-download"].forEach(
    (id) => ($(id).href = data.resume.path),
  );
  if (data.resume.ready) {
    $$(".button-note").forEach((note) => note.remove());
    $("#resume-note").textContent =
      "A snapshot of my education, experience, and technical interests.";
  }
  $("#year").textContent = new Date().getFullYear();

  const themeButton = $(".theme-toggle");
  function syncThemeLabel() {
    const isDark = document.documentElement.dataset.theme === "dark";
    const label = `Switch to ${isDark ? "light" : "dark"} mode`;
    themeButton.setAttribute("aria-label", label);
    themeButton.title = label;
    $('meta[name="theme-color"]').content = isDark ? "#101014" : "#f6f5f8";
  }
  syncThemeLabel();
  themeButton.addEventListener("click", () => {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("junkai-theme", theme);
    } catch {
      /* Optional preference storage. */
    }
    syncThemeLabel();
  });
  const menu = $(".menu-toggle"),
    nav = $("#site-nav");
  function closeMenu(restoreFocus = false) {
    nav.classList.remove("is-open");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Open navigation");
    if (restoreFocus) menu.focus();
  }
  menu.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    nav.classList.toggle("is-open", open);
    menu.setAttribute("aria-expanded", String(open));
    menu.setAttribute(
      "aria-label",
      open ? "Close navigation" : "Open navigation",
    );
  });
  $$("a", nav).forEach((link) =>
    link.addEventListener("click", () => closeMenu()),
  );
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true")
      closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  matchMedia("(min-width: 861px)").addEventListener("change", () =>
    closeMenu(),
  );

  const navLinks = $$("a", nav),
    sections = $$("main>section[id]");
  sections.forEach((section) => {
    section.tabIndex = -1;
  });
  const backToTop = $(".back-to-top");
  let scrollQueued = false;
  function updateScrollState() {
    const visible = sections.filter(
      (section) => section.getBoundingClientRect().top <= 150,
    );
    const current = visible.at(-1)?.id || "home";
    navLinks.forEach((link) => {
      if (link.hash === `#${current}`)
        link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
    backToTop.classList.toggle("is-visible", window.scrollY > 650);
    scrollQueued = false;
  }
  window.addEventListener(
    "scroll",
    () => {
      if (!scrollQueued) {
        scrollQueued = true;
        requestAnimationFrame(updateScrollState);
      }
    },
    { passive: true },
  );
  updateScrollState();
  // Reveal motion is optional; content is visible by default, even without JavaScript.
  if (
    "IntersectionObserver" in window &&
    !matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.06 },
    );
    $$(
      ".section-heading, .experience-card, .project-card, .skill-card",
    ).forEach((node) => {
      node.classList.add("will-reveal");
      observer.observe(node);
    });
  }
})();
