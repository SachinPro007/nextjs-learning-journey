const SingleUser = async (props) => {
  const user = await props.params
  
  return (
    <h1>Hello, {user.username}... This is your Profile page......</h1>
  )
}

export default SingleUser