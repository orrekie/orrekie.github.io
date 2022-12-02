let googleAnalytics = true;
let clarity = true;
let activeCampaign = true;

const clickGoogleAnalytics = () => googleAnalytics = !googleAnalytics;
const clickClarity = () => clarity = !clarity;
const clickActiveCampaign = () => activeCampaign = !activeCampaign;

const initGoogleAnalytics = async () => {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-G18QY6YB1W');
}

const initClarity = async () => {
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "es51x7we6f");
}

const initActiveCampaign = async () => {
  (function(e,t,o,n,p,r,i){e.visitorGlobalObjectAlias=n;e[e.visitorGlobalObjectAlias]=e[e.visitorGlobalObjectAlias]||function(){(e[e.visitorGlobalObjectAlias].q=e[e.visitorGlobalObjectAlias].q||[]).push(arguments)};e[e.visitorGlobalObjectAlias].l=(new Date).getTime();r=t.createElement("script");r.src=o;r.async=true;i=t.getElementsByTagName("script")[0];i.parentNode.insertBefore(r,i)})(window,document,"https://diffuser-cdn.app-us1.com/diffuser/diffuser.js","vgo");
  vgo('setAccount', '254392279');
  vgo('setTrackByDefault', true);

  vgo('process');
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
