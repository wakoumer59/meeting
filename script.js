const defaultEvent = {
  title: "Good ideas start together.",
  description: "Join us for a thoughtful conversation, fresh perspectives, and the next big idea.",
  date: "2026-11-05",
  time: "10:30",
  location: "The Blue Room",
};

const eventForm = document.querySelector("#event-form");
const editorModal = document.querySelector("#editor-modal");
const rsvpModal = document.querySelector("#rsvp-modal");
const rsvpConfirmation = document.querySelector("#rsvp-confirmation");
const editorStatus = document.querySelector("#editor-status");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#primary-nav");
let meeting = loadEvent();

function loadEvent() {
  try {
    const saved = localStorage.getItem("gather-invitation");
    return saved ? { ...defaultEvent, ...JSON.parse(saved) } : defaultEvent;
  } catch (error) {
    console.error("Could not load the saved invitation.", error);
    return defaultEvent;
  }
}

function formatDate(value) {
  if (!value) return "Date to be announced";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "Date to be announced";
  return new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric" }).format(date);
}

function formatTime(value) {
  if (!value) return "Time to be announced";
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes)) return "Time to be announced";
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat("en", { hour: "numeric", minute: "2-digit" }).format(date);
}

function renderEvent() {
  const title = meeting.title.trim() || defaultEvent.title;
  const titleParts = title.split(/\s+/);
  const titleBreak = Math.max(1, Math.ceil(titleParts.length / 2));
  const firstLine = titleParts.slice(0, titleBreak).join(" ");
  const secondLine = titleParts.slice(titleBreak).join(" ");

  document.querySelector("#event-title").innerHTML =
    `${escapeHtml(firstLine)}${secondLine ? `<br /><em>${escapeHtml(secondLine)}</em>` : ""}`;
  document.querySelector("#event-description").textContent = meeting.description;
  document.querySelector("#event-date").textContent = formatDate(meeting.date);
  document.querySelector("#event-time").textContent = formatTime(meeting.time);
  document.querySelector("#event-location").textContent = meeting.location;
  document.querySelector("#rsvp-modal .modal-description").textContent =
    `${formatDate(meeting.date)} at ${formatTime(meeting.time)} · ${meeting.location}`;
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

function openDialog(dialog) {
  if (!dialog.open) dialog.showModal();
}

document.querySelectorAll("[data-open-editor]").forEach((button) => {
  button.addEventListener("click", () => {
    eventForm.elements.title.value = meeting.title;
    eventForm.elements.description.value = meeting.description;
    eventForm.elements.date.value = meeting.date;
    eventForm.elements.time.value = meeting.time;
    eventForm.elements.location.value = meeting.location;
    editorStatus.textContent = "";
    openDialog(editorModal);
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-open-rsvp]").forEach((button) => {
  button.addEventListener("click", () => {
    rsvpConfirmation.textContent = "";
    openDialog(rsvpModal);
  });
});

document.querySelectorAll(".modal").forEach((dialog) => {
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });
});

document.querySelectorAll("[data-rsvp]").forEach((button) => {
  button.addEventListener("click", () => {
    const response = button.dataset.rsvp;
    try {
      localStorage.setItem("gather-rsvp", response);
    } catch (error) {
      console.error("Could not save your RSVP.", error);
    }
    rsvpConfirmation.textContent = `${response}. Thanks for letting us know!`;
  });
});

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(eventForm);
  const nextEvent = Object.fromEntries(formData.entries());
  nextEvent.title = nextEvent.title.trim();
  nextEvent.description = nextEvent.description.trim();
  nextEvent.location = nextEvent.location.trim();

  try {
    localStorage.setItem("gather-invitation", JSON.stringify(nextEvent));
  } catch (error) {
    editorStatus.textContent = "Your browser couldn't save these changes. Please check your storage settings.";
    console.error("Could not save the invitation.", error);
    return;
  }

  meeting = nextEvent;
  renderEvent();
  editorStatus.textContent = "Your invitation is updated and saved in this browser.";
});

document.querySelector("#share-button").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const shareUrl = new URL(window.location.href);
  shareUrl.searchParams.set("title", meeting.title);
  shareUrl.searchParams.set("description", meeting.description);
  shareUrl.searchParams.set("date", meeting.date);
  shareUrl.searchParams.set("time", meeting.time);
  shareUrl.searchParams.set("location", meeting.location);

  try {
    await navigator.clipboard.writeText(shareUrl.toString());
    editorStatus.textContent = "Invitation link copied. Your changes are saved in this browser only.";
  } catch (error) {
    editorStatus.textContent = "Couldn't access the clipboard. Copy the invitation URL from your browser address bar.";
    console.error("Could not copy the invitation link.", error);
  }
  button.blur();
});

document.querySelector("#calendar-button").addEventListener("click", () => {
  const start = new Date(`${meeting.date}T${meeting.time || "10:30"}:00`);
  if (Number.isNaN(start.getTime())) {
    window.alert("Please set a valid date and time in the invitation first.");
    return;
  }
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const toCalendarDate = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Gather//Meeting Invitation//EN",
    "BEGIN:VEVENT",
    `DTSTAMP:${toCalendarDate(new Date())}`,
    `DTSTART:${toCalendarDate(start)}`,
    `DTEND:${toCalendarDate(end)}`,
    `SUMMARY:${escapeIcs(meeting.title)}`,
    `DESCRIPTION:${escapeIcs(meeting.description)}`,
    `LOCATION:${escapeIcs(meeting.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const file = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = "gather-meeting.ics";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(downloadUrl);
});

function escapeIcs(value) {
  return value.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\\;");
}

menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("is-open", !expanded);
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

function applyQueryEvent() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  if (!title) return;
  meeting = {
    ...meeting,
    title,
    description: params.get("description") || meeting.description,
    date: params.get("date") || meeting.date,
    time: params.get("time") || meeting.time,
    location: params.get("location") || meeting.location,
  };
}

applyQueryEvent();
renderEvent();
