function Button({type, children}) {
  return (
    <div>
        <a href="/" className= {`btn ${type}`} >
            {children}
        </a>
    </div>
  )
}

export default Button