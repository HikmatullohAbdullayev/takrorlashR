import React from "react";
import { Banner } from "./style-banner";
import { Container } from "../../config/global-style";
import { Home } from "../home/home";
export const Main = () =>{

    return(
        <Banner>
       <Container>
        <Home/>
        
       </Container>

        </Banner>
    )
}