import fetch from "isomorphic-unfetch";
import { useRouter } from "next/router";

const Name = (users: { user: { name: string } }) => {
  const router = useRouter();
  // console.log(router);
  // console.log("1" + JSON.stringify(users));
  //   console.log("=====" + JSON.stringify(users.user.name));
  const username = users.user && users.user.name;
  return <div>내 이름은 {username}</div>;
};

// export async function getServerSideProps({ query }) {

// export const getServerSideProps = async ({query}) => {
//   const { name } = query;

export const getServerSideProps = async (ServerRouter: {
  query: { name: string };
}) => {
  const { name } = ServerRouter.query;
  try {
    const res = await fetch(`https://api.github.com/users/${name}`);
    if (res.status == 200) {
      const user = await res.json();
      // console.log(user);
      return { props: { user } };
    }
    return { props: {} };
  } catch (e: any) {
    console.log(e);
    return { props: {} };
  }
};
export default Name;
