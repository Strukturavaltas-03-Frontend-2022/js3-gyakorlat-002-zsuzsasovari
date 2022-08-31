// 1. Írj egy `setCookie` nevű függvényt, ami a paraméterként kapott stringet eltárolja
// egy `token` nevű sütiben, ami 15 perc után lejár!
const setCookie = (value) => {
    let now = new Date(Date.now() + (15 * 60 * 1000));
    let expires = now.toUTCString();
    document.cookie =`token=${value};expires=${expires}`;
}

export default setCookie;
