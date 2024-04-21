import UserHeader from "../Components/UserHeader";
import UserPost from "../Components/UserPost";

const UserPage = () => {
    return (
        <>
            <UserHeader />
            <UserPost likes={125} replies={58} postImg='/public/post1.png' postTitle="Let's talk about threads." />
            <UserPost likes={256} replies={78} postImg='/public/post2.png' postTitle="Nice tutorial." />
            <UserPost likes={175} replies={62} postImg='/public/post3.png' postTitle="I love this guy." />
            <UserPost likes={52} replies={28} postTitle="This is my first threads" />
        </>
    );
};

export default UserPage;