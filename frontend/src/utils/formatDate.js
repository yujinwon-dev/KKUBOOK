function formatDate(inputdate) {
  const fulldate = new Date(inputdate).toISOString().substr(0, 10);

  return fulldate;
}

export default formatDate;
