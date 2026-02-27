const MIRRORS = [
  "https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=ur&dt=t&q={q}",
  "https://api.mymemory.translated.net/get?q={q}&langpair=en|ur"
];

const PROXY = "https://corsproxy.io/?";
const LIBRE_MIRRORS = [
  "https://translate.terraprint.co/translate",
  "https://libretranslate.de/translate"
];

const translationCache = new Map();
const pendingRequests = new Map();
let requestQueue = [];
let isProcessingQueue = false;

const processQueue = async () => {
  if (isProcessingQueue || requestQueue.length === 0) return;
  isProcessingQueue = true;
  while (requestQueue.length > 0) {
    const { text, targetLang, resolve } = requestQueue.shift();
    try {
      const result = await performTranslation(text, targetLang);
      resolve(result);
    } catch (err) { resolve(text); }
    await new Promise(r => setTimeout(r, 200)); 
  }
  isProcessingQueue = false;
};


const performTranslation = async (text, targetLang) => {
  // 1. Try Google & MyMemory (GET requests, very stable)
  for (let url of MIRRORS) {
    try {
      const finalUrl = url.replace("{q}", encodeURIComponent(text));
      const res = await fetch(finalUrl);
      if (res.ok) {
        const data = await res.json();
        // Google GTX format
        if (url.includes("googleapis") && data[0] && data[0][0]) return data[0][0][0];
        // MyMemory format
        if (url.includes("mymemory") && data.responseData.translatedText) return data.responseData.translatedText;
      }
    } catch (e) {
      console.warn("Retrying with next source...");
    }
  }

  // 2. Try LibreTranslate Mirrors via Proxy (POST requests)
  for (let url of LIBRE_MIRRORS) {
    try {
      const body = new URLSearchParams({ q: text, source: "en", target: targetLang, format: "text" });
      const res = await fetch(`${PROXY}${encodeURIComponent(url)}`, {
        method: "POST",
        body: body,
        headers: { "Content-Type": "application/x-www-form-urlencoded" }
      });
      if (res.ok) {
        const data = await res.json();
        if (data.translatedText) return data.translatedText;
      }
    } catch (e) {}
  }

  return text;
};

export const translateText = async (text, targetLang = "ur") => {
  if (!text || typeof text !== "string" || text.trim().length < 2) return text;
  const trimmed = text.trim();
  const cacheKey = `trans_${targetLang}_${trimmed}`;

  const cached = localStorage.getItem(cacheKey) || translationCache.get(cacheKey);
  if (cached) return cached;

  if (pendingRequests.has(cacheKey)) return pendingRequests.get(cacheKey);

  const promise = new Promise((resolve) => {
    requestQueue.push({ 
      text: trimmed, 
      targetLang, 
      resolve: (val) => {
        localStorage.setItem(cacheKey, val);
        translationCache.set(cacheKey, val);
        pendingRequests.delete(cacheKey);
        resolve(val);
      }
    });
  });

  pendingRequests.set(cacheKey, promise);
  processQueue();
  return promise;
};





