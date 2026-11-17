
// GTA VI Countdown
// Target: November 19, 2026, local time

const releaseDate = new Date(2026, 10, 19, 0, 0, 0);

const elements = {
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  shareButton: document.getElementById("shareButton"),
  shareFeedback: document.getElementById("shareFeedback")
};

const twoDigits = value => String(value).padStart(2, "0");

function updateCountdown() {
  const remaining = releaseDate.getTime() - Date.now();

  if (remaining <= 0) {
    elements.days.textContent = "00";
    elements.hours.textContent = "00";
    elements.minutes.textContent = "00";
    elements.seconds.textContent = "00";
    document.querySelector(".subtitle").textContent = "THE WAIT IS OVER";
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);

  elements.days.textContent = twoDigits(Math.floor(totalSeconds / 86400));
  elements.hours.textContent = twoDigits(Math.floor((totalSeconds % 86400) / 3600));
  elements.minutes.textContent = twoDigits(Math.floor((totalSeconds % 3600) / 60));
  elements.seconds.textContent = twoDigits(totalSeconds % 60);
}

async function shareCountdown() {
  const data = {
    title: "GTA VI Countdown",
    text: "The wait is almost over! Check out the live GTA VI countdown:",
    url: window.location.href
  };

  try {
    if (navigator.share) {
      await navigator.share(data);
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(data.text + " " + data.url);
      elements.shareFeedback.textContent = "Link copied! Paste it into WhatsApp.";
    } else {
      window.open(
        "https://wa.me/?text=" + encodeURIComponent(data.text + " " + data.url),
        "_blank"
      );
    }
  } catch (error) {
    if (error.name !== "AbortError") {
      elements.shareFeedback.textContent = "Please copy your website link manually.";
    }
  }
}

if (elements.days && elements.hours && elements.minutes && elements.seconds) {
  updateCountdown();
  setInterval(updateCountdown, 1000);
}

if (elements.shareButton) {
  elements.shareButton.addEventListener("click", shareCountdown);
}
