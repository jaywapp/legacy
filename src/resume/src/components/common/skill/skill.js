import React from "react";
import styled from "styled-components";
import { SeperatableHeader } from "../header";
import { Language } from "./language";

export function Skill(){

    let Tag = styled.div`
        margin-bottom: 20px;
    `;

    return (
        <Tag>
            <SeperatableHeader level={1} title={'Skill'}/>
            <Language/>
        </Tag>
    )
}