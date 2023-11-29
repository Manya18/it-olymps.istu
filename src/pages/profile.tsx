import Layout from "@/components/layout/Layout";
import { NextPage } from "next";
import Link from "next/link";

const Profile: NextPage = () => {
    return <Layout>
        <Link href='/makeDiploms'>MakerDiploms</Link><br/>
        <Link href='/userProfile'>UserProfile</Link><br/>
        <Link href='/myOlympiads'>MyOlympiads</Link><br/>
        <Link href='/myDiploms'>MyDiploms</Link>
    </Layout>
}

export default Profile;