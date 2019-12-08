module.exports = {
  articleExists: (articles, idToFind) => {
    articles.map(article => {
      if (article.id === parseInt(idToFind)) {
        return true
      }
    })

    return false
  }
}