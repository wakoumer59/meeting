const defaultEvent = {
  title: "የግሬስ ማዕከል የመተዋወቂያና የምክክር መርሃ ግብር",
  description: "በክብር ተጋብዘዋል! እድሜ መጨመር የሕይወት ተፈጥሯዊ ጉዞ ነው። ነገር ግን ከዕድሜ ጋር የሚመጡ ለውጦችን እንዴት እንደምንቀበል፣ እንዴት እንደምንዘጋጅና በክብር፣ በጤናና በማኅበራዊ ትስስር የተሞላ ሕይወት እንዴት መኖር እንደምንችል ብዙ ልናስብበት የሚገባ ጉዳይ ነው።",
  date: "2026-11-06",
  time: "14:00",
  location: "Ramada Addis, Bole",
};

const defaultEnglishEvent = {
  title: "Grace Senior Citizens Community Hub and Wellness Center",
  description: "You are warmly invited to an introductory and discussion session about Grace Senior Citizens Community Hub and Wellness Center.",
};

const translations = {
  am: {
    pageTitle: "Grace Senior Citizens Community Hub and Wellness Center — የግብዣ መልዕክት",
    pageDescription: "Grace Senior Citizens Community Hub and Wellness Center — የመተዋወቂያና የምክክር መርሃ ግብር የግብዣ መልዕክት።",
    homeLabel: "Grace Senior Citizens Community Hub and Wellness Center ዋና ገጽ",
    menuLabel: "የገጽ ማውጫን ክፈት",
    navLabel: "ዋና ማውጫ",
    navMeetingDate: "የመሰብሰቢያ ቀን",
    navContact: "ያግኙን",
    languageLabel: "ቋንቋ ይምረጡ",
    languageAmharic: "አማርኛ",
    languageEnglish: "English",
    heroEyebrow: "💌 የግብዣ መልዕክት",
    heroWelcome: "🤝 በክብር ተጋብዘዋል!",
    artAlt: "የግሬስ አዋቂዎች ማኅበረሰብና የጤና ማዕከል ምስል፣ አዋቂዎች በአንድነት ተሰብስበው",
    programsTitle: "የምናቀርባቸው አገልግሎቶች",
    programSocialActivities: "ማኅበራዊ እንቅስቃሴዎች",
    programWellness: "የጤናና የደህንነት ድጋፍ",
    programExercise: "የአካል ብቃትና ጤናማ አኗኗር",
    programWellbeing: "ሥነ-ልቦናዊና ስሜታዊ ደህንነት",
    programLearning: "ትምህርትና የሕይወት ክህሎቶች",
    programCommunity: "የማኅበረሰብ ተሳትፎ",
    invitationSectionLabel: "የግብዣ መልዕክት",
    eventSectionKicker: "የዝግጅቱ ዝርዝሮች",
    eventSectionTitle: "ቀንና ሰዓት",
    eventDetailsLabel: "የዝግጅቱ ዝርዝሮች",
    countdownTitle: "ቀጣዩ ስብሰባ የሚቀረው",
    countdownPrompt: "ቀንና ሰዓት በግብዣው ላይ ሲጨመሩ ቆጠራው ይጀምራል።",
    countdownStarted: "ስብሰባው ተጀምሯል።",
    countdownDays: "ቀን",
    countdownHours: "ሰዓት",
    countdownMinutes: "ደቂቃ",
    countdownSeconds: "ሰከንድ",
    dateLabel: "ቀን",
    timeLabel: "ሰዓት",
    locationLabel: "ቦታ",
    guestsLabel: "እንግዶች",
    guestsValue: "በክብር ተጋብዘዋል",
    rsvpButton: "በዝግጅቱ ይገኛሉ?",
    calendarButton: "ወደ ቀን መቁጠሪያ ጨምር",
    eventNote: "ሀሳብዎንና ምክርዎን እንዲያጋሩን በክብር እንጋብዝዎታለን።",
    contactKicker: "ያግኙን",
    contactTitle: "Grace Senior Citizens Community Hub and Wellness Center",
    contactDescription: "በደስታ እናገኝዎታለን።",
    contactBethlehem: "ቤተልሄም",
    contactSara: "ሳራ ግዛው",
    contactCall: "ይደውሉ",
    contactCallBethlehem: "ለቤተልሄም በ +251 912 200 850 ይደውሉ",
    contactCallSara: "ለሳራ ግዛው በ +251 988 902 910 ይደውሉ",
    footerNote: "አብረን ስንሆን መልካም ነገሮች ይፈጠራሉ።",
    closeDialog: "ዝጋ",
    rsvpKicker: "በክብር ቦታ አዘጋጅተናል",
    rsvpTitle: "በዝግጅቱ",
    rsvpQuestion: "ይገኛሉ?",
    rsvpOptionsLabel: "የመገኘት ምላሽ ይምረጡ",
    rsvpResponses: "ምላሽ",
    rsvpLocalOnly: "ምላሾች በዚህ አሳሽ ብቻ ይቆጠራሉ።",
    rsvpStorageError: "ምላሾችን ማስቀመጥ ወይም ማሳየት አልተቻለም።",
    rsvpAlreadyResponded: "አንድ ጊዜ ምላሽ ሰጥተዋል፤ ምላሽዎ ተመዝግቧል።",
    rsvpAttend: "እመጣለሁ",
    rsvpMaybe: "አረጋግጬ እመልሳለሁ",
    rsvpDecline: "መገኘት አልችልም",
    rsvpResponseAttending: "እመጣለሁ፣ አመሰግናለሁ!",
    rsvpResponseMaybe: "መረጃውን አረጋግጬ እመልሳለሁ",
    rsvpResponseDeclining: "መገኘት አልችልም",
    editorKicker: "የግብዣ መረጃዎን ያስተካክሉ",
    editorTitle: "የግብዣ",
    editorTitleAccent: "መረጃ ያስተካክሉ",
    editorDescription: "ለውጦቹ በዚህ አሳሽ ውስጥ ብቻ ይቀመጣሉ።",
    editorEventTitle: "የግብዣ ርዕስ",
    editorMessage: "አጭር መልዕክት",
    editorSave: "የግብዣ መረጃውን አዘምን",
    editorShare: "የግብዣ ሊንክ ቅዳ",
    editorSaved: "የግብዣ መረጃው ተዘምኖ በዚህ አሳሽ ውስጥ ተቀምጧል።",
    editorSaveError: "ለውጦቹን ማስቀመጥ አልተቻለም። እባክዎ የአሳሽዎን የማከማቻ ቅንብሮች ይመልከቱ።",
    editorShareSuccess: "የግብዣ ሊንኩ ተቀድቷል። ለውጦቹ በዚህ አሳሽ ውስጥ ብቻ ይቀመጣሉ።",
    editorShareError: "የግብዣ ሊንኩን መቅዳት አልተቻለም። ከአሳሽዎ የአድራሻ መስመር ይቅዱት።",
    calendarDateError: "እባክዎ መጀመሪያ ቀንና ሰዓት ያስገቡ።",
    calendarInvalidError: "እባክዎ መጀመሪያ ትክክለኛ ቀንና ሰዓት ያስገቡ።",
    dateAnnounced: "ይገለጻል",
    locationAnnounced: "ይገለጻል",
  },
  en: {
    pageTitle: "Grace Senior Citizens Community Hub and Wellness Center — Meeting Invitation",
    pageDescription: "Join Grace Senior Citizens Community Hub and Wellness Center for an introductory and consultative program.",
    homeLabel: "Grace Senior Citizens Community Hub and Wellness Center home",
    menuLabel: "Open page navigation",
    navLabel: "Main navigation",
    navMeetingDate: "Meeting date",
    navContact: "Contact",
    languageLabel: "Choose language",
    languageAmharic: "Amharic",
    languageEnglish: "English",
    heroEyebrow: "Meeting invitation",
    heroWelcome: "",
    artAlt: "Grace Senior Citizens Community Hub and Wellness Center with older adults gathered together",
    programsTitle: "What we offer",
    programSocialActivities: "Social Activities",
    programWellness: "Health & Wellness Support",
    programExercise: "Exercise & Healthy Living",
    programWellbeing: "Mental & Emotional Wellbeing",
    programLearning: "Learning & Life Skills",
    programCommunity: "Community Engagement",
    invitationSectionLabel: "Invitation message",
    eventSectionKicker: "MEETING DETAILS",
    eventSectionTitle: "Date & time",
    eventDetailsLabel: "Meeting details",
    countdownTitle: "Time until the meeting",
    countdownPrompt: "The countdown will begin when the meeting date and time are added.",
    countdownStarted: "The meeting has started.",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    dateLabel: "Date",
    timeLabel: "Time",
    locationLabel: "Location",
    guestsLabel: "Guests",
    guestsValue: "You are warmly invited",
    rsvpButton: "Will you join us?",
    calendarButton: "Add to calendar",
    eventNote: "We warmly invite you to join us and share your thoughts and advice.",
    contactKicker: "CONTACT",
    contactTitle: "Grace Senior Citizens Community Hub and Wellness Center",
    contactDescription: "We'd be happy to hear from you.",
    contactBethlehem: "Bethlehem",
    contactSara: "Sara Gezaw",
    contactCall: "Call",
    contactCallBethlehem: "Call Bethlehem at +251 912 200 850",
    contactCallSara: "Call Sara Gezaw at +251 988 902 910",
    footerNote: "Good things happen when we get together.",
    closeDialog: "Close",
    rsvpKicker: "WE SAVED YOU A SEAT",
    rsvpTitle: "Will you",
    rsvpQuestion: "join us?",
    rsvpOptionsLabel: "Choose your RSVP",
    rsvpResponses: "responses",
    rsvpLocalOnly: "Responses are counted on this device only.",
    rsvpStorageError: "Responses could not be saved or loaded.",
    rsvpAlreadyResponded: "You already responded. Your choice has been recorded.",
    rsvpAttend: "Count me in",
    rsvpMaybe: "Maybe",
    rsvpDecline: "Can't make it",
    rsvpResponseAttending: "Yes, count me in!",
    rsvpResponseMaybe: "Maybe, let me check",
    rsvpResponseDeclining: "Sorry, I can't make it",
    editorKicker: "EDIT YOUR INVITATION",
    editorTitle: "Edit your",
    editorTitleAccent: "invitation",
    editorDescription: "Your changes are saved in this browser only.",
    editorEventTitle: "Invitation title",
    editorMessage: "Short message",
    editorSave: "Update invitation",
    editorShare: "Copy invitation link",
    editorSaved: "Your invitation is updated and saved in this browser.",
    editorSaveError: "Couldn't save your changes. Please check your browser storage settings.",
    editorShareSuccess: "Invitation link copied. Your changes are saved in this browser only.",
    editorShareError: "Couldn't copy the invitation link. Copy it from your browser's address bar.",
    calendarDateError: "Please enter the meeting date and time first.",
    calendarInvalidError: "Please enter a valid meeting date and time first.",
    dateAnnounced: "To be announced",
    locationAnnounced: "To be announced",
  },
};

