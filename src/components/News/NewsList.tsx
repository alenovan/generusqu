
import {
    Stack
} from "@chakra-ui/react";
import NewsListItem from "./NewsListItem";

type NewsListProps = {
    limit?: number;
    link?: String;
};

const menu = [
    {
        text: "Lorem ipsum dolor sit amet consectetur. Ullamcorper tortor a nunc ut felis.",
        title: "Makin Seru!",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Fbigimage.png?alt=media&token=2b111572-0c5e-4627-9bf7-4d985e05b1a4",
        link: ""
    },
]



const NewsList = (props: NewsListProps) => {
    const { limit, link } = props;

    return (
        <Stack  >
            {menu?.map((item, i) => (
                <NewsListItem
                    key={i}
                    image={item.icon}
                    title={item.title}
                    body={item.text}
                />
            ))}
        </Stack>
    );
};

export default NewsList;
