import styled from "styled-components";

export function Text({column, title, desc, keywords}){
    let Tag = styled.div`
        grid-column: ${column};
    `

    let Title = styled.div`
        text-align: left;
        font-weight: bold;
        font-size: 50px;
    `

    let Desc = styled.div`
        text-align: left;
        font-size: 25px;
    `


    return (
        <Tag>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
            <Keyword items={keywords}/>
        </Tag>
    )
}

function Keyword ({ items }){
    let Tag = styled.div`
        text-align: left;
    `

    let result = '';
    let i = 1;

    for (i = 0; i < items.length - 1; i++) {
        result += items[i] + ' | ';
    }

    result += items[items.length - 1];

    return (
        <Tag><>{result}</>s</Tag>
    )
}