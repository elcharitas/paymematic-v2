import { FC } from "react";
import Image from "next/image";
import { Typography } from "@mui/material";
import { TCreator } from "src/types";
import { Content } from "./Content";
import { formatAddress } from "src/utils";

interface ICreatorCard {
    creator: TCreator;
}
export const CreatorCard: FC<ICreatorCard> = ({ creator }) => {
    return (
        <Content sx={{ maxWidth: 220 }}>
            {creator.photoURL && (
                <Image src={creator.photoURL} width="200px" height="200px" />
            )}
            <Typography variant="h6" gutterBottom={!!creator.bio}>
                {creator.name ? (
                    <>
                        <strong>{creator.name}</strong> (
                        {formatAddress(creator.address)})
                    </>
                ) : (
                    creator.address
                )}
            </Typography>
            {creator.bio && <Typography>{creator.bio}</Typography>}
        </Content>
    );
};
