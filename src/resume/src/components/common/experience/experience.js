import React from "react";
import styled from "styled-components";
import { Exps } from "../../../data/Exps";
import { Header, SeperatableHeader } from "../header";

export function Experiences({lang}) {

    let Tag = styled.div`
        margin-bottom: 20px;
    `;

    let exps = Exps(lang);

    return (
        <Tag>
            <SeperatableHeader level={1} title={'Experience'} />
            {
                exps.map(e => Experience(lang, e))
            }
        </Tag>
    )
}

function Experience(lang, experience) {
    let Tag = styled.div`
    `;

    return (
        <Tag>
            <Header level={2} title={experience.company} />
            <Roles roles={experience.roles} />
            <Date enter={experience.enterDate} resign={experience.resignDate} />
            <Works lang={lang} works={experience.works} />
            <Projects lang={lang} projects={experience.projects}/>
        </Tag>
    )
}

function Date({ enter, resign }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;

        font-size: 20px;
        width: fit-content;
        background-color: lightgray;
    `;

    return (
        <Tag>{enter + ' ~ ' + resign}</Tag>
    )
}

function Roles({ roles }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
        display: flex;
    `;

    return (
        <Tag>
            {
                roles.map(role => {
                    return (
                        <Role role={role} />
                    )
                })
            }
        </Tag>
    )
}

function Role({ role }) {
    let Tag = styled.div`
        width: fit-content;
        margin-right: 10px;
    `

    return (
        <Tag>{role}</Tag>
    )
}

function Works({ lang, works }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    let title = lang == 'English' ? 'Works' : '업무';

    return (
        <Tag>
            <Header level={3} title={title} />
            {
                works.map(w => {
                    return (
                        <Work work={w} />
                    )
                })
            }

        </Tag>
    )
}

function Work({ work }) {
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    return (
        <Tag>{'● ' + work}</Tag>
    )
}

function Projects({ lang, projects }){
    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
    `;

    let title = lang == 'English' ? 'Projects' : '프로젝트';

    return (
        <Tag>
            <Header level={3} title={title} />
            {
                projects.map(p => {
                    return (
                        <Project lang={lang} project={p} />
                    )
                })
            }

        </Tag>
    )

}

function Project({lang, project}){

    let Tag = styled.div`
        margin-top: 5px;
        margin-bottom: 5px;
        
        display: grid;
        grid-template-columns: auto 1fr;
        border: 1px solid black;
    `;

    let LeftTag = styled.div`
        grid-row: ${(props) => props.row};
        grid-column: 1;
        width: 100px;
        padding-top: 10px;
        padding-bottom: 10px;
        border-right: 1px solid;
        font-weight: bold;
        text-align: center;
    `;

    let RightTag = styled.div`
        grid-row: ${(props) => props.row};
        grid-column: 2;

        margin-left: 10px;
        padding-top: 10px;
        padding-bottom: 10px;
    `;

    let name = lang == 'English' ? 'Name' : '이름';
    let desc = lang == 'English' ? 'Description' : '설명';
    let date = lang == 'English' ? 'Date' : '기간';
    let role = lang == 'English' ? 'Role' : '역할';
    let result = lang == 'English' ? 'Result' : '성과';
    let skill = lang == 'English' ? 'Skill' : '기술';

    return (
        <Tag>
            <LeftTag row={1}>{name}</LeftTag>
            <LeftTag row={2}>{desc}</LeftTag>
            <LeftTag row={3}>{date}</LeftTag>
            <LeftTag row={4}>{role}</LeftTag>
            <LeftTag row={5}>{result}</LeftTag>
            <LeftTag row={6}>{skill}</LeftTag>

            <RightTag row={1}>{project.name}</RightTag>
            <RightTag row={2}>{project.desc}</RightTag>
            <RightTag row={3}>{project.date}</RightTag>
            <RightTag row={4}>
                <List items={project.actions}/>
            </RightTag>
            <RightTag row={5}>
                <List items={project.results}/>
            </RightTag>
            <RightTag row={6}>
                {Join(project.skills, ',')}
            </RightTag>

        </Tag>
    )
}

function List({items}){
    let Tag = styled.div`
    `;

    let Unit = styled.div`
        margin-top: 2px;
        margin-bottom: 2px;
    `; 

    let index = 1;

    return (
        <Tag>
            {
                items.map(item => {
                    return(
                        <Unit>{index++ + '. ' + item}</Unit>
                    )
                })
            }
        </Tag>
    )
}

function Join(strs, seperator){
    let result = '';
    let index = 1;

    strs.forEach(str => {
        result += str;
        if(strs.length != index++){
            result += seperator;
            result += ' ';
        }
    });

    return result;
}

