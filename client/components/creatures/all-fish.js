import React from 'react'
import {connect} from 'react-redux'

class AllFish extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <p className="flow-text">Fish A-Z</p>
          {/* <div id="all-fish-view" /> */}
        </div>
      </div>
    )
  }
}

//       <div className="container">
//       <div className="row">
//         <p className="flow-text">Look at all this in-game awesomeness you could own!</p>
//         <div id="all-products-view">
//           {products && products.length > 0
//             ? products.map((product) => {
//                 return (
//                   <div className="col s3" key={product.id}>
//                     <div className="card hoverable">
//                     <div className="card-image">
//                     <a href={`/products/${product.id}`}><img src={product.imageURL} className="responsive-img" height="50%" /></a>
//           <a className="btn-floating pulse halfway-fab waves-effect waves-light"><i className="material-icons">add_shopping_cart</i></a>
//           </div>
//           <div className="card-content">
//           <span className="card-title">{product.name}</span>
//           <p>Price: {product.price}</p>
//           <p>{`${product.description.slice(0, 28)}...`}</p>
//         </div>
//         <div className="card-action">
//                 <a href={`/products/${product.id}`}>{`LEARN MORE ABOUT ${product.name}`}</a>
//         </div>
//                     </div>
//                   </div>
//                 );
//               })
//             : 'LOADING...'}
//         </div>

//       </div>

//       </div>
//     );
//   }
// }

export default AllFish
