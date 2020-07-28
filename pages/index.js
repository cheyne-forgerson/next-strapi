import fetch from 'isomorphic-unfetch'

export default function Index(props) {
    const { API_URL } = process.env

    return (
        <div style={{display: "block", textAlign: "center"}}className="container">
        {props.homeimages.map(homeimage => (
         <img src={API_URL + image[i].url} />
        ))}
      </div>
    )
}

export async function getServerSideProps() {
    const { API_URL } = process.env
  
    const res = await fetch(`${API_URL}/homeimages`)
    const data = await res.json()

    console.log(data);
  
    return {
      props: {
        homeimages: data
      }
    }
}