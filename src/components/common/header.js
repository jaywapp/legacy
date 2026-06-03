import styled from "styled-components"
import { ContentDate } from "./date";

const HeaderDiv = styled.div`
    text-align: left;
    font-weight: bold;
    font-size: ${(props) => props.fontsize + 'px'};
    margin-top: ${(props) => props.margin+ 'px'};
`

const SeperatorDiv = styled.hr`
    color: black;
    background-color: black;
    height: ${(props) => props.height+ 'px'};
`

export function Header({level, title, date}){

    let size = GetFontSize(level);
    let margin = GetTopMargin(level);

    if(date == null){

        return (
            <HeaderDiv fontsize={size} margin={margin}>{title}</HeaderDiv>
        );
    }
    else{

        return (
            <ContentDate 
                margin={margin}
                content={<HeaderDiv fontsize={size} >{title}</HeaderDiv>}
                date={date}/>
        )
    }
}

export function SeperatableHeader({level, title, date}){
    
    let size = GetFontSize(level);
    let margin = GetTopMargin(level);
    let height = GetHeight(level);

    let Tag = styled.div`
        margin-top: ${margin+'px'};
    `

    if(date == null){
        return (
            <Tag>
                <HeaderDiv fontsize={size}>
                    {title}
                </HeaderDiv>
                <SeperatorDiv height={height}/>
            </Tag>
        );
    }
    else{
        return (
            <Tag>
                <ContentDate
                    content={<HeaderDiv fontsize={size}>{title}</HeaderDiv>}
                    date={date}/>
                <SeperatorDiv height={height}/>
            </Tag>
        )
    }
}

export function Seperator({ level }){
    
    let height = GetHeight(level);

    return (
        <SeperatorDiv height={height}/>
    )
}

function GetFontSize(level){
    if(level == 1){
        return 40;
    }
    else if(level == 2){
        return 33;
    }
    else if(level == 3){
        return 25;
    }
    else if(level == 4){
        return 17;
    }
    else if(level == 5){
        return 15;
    }

    return 0;
}

function GetTopMargin(level){
    if(level == 1){
        return 40;
    }
    else if(level == 2){
        return 30;
    }
    else if(level == 3){
        return 25;
    }
    else if(level == 4){
        return 10;
    }
    else if(level == 4){
        return 5;
    }

    return 0;
}

function GetHeight(level){
    if(level == 1){
        return 3;
    }
    else if(level == 2){
        return 1;
    }
    else if(level == 3){
        return 0.5;
    }
    else if(level == 4){
        return 0.1;
    }

    return 0;
}
