function Header(props){
  console.log(props)
  return <>
    <h2>
      {props.title}
    </h2>
  </>
}

export default Header;