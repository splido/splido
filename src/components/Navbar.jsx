import logo from '../assets/img/logo.svg'
import seachIcon from '../assets/img/search.svg'
import Button from './Button'
import Menu from './Menu';
import { useEffect, useState } from "react"
import SeachList from './SearchList';
function Navbar({products}) {
  const categories = {
    Category_1: '#',
    Category_2: '#',
    Category_3: '#',
  }
  const blogs = {
    blog_1: '#',
    blog_2: '#',
    blog_3: '#',
  }
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('')
  const [searching, setSearching] = useState(false)
  const [dataFilter, setDataFilter] = useState('')
  const [isBlogMenuOpen, setBlogMenuOpen] = useState(false);

  const handleMouseEnter = (e) => {
    if (e.target.innerHTML === 'Categories'){
      setMenuOpen(true);
    }if (e.target.innerHTML === 'Blog'){
      setBlogMenuOpen(true);
    }
    // if(e.target)
    // setSearching(true)
    // console.log(e.target.innerHTML)

  };

  const handleMouseLeave = () => {
    setSearching(false)
    setMenuOpen(false);
    setBlogMenuOpen(false);
    setDataFilter('')
  };
const onHandleChange =(e)=>{
 setSearchVal(e.target.value)
 setSearching(true)
 filterData()
}
const onHandleClick=(e)=>{
  setSearching(true)
 }

const filterData= () =>{
  const filteredData = products?.data?.filter((item) =>
  item.name.toLowerCase().includes(searchVal.toLowerCase())
  );
  setDataFilter(filteredData)
}
//console.log(filteredData)
// const childKey = Object.keys(filteredData)
// console.log(childKey)

// const nameValue = filteredData[childKey]?.name;
// console.log(nameValue)
  return (
    <div>
        <nav>
        <div className="container">
            <div className="navbar">
            <div className="logo">
                <img src={logo} alt=""/>
            </div>
            <div className="menu">
                <ul className="hover-menu-container">

                    <li className='dropdown' onMouseEnter={handleMouseEnter} ><a href="">Categories</a>
                
                    {isMenuOpen && (
                      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Menu childs={categories}/>
      </div>)}
        </li>
                    <li className='dropdown' onMouseEnter={handleMouseEnter}><a href="">Blog</a>
                    {isBlogMenuOpen && (
                       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Menu childs={blogs}/></div>)}
                    </li>
                   
                </ul>
            </div>
            <div className="search">
                <form>
                    <input onChange={onHandleChange} onClick={onHandleClick} onMouseEnter={handleMouseEnter}  value={searchVal} type="text" id="search"  placeholder="Search"/>
                    { searching && (
                       <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <SeachList filteredData={dataFilter}/></div>)}
                  </form>
                  <div className="seach-icon">
                    <img src={seachIcon} alt=""/>
                  </div>
            </div>
            <div >
            <div className="nav-buttons">
           <Button type ='btn-light'>Login</Button>
           <Button type ='btn-dark'>Register</Button>
           </div>
        </div>
        </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar