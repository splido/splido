import { Link } from "react-router-dom"

function SeachList({filteredData}) {
    return (
             <div className='dropdown-content'>
                      {/* <a href="">Categories 1 </a>
                      <a href="">Categories 2</a>
                      <a href="">Categories 3</a> */
                    //   Object.entries(childs).map(([key, value])=>(
                    //       <a href="">{key}</a>
                    //   ))
                      Object?.entries(filteredData).map(([key, value])=>(
                        <Link to={`/product/${filteredData[key].slug}`}>{filteredData[key].name}</Link>
                      ))
                      
                      }
                      </div>
    
    )
  }
  
  export default SeachList