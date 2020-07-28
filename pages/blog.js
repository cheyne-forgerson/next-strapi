import fetch from 'isomorphic-unfetch'
import Article from 'components/Article'

export default function Blog(props) {
  const { API_URL } = process.env

  return (
    <div style={{display: "block", textAlign: "center"}}className="container">
      {props.articles.map(article => (
        <Article
          key={article.id}
          header={article.title}
          title={article.subtitle}
          content={article.content}
        />
      ))}
    </div>
  )
}


export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/articles`)
  const data = await res.json()

  return {
    props: {
      articles: data
    }
  }

}