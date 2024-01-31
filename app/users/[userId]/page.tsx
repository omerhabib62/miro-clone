interface UserIdPageProps{
    params: {
        userId: string;
    }
};
const Page = ({params,}: UserIdPageProps) => {
    return (
        <p>
            UserId : {params.userId}
        </p>
    );
};

export default Page;
