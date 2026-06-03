import styled from "styled-components";
import { Nugets, Majors, Minors } from "../../../data/information";
import { Header } from "../header";


let Tag = styled.div`
    margin-bottom: 30px;
    `;

export function Language(){
    let Tag = styled.div`
    `;

    return (
        <Tag>
            <LanguageGrid/>
        </Tag>

    )
}

function LanguageGrid(){
    let Tag = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    `;

    return (
        <Tag>
            <Major column={1}/>
            <Minor column={2}/>
            <Nuget column={3}/>
        </Tag>

    )
}

function Major({column}){
    let Tag = styled.div`
        grid-column: ${column};
    `;

    return (
        <Tag>
            <Header level={2} title={'Major'}/>
            <Keywords items={Majors}/>
        </Tag>
    )
}

function Minor({column}){
    let Tag = styled.div`
        grid-column: ${column};
    `;

    return (
        <Tag>
            <Header level={2} title={'Minor'}/>
            <Keywords items={Minors}/>
        </Tag>
    )
}

function Nuget({column}){
    let Tag = styled.div`
        grid-column: ${column};
    `;

    return (
        <Tag>
            <Header level={2} title={'Nuget'}/>
            <Keywords items={Nugets}/>
        </Tag>
    )
}

function Keywords({items}){
    let Tag = styled.p`
        margin-top: 10px;
    `;

    return (
        <Tag>{items.map(i=> <Keyword item={i}/>)}</Tag>
    )
}

function Keyword({item}){
    let Tag = styled.div`
        width: fit-content;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-left: 5px;
        margin-right: 5px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 2px;
        padding-bottom: 2px;
    `;

    return (
        <Tag>{'● ' + item}</Tag>
    )
}
