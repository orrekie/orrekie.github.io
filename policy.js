let googleAnalytics = true;
let clarity = true;
let activeCampaign = true;

const clickGoogleAnalytics = () => googleAnalytics = !googleAnalytics;
const clickClarity = () => clarity = !clarity;
const clickActiveCampaign = () => activeCampaign = !activeCampaign;

const initGoogleAnalytics = async () => {
  console.log("g");
}

const initClarity = async () => {
  console.log("c");
}

const initActiveCampaign = async () => {
  console.log("a");
}

const GOOGLE_ANALYTICS_COOKIE = "googleAnalytics";
const CLARITY_COOKIE = "clarity";
const ACTIVE_CAMPAIGN_COOKIE = "activeCampaign";

const policyReject = () => {
  setCookie(GOOGLE_ANALYTICS_COOKIE, false);
  setCookie(CLARITY_COOKIE, false);
  setCookie(ACTIVE_CAMPAIGN_COOKIE, false);
  document.querySelector(".policy").classList.add("hide");
}

const policyAccept = () => {
  document.querySelector(".policy").classList.add("hide");
  init();
  setCookie(GOOGLE_ANALYTICS_COOKIE, googleAnalytics);
  setCookie(CLARITY_COOKIE, clarity);
  setCookie(ACTIVE_CAMPAIGN_COOKIE, activeCampaign);
};

const loadCookie = () => {
  const googleAnalyticsCookie = getCookie(GOOGLE_ANALYTICS_COOKIE);
  const clarityCookie = getCookie(CLARITY_COOKIE);
  const activeCampaignCookie = getCookie(ACTIVE_CAMPAIGN_COOKIE);
  if (googleAnalyticsCookie === "" || clarityCookie === "" || activeCampaignCookie === "") {
    return;
  }
  document.querySelector(".policy").classList.add("hide");

  googleAnalytics = googleAnalyticsCookie === "true";
  clarity = clarityCookie === "true";
  activeCampaign = activeCampaignCookie === "true";

  init();
}

const init = () => {
  if (googleAnalytics) {
    initGoogleAnalytics().then();
  }
  if (clarity) {
    initClarity().then();
  }
  if (activeCampaign) {
    initActiveCampaign().then();
  }
}

function setCookie(cname, cvalue) {
  const d = new Date();
  d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

let showPolicyPersonalize = false;

const policyPersonalize = () => {
  if (showPolicyPersonalize) {
    document.querySelector(".policy .policy-personalize").classList.remove("open");
    showPolicyPersonalize = false;
  } else {
    document.querySelector(".policy .policy-personalize").classList.add("open");
    showPolicyPersonalize = true;
  }
}
