export const cheeses = () => {
  return (dispatch) => {
    fetch('/api/cheeses')
    .then(response => response.json())
    .then(cheeses => console.log(cheeses))
    .catch(err => console.log(err))
  }
}