import UserResults from "../components/users/UserResults"
import UserSearch from "../components/users/UserSearch"


function Home() {
  return (
    <div className="grid grid-cols-1  mb-8 gap-8">
      <UserSearch />
      <UserResults />
   </div>
  )
}

export default Home
