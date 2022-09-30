import { User } from "models/User";
import { GetServerSideProps, NextPage } from "next";

interface PageProps {
  user: User | null;
}

const Page: NextPage<PageProps> = ({ user }) => {
  return <>This is my profile {user?.userName}</>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('context', context.params?.userName)
  return {
    props: {
      user: {
        userName: context.params?.userName
      },
    },
  };
};

export default Page;