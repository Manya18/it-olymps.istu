import Layout from "@/components/layout/Layout"
import UserProfile from "./UserProfile"
import AdminProfile from "./AdminProfile"
import { useState } from "react"


const Profile = () => {
    const [rolle, setRolle] = useState(true);

    return(
        <Layout>
            {rolle? <UserProfile/>:<AdminProfile/>}
        </Layout>
    )
}

export default Profile