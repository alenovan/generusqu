
import {
    Box,
    Center,
    Grid,
    GridItem,
    Skeleton,
    SkeletonCircle,
    Stack,
    Text,
    Container,
} from "@chakra-ui/react";
import React, { useMemo } from "react";
import PlatformlListItemItem from "./PlatformlListItem";

type PlatformListListProps = {
    limit?: number;
    platform: String;
    link?: String;
};

const menu = [
    {
        title: "Instagram",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Finstagram-2-1-logo%202.png?alt=media&token=03758d37-511b-46bb-a154-beb82912a4b0",
        link: "instagram"
    },
    {
        title: "Youtube",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Fyoutube%202.png?alt=media&token=fafbc1f0-c72d-4647-9229-8bf770bd23e2",
        link: ""
    },
    {
        title: "Facebook",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Ffacebook-2-logo%202.png?alt=media&token=aead75ab-d85a-4009-94fa-7b43646ce531",
        link: ""
    },
    {
        title: "Tiktok",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Ftiktok%202.png?alt=media&token=ffd4a698-b911-4d76-be37-610dfd1f201b",
        link: ""
    },
    {
        title: "Google Maps",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Fnew-google-maps-icon-logo-263A01C734-seeklogo%202.png?alt=media&token=87560c57-5390-4d22-a738-8e92b75dce9a",
        link: ""
    },
    {
        title: "Whatsapp",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Fwhatsapp%202.png?alt=media&token=9239cb52-7af4-4a69-877b-61d170b00243",
        link: ""
    },
    {
        title: "Shopee",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2Fbag-smile%202.png?alt=media&token=1d4bad9b-3535-4a6a-a8c9-029fee7d69e6",
        link: ""
    },
    {
        title: "Lainnya",
        icon: "https://firebasestorage.googleapis.com/v0/b/resellerindo-revamp-fe008.appspot.com/o/dummyclickcuan%2FGroup%2025.png?alt=media&token=6d14a45d-f9f8-402c-a818-a2fd419d34bd",
        link: ""
    }
]



const PlatformListList = (props: PlatformListListProps) => {
    const { limit, platform, link } = props;

    return (
        <Container >
            <Grid templateColumns='repeat(4, 1fr)' gap={10} justifyItems="center">
                {menu?.map((item, i) => (
                    <GridItem key={""}>
                        <PlatformlListItemItem
                            icon={item.icon}
                            link={`misi/` + item.link}
                            title={item.title}
                        />
                    </GridItem>
                ))}
            </Grid>
        </Container >
    );
};

export default PlatformListList;
