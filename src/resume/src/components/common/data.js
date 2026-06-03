
export const title_name = "박준영";
export const title_desc = "Solution Developer";
export const title_keywords = ['EDA', 'CAD', 'PCB', 'Manufacturing'];

export const introduce_title = '안녕하세요. 박준영입니다.';

export const introduce_contents = [
    'EDA 솔루션 7년차 개발자입니다.  삼성전자, 하이닉스, 현대모비스를 비롯한 여러 기업들의 솔루션을 개발하였으며, 회로도 설계부터 제조 공정까지의 모든 도메인의 솔루션을 경험하였습니다. ',
    'EDA 솔루션은 정확성과 성능이 가장 중요합니다. 고객이 솔루션을 통해 원하는 결과를 정확하게 얻을 수 있게 하며, 1초의 차이를 줄여 고객이 소비할 리소스를 최소화하는 것에 집중합니다.',
];

export const experiences = [
    {
        company: '펜타큐브',
        date: '2017.03 ~ ',
        projects: [
            {
                name:'SMT 솔루션',
                date:'2021.06 ~ 2022.12',
                desc:'제조 공정에서 수행되는 여러 과정들을 자동화하여 제조 공정 솔루션을 개발합니다.',
                items: 
                [
                    {
                        content:'신규 솔루션으로써 개발에 필요한 전체 구조 설계',
                        date:'',
                        children:[]
                    },
                    {
                        content:'Gerber(*.gbr, *.art, *.gdo) 파일을 로드하여 자사 데이터 구조 구축 (형상 정보)',
                        date:'',
                        children:[]
                    },
                    {
                        content:'Neutral(Mentor Graphics) 파일을 로드하여 자사 데이터 구조 구축 (CAD)',
                        date:'',
                        children:[]
                    },
                    {
                        content:'Gerber의 형상 정보와 Neutral의 CAD 정보를 하나의 데이터 구조로 로드하는 데이터 매핑 기능 구현',
                        date:'',
                        children:[]
                    },
                    {
                        content:'SkiaSharp을 이용한 CAD Canvas 기능 구현',
                        date:'',
                        children:[]
                    },
                    {
                        content:'고객별 프로젝트를 플러그인으로 관리하기 위한 플러그인 구조 구현',
                        date:'',
                        children:[]
                    },
                 
                ]
            },
            {
                name:'CAD 파일 로드',
                date:'',
                desc:'CAD 파일을 읽어 자사 데이터 구조를 구축합니다.',
                items: 
                [
                    {
                        content:'ODB++ 형식 도면으로 읽은 데이터 구조 운영 및 유지보수',
                        date:'2017.03 ~ ',
                        children: [],
                    },
                    {
                        content:'Cadence Extracta를 이용하여 Cadence 파일(*.mcm, *.brd, *.sip) 로드 기능 개발',
                        date:'2019.03 ~ 2019.04',
                        children: [],
                    }
                ]
            },
            {
                name:'PCB 비교 솔루션',
                date:'2019.05 ~ 2020.02, 2021.08 ~ 2021.10',
                desc:'리버전되거나 서로 다른 CAD 파일을 비교하여 변경점을 확인할 수 있도록 기능을 구현합니다.',
                items: 
                [
                    {
                        content:'Net, 부품, 레이어별 비교 기능 개발',
                        date:'',
                        children: [],
                    },
                    {
                        content:'2차원 형상 집합간 비교 알고리즘 성능 개선 및 최적화',
                        date:'',
                        children: [],
                    }
                ]
            },
            {
                name:'FlexLM 라이센스 모듈',
                date:'2017.06 ~ 2017.12',
                desc:'FlexLM License API를 자사 솔루션에 적용하고 고객 환경에서 정상 동작할 수 있도록 유틸리티를 개발합니다.',
                items: 
                [
                    {
                        content:'FlexLM 라이센스 API를 이용하여 자사 라이센스 모듈 개발',
                        date:'',
                        children: [],
                    },
                    {
                        content:'사내 라이센스 발급 시스템 개발',
                        date:'',
                        children: [],
                    },
                    {
                        content:'초기 라이센스 발급 및 고객 환경 설정 프로세스 확립',
                        date:'',
                        children:[],
                    }
                ]
            },
            {
                name:'PCB 검증 솔루션',
                date:'',
                desc:'PCB 도면을 읽어 제조, 전자공학적 관점의 체크리스트를 검증하고 결과를 나타냅니다. (DRC)',
                items: 
                [
                    {
                        content:'삼성전자, 하이닉스, 현대모비스 등의 PCB 체크리스트 자동화',
                        date:'',
                        children: [],
                    },
                    {
                        content:'PCB 도면 검증 알고리즘 연구 및 개발 (DFM, DFE)',
                        date:'',
                        children: [],
                    },
                    {
                        content:'131종의 DRC Rule 개발',
                        date:'',
                        children:
                        [
                            {
                                content:'SK 하이닉스 Package DFM DRC 개발 (8종)',
                                date:'2017.03 ~ 2017.09',
                            },
                            {
                                content:'삼성전자 네트워트 사업부 DFM DRC 유지보수 및 신규 Rule 개발 (6종) ',
                                date:'2017.10 ~ 2018.02',
                            },
                            {
                                content:'SK 하이닉스 Package DFM DRC 개발 (8종)',
                                date:'2017.03 ~ 201 Module DFM DRC 개발 (13종)',
                                date:'2018.01 ~ 2018.06',
                            },
                            {
                                content:'삼성전자 네트워크 사업부 DFE DRC 개발 (24종)',
                                date:'2018.01 ~ 2018.08',
                            },
                            {
                                content:'현대모비스 자동차 DRC 개발 (45종)',
                                date:'2019.05 ~ 2020.02',
                            },
                            {
                                content:'SK 하이닉스 Strip DRC 개발 (15종)',
                                date:'2020.03 ~ 2020.08',
                            },
                            {
                                content:'상용 DFE 개발 (21종)',
                                date:'2020.10 ~ 2021.02',
                            },
                        ],
                    }
                ]
            },
        ]
    }
];

