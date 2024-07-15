import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export type PlatformlListItemItemProps = {
  title: string;
  icon?: string;
  link: string;
  id?: number;
};

const PlatformlListItemItem = (props: PlatformlListItemItemProps) => {
  const { icon, link, title } = props;

  return (
    <Box textAlign='center'>
      <Link
        href={{
          pathname: link,
        }}
        passHref>
        <Box as='a' textAlign='center' display='inline-block'>
          {icon && (
            <Box
              width='56px'
              height='56px'
              backgroundColor='rgba(0, 170, 18, 0.09)'
              padding='16px'
              borderRadius='16px'
              display='inline-flex'
              boxShadow='0px 5px 10px rgba(56, 89, 147, 0.05)'
              mx='auto'
              mb={2}>
              <Image
                src={icon}
                alt={`${title} logo`}
                maxWidth='100%'
                mx='auto'
              />
            </Box>
          )}
          <Text fontSize='xs'>{title}</Text>
        </Box>
      </Link>
    </Box>
  );
};

export default PlatformlListItemItem;
