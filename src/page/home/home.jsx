import React from "react";
import { Title } from "./style-home";
import { ButtonsBox } from "./style-home";
import { ButtonLink } from "./style-home";
export const Home = () =>{

    return(
        <> 
         <Title>
            Living made Better
        </Title>
        <ButtonsBox>
            <ButtonLink href="#">Buy</ButtonLink>
            <ButtonLink href="#">Rent</ButtonLink>
        </ButtonsBox>
        </>
    )
}