const invitationStorageKey = "grace-invitation";
const invitationDetailsVersionKey = "grace-invitation-details-version";
const languageStorageKey = "grace-language";
const eventForm = document.querySelector("#event-form");
const editorModal = document.querySelector("#editor-modal");
const rsvpModal = document.querySelector("#rsvp-modal");
const rsvpConfirmation = document.querySelector("#rsvp-confirmation");
const rsvpStorageStatus = document.querySelector("#rsvp-storage-status");
const editorStatus = document.querySelector("#editor-status");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#primary-nav");
const languageToggle = document.querySelector("#language-toggle");
const languageMenu = document.querySelector("#language-menu");
let meeting = loadEvent();
let currentLanguage = loadLanguage();
const rsvpCountsStorageKey = "gather-rsvp-counts";
let rsvpCountsError = false;
let rsvpState = loadRsvpState();

function t(key) {
  return translations[currentLanguage][key];
}

function loadRsvpState() {
  try {
    const savedState = localStorage.getItem(rsvpCountsStorageKey);
    if (!savedState) {
      return {
        counts: { attending: 0, maybe: 0, declining: 0 },
        response: null,
      };
    }

    const saved = JSON.parse(savedState);
    const counts = saved.counts || saved;
    const isValidCounts = counts
      && ["attending", "maybe", "declining"].every(
        (key) => Number.isSafeInteger(counts[key]) && counts[key] >= 0,
      );
    const response = saved.response ?? null;
    if (!isValidCounts || (response !== null && !["attending", "maybe", "declining"].includes(response))) {
      throw new Error("Saved RSVP state has an invalid format.");
    }
    return { counts, response };
  } catch (error) {
    rsvpCountsError = true;
    console.error("Could not load RSVP state.", error);
    return null;
  }
}