export const skills_major_desc = '주 사용 언어 및 프레임워크';
export const skills_minor_desc = '경험해본 언어 및 프레임워크 (토이 프로젝트 등)';
export const skills_nuget_desc = '사용해본 Nuget Package';

export const skills_major = 
[
    {
        name:'C#',
        image : 'https://blog.kakaocdn.net/dn/dqSvHV/btq1R8cXqgg/CAJ7G4j2GKGA2KfRL6iIs0/img.png',
    },
    {
        name:'.NET Framework',
        link:'https://dotnet.microsoft.com/ko-kr/',
    },
    {
        name:'WPF',
        link : 'https://github.com/dotnet/wpf',
    },
    {
        name:'Infragistics',
        link : 'https://www.infragistics.com/',
    },
    {
        name:'Prism',
        link: 'https://prismlibrary.com/docs/',
    },
];

export const skills_minor = 
[
    {
        name:'React',
        link:'https://ko.reactjs.org/',
    },
    {
        name:'JavaScript',
    },
    {
        name:'Node.Js',
        link : 'https://nodejs.org/en/',
    },
    {
        name:'styled-components',
        link : 'https://styled-components.com/',
    },
];

export const nugets = [
 
    {
        name:'ReactiveUI',
        link: 'https://www.reactiveui.net/',
    },
    {
        name:'SkiaSharp',
        link: 'https://github.com/mono/SkiaSharp',
    },
    {
        name:'CommandLineParser',
        link: 'https://github.com/commandlineparser/commandline',
    },
    {
        name:'OxyPlot',
        link: 'https://oxyplot.github.io/',
    },
    {
        name:'StyleCop.Analyzers',
        link: 'https://github.com/DotNetAnalyzers/StyleCopAnalyzers',
    },
    {
        name:'NUnit',
        link: 'https://nunit.org/',
    },
    {
        name:'Newtonsoft.Json',
        link: 'https://www.newtonsoft.com/json',
    },
    {
        name:'MathNet',
        link:'https://numerics.mathdotnet.com/',
    },
    {
        name:'LiveCharts',
        link:'https://v0.lvcharts.com/'
    },
    {
        name:'AdonisUI',
        link : 'https://benruehl.github.io/adonis-ui/',
    },
    {
        name:'Selenium',
        link: 'https://www.selenium.dev/',
    },
];