export function Intro( lang ){
    let language = lang ?? 'Korean'

    if(language == 'English'){
        return IntroEg;
    }
    else{
        return IntroKr;
    }
}

const IntroKr = {
    title: '문제를 정의하고 문제에 집중하고 문제를 해결합니다.',
    desc: [
        '6년 전, 전자 CAD 솔루션의 개발자로 커리어를 시작하였습니다. 전자 제품이 설계되고 생산되는 모든 과정에 대한 솔루션 제작에 참여하였습니다. 회로도 설계부터, PCB 설계, 제조 공정까지 모든 과정의 솔루션을 개발하며 경험을 쌓았습니다. 현재는 회로 검증 솔루션의 프로젝트 리더를 맡고 있습니다.',
        '솔루션 개발은 고객의 문제를 정의하고 문제를 해결하기 위한 과정입니다. 이 과정은 늘 어렵지만 문제 해결의 순간은 항상 달콤합니다. 저는 그 달콤함을 위해 항상 노력합니다. 저는 .NET 개발자 박준영입니다.',
    ]
}

const IntroEg = {
    title: 'Define problems, focus on problems, and resolve problems.',
    desc: [
        'Six years ago, I started my career as a developer of electronic CAD solutions. I participated in the production of solutions for every process in which electronics are designed and produced. From circuit diagram design to PCB design to manufacturing process, I have developed experience in developing solutions. I am currently the project leader of the circuit verification solution.',
        'Solution development is the process of defining and resolving customer problems. This process is always difficult, but the moment of problem solving is always sweet. I always try for that sweetness. I am Junyoung Park, a developer of .NET.',
    ]
}