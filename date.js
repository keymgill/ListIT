const js_to_calendar = (date) => {
  const y = String(date.getFullYear()).padStart(4, 0);
  const m = String((date.getMonth() + 1) % 12).padStart(2, 0);
  const d = String(date.getDate()).padStart(2, 0);
  return y + '-' + m + '-' + d;
}

export {js_to_calendar}