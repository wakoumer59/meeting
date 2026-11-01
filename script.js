const defaultEvent = {
  title: "የግሬስ ማዕከል የመተዋወቂያና የምክክር መርሃ ግብር",
  description: "በክብር ተጋብዘዋል! እድሜ መጨመር የሕይወት ተፈጥሯዊ ጉዞ ነው። ነገር ግን ከዕድሜ ጋር የሚመጡ ለውጦችን እንዴት እንደምንቀበል፣ እንዴት እንደምንዘጋጅና በክብር፣ በጤናና በማኅበራዊ ትስስር የተሞላ ሕይወት እንዴት መኖር እንደምንችል ብዙ ልናስብበት የሚገባ ጉዳይ ነው።",
  date: "",
  time: "",
  location: "",
};

const invitationStorageKey = "grace-invitation";
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
    const saved = localStorage.getItem(invitationStorageKey);
    return saved ? { ...defaultEvent, ...JSON.parse(saved) } : defaultEvent;
  } catch (error) {
    console.error("Could not load the saved invitation.", error);
    return defaultEvent;
  }
}

function formatDate(value) {
  if (!value) return "ይገለጻል";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "ይገለጻል";
  return new Intl.DateTimeFormat("am-ET", { weekday: "long", month: "long", day: "numeric" }).format(date);
}

function formatTime(value) {
  if (!value) return "ይገለጻል";
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes)) return "ይገለጻል";
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  return new Intl.DateTimeFormat("am-ET", { hour: "numeric", minute: "2-digit" }).format(date);
}

function formatEnglishDate(value) {
  if (!value) return "To be announced";
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "To be announced";
  return new Intl.DateTimeFormat("en", { weekday: "long", month: "long", day: "numeric", year: "numeric" }).format(date);
}

function formatEnglishTime(value) {
  if (!value) return "To be announced";
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes)) return "To be announced";
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
  document.querySelector("#event-location").textContent = meeting.location || "ይገለጻል";
  document.querySelector("#letter-date-am").textContent = formatDate(meeting.date);
  document.querySelector("#letter-time-am").textContent = formatTime(meeting.time);
  document.querySelector("#letter-location-am").textContent = meeting.location || "ይገለጻል";
  document.querySelector("#letter-date-en").textContent = formatEnglishDate(meeting.date);
  document.querySelector("#letter-time-en").textContent = formatEnglishTime(meeting.time);
  document.querySelector("#letter-location-en").textContent = meeting.location || "To be announced";
  document.querySelector("#rsvp-modal .modal-description").textContent =
    `${formatDate(meeting.date)} · ${formatTime(meeting.time)} · ${meeting.location || "ይገለጻል"}`;
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
    rsvpConfirmation.textContent = response;
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
    localStorage.setItem(invitationStorageKey, JSON.stringify(nextEvent));
  } catch (error) {
    editorStatus.textContent = "ለውጦቹን ማስቀመጥ አልተቻለም። እባክዎ የአሳሽዎን የማከማቻ ቅንብሮች ይመልከቱ።";
    console.error("Could not save the invitation.", error);
    return;
  }

  meeting = nextEvent;
  renderEvent();
  editorStatus.textContent = "የግብዣ መረጃው ተዘምኖ በዚህ አሳሽ ውስጥ ተቀምጧል።";
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
    editorStatus.textContent = "የግብዣ ሊንኩ ተቀድቷል። ለውጦቹ በዚህ አሳሽ ውስጥ ብቻ ይቀመጣሉ።";
  } catch (error) {
    editorStatus.textContent = "የግብዣ ሊንኩን መቅዳት አልተቻለም። ከአሳሽዎ የአድራሻ መስመር ይቅዱት።";
    console.error("Could not copy the invitation link.", error);
  }
  button.blur();
});

document.querySelector("#calendar-button").addEventListener("click", () => {
  if (!meeting.date || !meeting.time) {
    window.alert("እባክዎ መጀመሪያ ቀንና ሰዓት ያስገቡ።");
    return;
  }
  const start = new Date(`${meeting.date}T${meeting.time}:00`);
  if (Number.isNaN(start.getTime())) {
    window.alert("እባክዎ መጀመሪያ ትክክለኛ ቀንና ሰዓት ያስገቡ።");
    return;
  }
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const toCalendarDate = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Grace Senior Citizens & Community Hub//Invitation//AM",
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
