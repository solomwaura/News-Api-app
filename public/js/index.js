const articlesContainer = document.getElementById('articles');
articles.forEach(article => {
  const articleElement = document.createElement('div');
  articleElement.innerHTML = `
    <h2>${article.title}</h2>
    <p><strong>Author:</strong> ${article.author}</p>
    <p><strong>Published:</strong> ${article.publishedAt}</p>
    <p>${article.content}</p>
    <a href="${article.url}" target="_blank">Read more</a>
  `;
  articlesContainer.appendChild(articleElement);
})