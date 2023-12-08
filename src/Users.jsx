import { Link } from "react-router-dom"

const AllUsers = ({users}) =>{
    return(
        <div className="container">
        <h1>Users</h1>
        <ul>
            {
            users.map((user) => {
                return(
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.name}</Link>
                </li>
                )
            })
            }
        </ul>
        </div>
    )
}

export default AllUsers