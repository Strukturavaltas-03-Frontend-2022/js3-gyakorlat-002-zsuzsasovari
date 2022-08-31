// 2. Készíts egy `cookieHandler` nevű objectet, az alábbi három metódust megvalósítja:
// - `getAll`: kiolvassa a sütik nevét és értékét, majd visszaadja őket egy objektumban, ahol a sütik neve a key és az értéke a value (pl. { viewed: 5 })
// - `toSessionStorage`: minden sütit egyenként elment a sessionStorage-ba az adott süti nevével és értékével
// - `flush`: törli az összes sütit

// A teszteléshez hozd létre a böngésződben az alábbi sütiket:
// - `viewed`: 5
// - `uid`: 354774631237
// - `ssid`: Bx55OWbHJ0Vt_IGIF
const cookieHandler ={
    getAll() {
        let result = {};
        let keyValuePairs = document.cookie.split('; ')
        //return keyValuePairs ? keyValuePairs.split('=')[1] : '';
        keyValuePairs.forEach(kvp => {
            let splitted = kvp.split('=');
            result[splitted[0]] = splitted[1];
        });
        return result;
    },
    toSessionStorage(cookies) {
        let result = this.getAll();
        Object.entries(result).forEach(([key, value]) => {
        sessionStorage.setItem(key, value);
        });
    },
    flush() {
        let result = this.getAll();
        Object.keys(result).forEach ((key) => {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
    });
    }
}

export default cookieHandler;
