export function indicesOf(substr, str) {
  const indices = [];
  let i = -1;
  while ((i = str.indexOf(substr, i + 1)) >= 0) indices.push(i);
  return indices;
}

export function strEqual(str, caseSensitive = false) {
  if (caseSensitive) {
    return this === str;
  } else {
    return this.toUpperCase() === str.toUpperCase();
  }
}

export function getCurrentDateString() {
  const curDate = new Date();
  return `${curDate.getFullYear()}-${curDate.getMonth()}-${curDate.getDate()}`;
}

export function getCurrentGeoLocation() {
  if ("geolocation" in navigator) {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      return pos.coords;
    }

    function error(err) {
      console.log(`ERROR(${err.code}): ${err.message}`);
    }

    return navigator.geolocation.getCurrentPosition(success, error, options);
  } else {
    /* geolocation IS NOT available */
  }
}
