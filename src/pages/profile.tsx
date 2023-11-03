import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Link from "next/link";

const Profile: NextPage = () => {
    return <Layout>Profile
        <Link href='/makeDiploms'>MakerDiploms</Link>
    </Layout>
}

export default Profile;