function renderRsvpCounts() {
  document.querySelectorAll("[data-rsvp-count]").forEach((element) => {
    const count = rsvpState?.counts[element.dataset.rsvpCount];
    element.textContent = rsvpCountsError
      ? "—"
      : `${new Intl.NumberFormat(currentLanguage === "am" ? "am-ET" : "en").format(count)} ${t("rsvpResponses")}`;
  });
  document.querySelectorAll("[data-rsvp]").forEach((button) => {
    button.setAttribute("aria-pressed", String(rsvpState?.response === button.dataset.rsvp));
  });
  rsvpStorageStatus.textContent = rsvpCountsError ? t("rsvpStorageError") : "";
}

function loadLanguage() {
  const queryLanguage = new URLSearchParams(window.location.search).get("lang");
  if (queryLanguage === "am" || queryLanguage === "en") return queryLanguage;

  try {
    const savedLanguage = localStorage.getItem(languageStorageKey);
    return savedLanguage === "am" ? "am" : "en";
  } catch (error) {
    console.error("Could not load the saved language preference.", error);
    return "en";
  }
}

function setLanguage(language) {
  if (language !== "am" && language !== "en") return;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.body.dataset.language = language;
  document.querySelector(".hero").lang = language;
  document.querySelector("#details").lang = language;
  document.querySelector("#contact").lang = language;
  document.querySelectorAll("[data-language-option]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.languageOption === language));
  });
  languageMenu.hidden = true;
  languageToggle.setAttribute("aria-expanded", "false");
  document.title = t("pageTitle");
  document.querySelector('meta[name="description"]').content = t("pageDescription");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    element.dataset.i18nAttr.split(",").forEach((translation) => {
      const [attribute, key] = translation.trim().split(":");
      element.setAttribute(attribute, t(key));
    });
  });
  document.querySelectorAll("[data-page-language]").forEach((element) => {
    const isCurrentLanguage = element.dataset.pageLanguage === language;
    element.hidden = !isCurrentLanguage;
    if (!isCurrentLanguage) element.open = false;
  });
  if (rsvpConfirmation.dataset.responseKey) {
    rsvpConfirmation.textContent = t(rsvpConfirmation.dataset.responseKey);
  }
  renderRsvpCounts();
  try {
    localStorage.setItem(languageStorageKey, language);
  } catch (error) {
    console.error("Could not save the language preference.", error);
  }

  renderEvent();
  renderEditorStatus();
}

