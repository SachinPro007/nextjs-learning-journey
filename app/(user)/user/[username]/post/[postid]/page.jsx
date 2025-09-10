const UserPost = async (props) => {
  const user = await props.params
  console.log(user);
  
  return (
    <h1>{user.username}, This is your post id: {user.postid}</h1>
  )
}

export default UserPost