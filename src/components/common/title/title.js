import React from "react";
import styled from "styled-components";
import { Text } from "./text";
import { Contact } from "./contact";
import { Contacts } from "../../../data/information";
import { Common } from "../../../data/Common";
import { Seperator } from "../header";

export function Title( {lang} ) {

    let Tag = styled.div`
        margin-top: 100px;
        margin-bottom: 50px;
    `

    let Grid = styled.div`
        display: grid;
        grid-template-columns: 1fr 200px;
    `

    var common = Common(lang);

    return (
        <Tag>
            <Grid>
                <Text column={1} title={common.name} desc={common.job} keywords={common.keywords} />
                <Contact column={2} items={Contacts} />
            </Grid>
            <Seperator level={1}/>
        </Tag>
    )
}