function renderEditorStatus(key) {
  if (key) editorStatus.dataset.translationKey = key;
  const statusKey = editorStatus.dataset.translationKey;
  editorStatus.textContent = statusKey ? t(statusKey) : "";
}

function loadEvent() {
  try {
    const saved = localStorage.getItem(invitationStorageKey);
    const shouldUpdateDetails = localStorage.getItem(invitationDetailsVersionKey) !== "3";
    if (!saved) {
      localStorage.setItem(invitationDetailsVersionKey, "3");
      return defaultEvent;
    }

    const storedEvent = JSON.parse(saved);
    const event = {
      ...defaultEvent,
      ...storedEvent,
      date: shouldUpdateDetails ? defaultEvent.date : storedEvent.date || defaultEvent.date,
      time: shouldUpdateDetails ? defaultEvent.time : storedEvent.time || defaultEvent.time,
      location: shouldUpdateDetails ? defaultEvent.location : storedEvent.location || defaultEvent.location,
    };
    if (shouldUpdateDetails) {
      localStorage.setItem(invitationStorageKey, JSON.stringify(event));
      localStorage.setItem(invitationDetailsVersionKey, "3");
    }
    return event;
  } catch (error) {
    console.error("Could not load the saved invitation.", error);
    return defaultEvent;
  }
}

