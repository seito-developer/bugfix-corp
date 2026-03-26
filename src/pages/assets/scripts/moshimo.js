
const moshimoParams = new URLSearchParams(document.location.search);
const moshimoEventId = moshimoParams.get("eventUid");

const moshimoScript = document.createElement("script");
moshimoScript.src = `https://r.moshimo.com/af/r/result.js?p_id=7443&pc_id=21468&m_v=${moshimoEventId}`;
moshimoScript.id = "msmaf";

const moshimoNoscript = document.createElement("noscript");
const moshimoImg = document.createElement("img");
moshimoImg.src = `https://r.moshimo.com/af/r/result?p_id=7443&pc_id=21468&m_v=${moshimoEventId}`;
moshimoImg.width = 1;
moshimoImg.height = 1;
moshimoImg.alt = "";
moshimoNoscript.appendChild(moshimoImg);

const moshimoContainer = document.getElementById("moshimo");
moshimoContainer.insertBefore(moshimoNoscript, moshimoContainer.firstChild);
moshimoContainer.insertBefore(moshimoScript, moshimoContainer.firstChild);