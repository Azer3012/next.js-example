import Head from "next/head";

import styles from '../../styles/Ninjas.module.css'

import Link from 'next/link'
export const getStaticProps=async ()=>{
    const response=await fetch('https://jsonplaceholder.typicode.com/users');
    const data=await response.json();
    return {
        props:{users:data}
    }
}
const Ninjas = ({users}) => {
  return (
    <>
      <Head>
        <title>Ninja List</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Users</h1>
        {users.map(user=>(
            <Link href={'/ninjas/'+ user.id} key={user.id}>
                <a className={styles.user}>
                    <h3 className={styles.name}>{user.name}</h3>
                </a>
            </Link>
        ))}
      </div>
    </>
  );
};

export default Ninjas;
