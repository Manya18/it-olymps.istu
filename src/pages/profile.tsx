import Layout from "@/components/layout/Layout";
import UserProfile from "@/components/screens/userProfile/UserProfile";
import { NextPage } from "next";
import Link from "next/link";

const Profile: NextPage = () => {
    return <Layout>
        <UserProfile/>
    </Layout>
}

export default Profile;