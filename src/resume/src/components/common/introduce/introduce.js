import React from "react";
import styled from "styled-components";
import picture from '../../../assert/picture.jpg'
import { SeperatableHeader } from "../header";
import { Intro } from "../../../data/Intro";

const desc_title_size = '22px';
const desc_content_size = '17px';
const image_width = '200px';

export function Introduce( {lang} ) {

    let Tag = styled.div`
        margin-bottom: 20px;
    `

    return (
        <Tag>
            <SeperatableHeader level={1} title={'Introduce'} />
            <Content lang={lang}/>
        </Tag>
    )
}

function Content( {lang} ) {
    let Tag = styled.div`
        display: grid;
        grid-template-columns: 1fr 3fr;`

    let intro = Intro(lang);

    return (
        <Tag>
            <Image column={1} image={picture} />
            <Description column={2} title={intro.title} descriptions={intro.desc} />
        </Tag>
    )
}

function Image({ column, image }) {
    let Tag = styled.div`
        grid-column: ${column};
        text-align: center;
    `;

    let Img = styled.img`
        width : ${image_width};
    `

    return (
        <Tag>
            <Img src={image} />
        </Tag>
    )
}

function Description({ column, title, descriptions }) {
    let Tag = styled.div`
    
        margin-left: 50px;
        grid-column: ${column};
    ` ;

    return (
        <Tag>
            <DescriptionTitle title={title} />
            {
                descriptions.map(c => {
                    return (
                        <DescriptionContent desc={c} />
                    )
                })
            }
        </Tag>
    )
}

function DescriptionTitle({ title }) {
    let Tag = styled.div`
        font-size: ${desc_title_size};
        margin-bottom: 10px;
        font-weight: bold;
    `;

    return (
        <Tag>{title}</Tag>
    )
}

function DescriptionContent({ desc }) {
    let Tag = styled.div`
        font-size: ${desc_content_size};
        margin-top: 5px;
        margin-bottom: 5px;
    `

    return (
        <Tag>{desc}</Tag>
    )
}