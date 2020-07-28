import fetch from 'isomorphic-unfetch'
import Product from 'components/Product'

function ProductList(props) {
  const { API_URL } = process.env

  const indexContainerStyle = {
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(60vmin, 1fr))",
    width: "100%", 
    justifyContent: "center",
    height: "auto",
    textAlign: "center"
  }
    
  return (
    <div style={indexContainerStyle}className="container">
      {props.products.map(product => (
        <Product
          key={product.id}
          imgSrc={API_URL + product.image[0].url}
          header={product.title}
          title={"$" + product.price}
          content={product.description}
        />
      ))}
    </div>
  )
}


export async function getServerSideProps() {
  const { API_URL } = process.env

  const res = await fetch(`${API_URL}/products`)
  const data = await res.json()

  return {
    props: {
      products: data
    }
  }
}

export default ProductList;