import styled from "styled-components";

export function Date({date}){
    let Tag = styled.div`
        width: fit-content;
        background-color: lightgray;
        margin: 3px;
        border-radius: 1cm;
        padding-left: 7px;
        padding-right: 7px;
    `;

    return (
        <Tag>{date}</Tag>
    )
}

export function ContentDate({content, date, topMargin}){
    
    var top = 0;
    if(topMargin != null)
        top = topMargin;

    let Tag = styled.div`
        display: grid;
        grid-template-columns: 1fr auto;
        margin-top: ${top + 'px'};
    `;

    let Left = styled.div`
        grid-column: 1; 
        vertical-align: center;
    `;

    let Right = styled.div`
        grid-column: 2;
        vertical-align: center;
    `;

    return (
        <Tag>
            <Left>
                {content}
            </Left>
            <Right>
                <Date date={date}/>
            </Right>
        </Tag>
    )

}
