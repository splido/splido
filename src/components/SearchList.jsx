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
                        <a href="">{filteredData[key].name}</a>
                      ))
                      
                      }
                      </div>
    
    )
  }
  
  export default SeachList