import react from 'react';
import blogData from '../data/blog';

function Article (){
let individualArticle = blogData.posts.map((article) =>{
    
    return (
    <article key={article.id} >
        <h3>{article.title}</h3>
        <small>{article.date || "January 1, 1970"}</small>
        <p>{article.preview}</p>
    </article>)
})

return individualArticle
}

export default Article