function formatDate(value) {
  if (!value) return t("dateAnnounced");
  const date = new Date(`${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return t("dateAnnounced");
  const locale = currentLanguage === "am" ? "am-ET" : "en";
  const parts = new Intl.DateTimeFormat(`${locale}-u-ca-ethiopic`, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).formatToParts(date);
  const day = parts.find((part) => part.type === "day").value;
  const month = parts.find((part) => part.type === "month").value;
  const year = parts.find((part) => part.type === "year").value;
  return currentLanguage === "am"
    ? `${day} ${month} ${year} ዓ.ም.`
    : `${day} ${month} ${year} (Ethiopian calendar)`;
}

function formatTime(value) {
  if (!value) return t("dateAnnounced");
  const [hours, minutes] = value.split(":").map(Number);
  if (!Number.isInteger(hours) || !Number.isInteger(minutes)) return t("dateAnnounced");
  const ethiopianHours = (hours + 6) % 12 || 12;
  const time = `${ethiopianHours}:${String(minutes).padStart(2, "0")}`;
  return currentLanguage === "am" ? `${time} ከሰዓት` : `${time} (Ethiopian time)`;
}

function getLocalizedEventValue(key) {
  const defaultValue = defaultEvent[key];
  const englishDefault = defaultEnglishEvent[key];
  if (meeting[key] === defaultValue || meeting[key] === englishDefault) {
    return currentLanguage === "en" ? englishDefault : defaultValue;
  }
  return meeting[key].replace(
    /Grace Senior Citizens\s+(?:(?:&|and)\s+)?Community\s+(?:Hub(?:\s+and\s+Wellness Center)?|Wellness Center)/gi,
    "Grace Senior Citizens Community Hub and Wellness Center",
  );
}

function renderEvent() {
  const title = getLocalizedEventValue("title").trim() || defaultEvent.title;
  const titleParts = title.split(/\s+/);
  const titleBreak = Math.max(1, Math.ceil(titleParts.length / 2));
  const firstLine = titleParts.slice(0, titleBreak).join(" ");
  const secondLine = titleParts.slice(titleBreak).join(" ");
  const amharicTitlePrefix = currentLanguage === "am" ? '<span aria-hidden="true">📢 </span>' : "";
  const description = getLocalizedEventValue("description").trim();
  const amharicWelcomePrefix = "በክብር ተጋብዘዋል!";
  const heroDescription = currentLanguage === "am"
    ? `🌿 ${description.startsWith(amharicWelcomePrefix) ? description.slice(amharicWelcomePrefix.length).trim() : description}`
    : description;

  document.querySelector("#event-title").innerHTML =
    `<span class="hero-title-main">${amharicTitlePrefix}${escapeHtml(firstLine)}</span>${secondLine ? `<em class="hero-title-accent">${escapeHtml(secondLine)}</em>` : ""}`;
  document.querySelector("#event-description").textContent = heroDescription;
  document.querySelector("#event-date").textContent = formatDate(meeting.date);
  document.querySelector("#event-time").textContent = formatTime(meeting.time);
  document.querySelector("#event-location").textContent = meeting.location || t("locationAnnounced");
  document.querySelector("#rsvp-modal .modal-description").textContent =
    `${formatDate(meeting.date)} · ${formatTime(meeting.time)} · ${meeting.location || t("locationAnnounced")}`;
  updateCountdown();
}

function updateCountdown() {
  const countdownGrid = document.querySelector("#countdown-grid");
  const countdownStatus = document.querySelector("#countdown-status");

  if (!meeting.date || !meeting.time) {
    countdownGrid.hidden = true;
    countdownStatus.textContent = t("countdownPrompt");
    countdownStatus.hidden = false;
    return;
  }

  const meetingDate = new Date(`${meeting.date}T${meeting.time}:00`);
  if (Number.isNaN(meetingDate.getTime())) {
    countdownGrid.hidden = true;
    countdownStatus.textContent = t("countdownPrompt");
    countdownStatus.hidden = false;
    return;
  }

  const remainingMilliseconds = meetingDate.getTime() - Date.now();
  if (remainingMilliseconds <= 0) {
    countdownGrid.hidden = true;
    countdownStatus.textContent = t("countdownStarted");
    countdownStatus.hidden = false;
    return;
  }

  const totalSeconds = Math.floor(remainingMilliseconds / 1000);
  const units = {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };

  Object.entries(units).forEach(([unit, value]) => {
    document.querySelector(`#countdown-${unit}`).textContent = String(value).padStart(2, "0");
  });
  countdownStatus.hidden = true;
  countdownGrid.hidden = false;
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
    eventForm.elements.title.value = getLocalizedEventValue("title");
    eventForm.elements.description.value = getLocalizedEventValue("description");
    eventForm.elements.date.value = meeting.date;
    eventForm.elements.time.value = meeting.time;
    eventForm.elements.location.value = meeting.location;
    renderEditorStatus("");
    openDialog(editorModal);
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-open-rsvp]").forEach((button) => {
  button.addEventListener("click", () => {
    delete rsvpConfirmation.dataset.responseKey;
    rsvpConfirmation.textContent = rsvpState?.response ? t("rsvpAlreadyResponded") : "";
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
    if (!rsvpState || rsvpCountsError) {
      rsvpStorageStatus.textContent = t("rsvpStorageError");
      return;
    }

    const response = button.dataset.rsvp;
    if (!Object.hasOwn(rsvpState.counts, response)) return;
    if (rsvpState.response) {
      rsvpConfirmation.textContent = t("rsvpAlreadyResponded");
      return;
    }

    const updatedState = {
      counts: { ...rsvpState.counts, [response]: rsvpState.counts[response] + 1 },
      response,
    };
    try {
      localStorage.setItem(rsvpCountsStorageKey, JSON.stringify(updatedState));
    } catch (error) {
      console.error("Could not save RSVP state.", error);
      rsvpStorageStatus.textContent = t("rsvpStorageError");
      return;
    }

    rsvpState = updatedState;
    renderRsvpCounts();
    const responseKey = `rsvpResponse${response[0].toUpperCase()}${response.slice(1)}`;
    rsvpConfirmation.dataset.responseKey = responseKey;
    rsvpConfirmation.textContent = t(responseKey);
  });
});

window.addEventListener("storage", (event) => {
  if (event.key !== rsvpCountsStorageKey) return;
  rsvpState = loadRsvpState();
  rsvpCountsError = !rsvpState;
  renderRsvpCounts();
});

eventForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(eventForm);
  const nextEvent = Object.fromEntries(formData.entries());
  nextEvent.title = nextEvent.title.trim();
  nextEvent.description = nextEvent.description.trim();
  nextEvent.location = nextEvent.location.trim() || defaultEvent.location;

  try {
    localStorage.setItem(invitationStorageKey, JSON.stringify(nextEvent));
  } catch (error) {
    renderEditorStatus("editorSaveError");
    console.error("Could not save the invitation.", error);
    return;
  }

  meeting = nextEvent;
  renderEvent();
  renderEditorStatus("editorSaved");
});

document.querySelector("#share-button").addEventListener("click", async (event) => {
  const button = event.currentTarget;
  const shareUrl = new URL(window.location.href);
  shareUrl.searchParams.set("title", getLocalizedEventValue("title"));
  shareUrl.searchParams.set("description", getLocalizedEventValue("description"));
  shareUrl.searchParams.set("date", meeting.date);
  shareUrl.searchParams.set("time", meeting.time);
  shareUrl.searchParams.set("location", meeting.location);
  shareUrl.searchParams.set("lang", currentLanguage);

  try {
    await navigator.clipboard.writeText(shareUrl.toString());
    renderEditorStatus("editorShareSuccess");
  } catch (error) {
    renderEditorStatus("editorShareError");
    console.error("Could not copy the invitation link.", error);
  }
  button.blur();
});

document.querySelector("#calendar-button").addEventListener("click", () => {
  if (!meeting.date || !meeting.time) {
    window.alert(t("calendarDateError"));
    return;
  }
  const start = new Date(`${meeting.date}T${meeting.time}:00`);
  if (Number.isNaN(start.getTime())) {
    window.alert(t("calendarInvalidError"));
    return;
  }
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const toCalendarDate = (date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Grace Senior Citizens Community Hub and Wellness Center//Invitation//AM",
    "BEGIN:VEVENT",
    `DTSTAMP:${toCalendarDate(new Date())}`,
    `DTSTART:${toCalendarDate(start)}`,
    `DTEND:${toCalendarDate(end)}`,
    `SUMMARY:${escapeIcs(getLocalizedEventValue("title"))}`,
    `DESCRIPTION:${escapeIcs(getLocalizedEventValue("description"))}`,
    `LOCATION:${escapeIcs(meeting.location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  const file = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = "grace-meeting.ics";
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

languageToggle.addEventListener("click", () => {
  const expanded = languageToggle.getAttribute("aria-expanded") === "true";
  languageToggle.setAttribute("aria-expanded", String(!expanded));
  languageMenu.hidden = expanded;
});

languageMenu.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.languageOption));
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".language-control")) {
    languageMenu.hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !languageMenu.hidden) {
    languageMenu.hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
    languageToggle.focus();
  }
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
setLanguage(currentLanguage);
window.setInterval(updateCountdown, 1000);
