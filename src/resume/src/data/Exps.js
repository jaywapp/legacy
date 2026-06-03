export function Exps(lang){
    let language = lang ?? 'Korean'

    if(language == 'English'){
        return ExpesEG;
    }
    else{
        return ExpesKR;
    }
}

const ExpesKR = [
    {
        company : '펜타큐브',
        roles : [
            'Software Developer', 'Tech Leader', 'Project Leader',
        ],
        enterDate : '2017.03',
        resignDate : '',
        works : [
            '회로 설계 솔루션 프로젝트 리더 (CubicLDRC) / Project Leader ',
            'SMT 솔루션 설계 및 개발 (CubicSMT) / Tech Leader',
            'CAD 도면 로드 및 데이터 구조 구축 (ODB++, Gerber, Cadence Extracta, Neutral) / Developer',
            'CAD 도면 검증 솔루션 개발 ( 132종 ) / Developer, Project Managing',
            '삼성전자, SK Hynix, 현대 모비스 등의 기업 PCB 검증 자동화 솔루션 개발',
            'FlexLM License 시스템 구축 / Developer',
        ],

        projects : [
            {
                name : 'LDRC Solution Reversion',
                desc : '회로 검증 솔루션 리뉴얼',
                date : '22/03 ~ 진행중',
                actions : [
                    '프로젝트 일정 관리',
                    '솔루션 UX/UI 개선',
                    '회로 검증 항목 관리 기능 개발',
                ],
                results : [],
                skills :[ 'C#', '.NET', 'WPF', 'MVVM', 'ReactiveUI', 'DependencyProperty', 'Schemetic', 'EDIF'],
            },
            {
                name : 'SkiaSharp CAD Canvas',
                desc : 'SkiaSharp 기반 CAD Canvas 개발 및 Geometry 구조 구축',
                date : '22/03 ~ 22/06 (4개월)',
                actions : [
                    'SkiaSharp 기반 CAD Canvas 개발',
                    'SkiaSharp 기반 Geometry 구조 개발 (Line, Arc, Circle, Rectange, Polygon)',
                ],
                results : [
                    '2D 데이터 최적 Canvas 적용 (3D OpenGL 오버스펙 해소)',
                    '제조 환경 CAD 기능 최적화',
                ],
                skills :[ 'C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'ReactiveUI', 'Prism', 'IoC', 'SkiaSharp', 'PCB', 'Gerber', 'SMT', 'Manufacturing'],
            },
            {
                name : 'Gerber, Neutral Importing',
                desc : 'Gerber 파일 형식과 Neutral 파일 형식 분석 및 데이터 구조 구축',
                date : '21/06 ~ 21/08 (3개월)',
                actions : [
                    'Gerber 파일 분석 및 로드 기능 개발 (RS-274X)',
                    'Neutral 파일 분석 및 로드 기능 개발 (Mentro Graphics)',
                ],
                results : [
                    '이용가능 CAD 파일 형식 추가 (기존 : ODB++, Cadence Extracta / 추가 : Gerber, Neutral)',
                    'SMT 공정 도면 형식 추가로 인한 사업 영역 확대',
                ],
                skills :['C#', '.NET', 'WPF', 'Gerber', 'Neutral', 'PCB', 'SMT', 'Manufacturing'],
            },
            {
                name : 'SMT Solution',
                desc : 'SMT 공정 업무 자동화 솔루션',
                date : '21/03 ~ 21/06 (4개월)',
                actions : [
                    '테크 리더',
                    '솔루션 전체 구조 설계',
                    'IoC기반 모듈 구조 구축',
                    'Facade 패턴 기반 기능 제어 모듈 구축 (Controller)',
                    'MVVM 패턴 기반 화면 구성',
                ],
                results : [
                    '신규 분야 솔루션 개발 (제품군 추가)',
                    '사내 최고 성과급 달성',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'ReactiveUI', 'Prism', 'IoC', 'Plugin', 'PCB', 'SMT', 'Manufacturing'],
            },
            {
                name : 'Pentacube DFE, DFM Rule pack',
                desc : '자사 공용 DFE, DFM package를 개발하여 상용화하였습니다.',
                date : '20/10 ~ 21/02 (4개월)',
                actions : [
                    '범용 DFM Rule 개발',
                    '범용 DFE Rule 개발',
                ],
                results : [
                    '범용 Rule Package 상품 개발 (영업 영역확대)',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM', 'DFE'],
            },
            {
                name : 'Strip DRC & Interfacing',
                desc : 'SK Hynix의 연배열 구조를 구축하고 그에 대한 DRC Rule을 개발하였습니다.',
                date : '20/03 ~ 20/08 (6개월)',
                actions : [
                    'DRC 개발 (15종)',
                    '연배열 도면 Importing',
                    '연배열 CAD 데이터 구조 구축',                    
                ],
                results : [
                    '연배열 가능 솔루션 구축 (영업, 마케팅 범위 확대)',
                ],
                skills :[ 'C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'Cadence Allregro', 'Cadence Extracta', 'ODB++'],
            },
            {
                name : '현대 모비스 업무 자동화',
                desc : '현재 자동차 그룹내 DRC Rule과 PCB 비교 솔루션 개발',
                date : '19/05 ~ 20/02 (10개월)',
                actions : [
                    '현대자동차 HKMC 자동화 (46종)',
                    'PCB 도면 비교 솔루션 개발',
                ],
                results : [
                    '자동차 EDA 산업 진출 기회 창출',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM',],
            },
            {
                name : 'Cadence Extracta Importing',
                desc : 'Cadence Extracta를 이용한 CAD 도면 정보 추출 및 데이터 구조 구축',
                date : '19/03 ~ 19/04 (2개월)',
                actions : [
                    'Cadence Extracta를 이용한 도면 정보 추출',
                    '추출된 정보로부터 자사 CAD 데이터 구조 구축',
                ],
                results : [
                    'ODB++를 사용하지 않고 직접 Cadence 파일 로드 가능',
                    '도면 Importing 속도 개선 (50% 시간 단축)'
                ],
                skills :['C#', '.NET', 'WPF', 'Cadence Allregro', 'Cadence Extracta', 'ODB++'],
            },
            {
                name : 'SK Hynix Module 업무 자동화',
                desc : 'SK Hynix Module팀 도면 검증 프로세스 자동화',
                date : '18/03 ~ 18/06 (4개월)',
                actions : [
                    '고객과 직접 소통하며 프로젝트 관리',
                    'PCB 체크리스트 자동화 (DFM 13종)',                    
                ],
                results : [
                    '고객 MBO 달성 (Thanks mail)',
                    '타 부서 영업 확장',
                    '고객 업무 프로세스화 (유지보수 계약 진행 중)',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM',],
            },
            {
                name : 'Samsung NW DFM / DFE',
                desc : 'Samsung NW 사업부 도면 검증 프로세스 자동화',
                date : '17.10 ~ 18.03 (6개월)',
                actions : [
                    'PCB 체크리스트 자동화',
                    'DFM 6종, DFE 24종 개발',
                    '기존 배포 제품 유지 보수 및 개선',
                ],
                results : [
                    '검증 시간 단축 (10분 이상 ⇒ 2분 이내)',
                    '전체 항목 자동화',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM', 'DFE',],
            },
            {
                name : 'FlexLM License System',
                desc : 'FlexLM License API 적용 및 모듈화, 배포 시스템 구축',
                date : '17.06 ~ 17.12 (6개월)',
                actions : [
                    '.NET 기반 FlexLM Module 생성',
                    '발급권자 전용 License 발급 유틸리티 개발',
                    'License 발급 프로세스 적용 및 안정화',                    
                ],
                results : [
                    '자사 모든 프로그램 License 시스템 적용',
                    'License 발급 프로세스 안정화',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'FlexLM '],
            },
        ],
    }


]

const ExpesEG = [
    {
        company : 'Pentacube',
        roles : [
            'Software Developer', 'Tech Leader', 'Project Leader',
        ],
        enterDate : '2017.03',
        resignDate : '',
        works : [
            'Circuit Design Solution Project Leader (CubicLDRC) / Project Leader ',
            'SMT Solution Design and Development (CubicSMT) / Tech Leader',
            'Loading CAD and Building data structures (ODB++, Gerber, Cadence Extracta, Neutral) / Developer',
            'Development of CAD Drawing Verification Solution (DRC) (132) / Developer, Project Managing',
            'Deploying a FlexLM License System / Developer',
        ],

        projects : [
            {
                name : 'LDRC Solution Reversion',
                desc : 'Schemetic verification solution reversion',
                date : '22/03 ~ ',
                actions : [
                    'Management of project calendar',
                    'Improvement of solution UX/UI',
                    'Developing a Schemetic Verification Rule Manager',
                ],
                results : [],
                skills :[ 'C#', '.NET', 'WPF', 'MVVM', 'ReactiveUI', 'DependencyProperty', 'Schemetic', 'EDIF'],
            },
            {
                name : 'SkiaSharp CAD Canvas',
                desc : 'Development of SkiaSharp based CAD Canvas and Geometry structure',
                date : '22/03 ~ 22/06 (4 months)',
                actions : [
                    'Development of CAD Canvas based on SkiaSharp',
                    'Development of Geometry Structure based on SkiaSharp (Line, Arc, Circle, Rectange, Polygon)',
                ],
                results : [
                    'Apply 2D data optimization Canvas ( Resolve overspec of 3D OpenGL )',
                    'Optimizing CAD functionality in SMT',
                ],
                skills :[ 'C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'ReactiveUI', 'Prism', 'IoC', 'SkiaSharp', 'PCB', 'Gerber', 'SMT', 'Manufacturing'],
            },
            {
                name : 'Gerber, Neutral Importing',
                desc : 'Analysis of Gerber File Format and Neural File Format and Construction of Data Structure Construction',
                date : '21/06 ~ 21/08 (3 months)',
                actions : [
                    'Development of Gerber File Analysis and Load Function (RS-274X)',
                    'Development of Neural File Analysis and Load Function (Mentro Graphics)',
                ],
                results : [
                    'Increasing program loadable file types (Prev : ODB++, Cadence Extracta / Add : Gerber, Neutral)',
                    'Expansion of business area by adding SMT process drawing format',
                ],
                skills :['C#', '.NET', 'WPF', 'Gerber', 'Neutral', 'PCB', 'SMT', 'Manufacturing'],
            },
            {
                name : 'SMT Solution',
                desc : 'Automation Solution for SMT',
                date : '21/03 ~ 21/06 (4 months)',
                actions : [
                    'Project Tech Leader',
                    'Design of Solution-wide architecture',
                    'Building an IoC-based module structure',
                    'Construction of Facade pattern based functional montrol module (Controller)',
                    'Configuration of MVVM pattern based views'
                ],
                results : [
                    'Development of new field solutions (add product line)',
                    'Achievement the highest pay of performance in company',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'ReactiveUI', 'Prism', 'IoC', 'Plugin', 'PCB', 'SMT', 'Manufacturing'],
            },
            {
                name : 'Pentacube DFE, DFM Rule pack',
                desc : 'Development of commercialized DFE / DFM package.',
                date : '20/10 ~ 21/02 (4 months)',
                actions : [
                    'Development of Public DFM Rules',
                    'Development of Public DFE Rules',
                ],
                results : [
                    'Development of generic rule package product(Expand sales area)',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM', 'DFE'],
            },
            {
                name : 'Strip DRC & Interfacing',
                desc : 'Building architecture of array PCB and Development of DRC rules for SK Hynix',
                date : '20/03 ~ 20/08 (6 months)',
                actions : [
                    'Development of DRC rules (15 types)',
                    'Importing array PCB files',
                    'Building an array CAD data structure',
                ],
                results : [
                    'Build an array of solutions (expand sales, marketing)',
                ],
                skills :[ 'C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'Cadence Allregro', 'Cadence Extracta', 'ODB++'],
            },
            {
                name : 'Business Automation for Hyundai Mobis',
                desc : 'Development of DRC Rule for Hyundai Mobis and PCB comparing solution',
                date : '19/05 ~ 20/02 (10 months)',
                actions : [
                    'Automation of Hyundai motors HKMC (46 types)',
                    'Development of PCB comparing solution',
                ],
                results : [
                    'Opportunity to enter the automotive EDA industry',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM',],
            },
            {
                name : 'Cadence Extracta Importing',
                desc : 'Extracting CAD information and Building data architecture by using Cadence Extracta',
                date : '19/03 ~ 19/04 (2 months)',
                actions : [
                    'Extracting CAD information by cadence extracta',
                    'Building CAD data architecture from the extracted information',
                ],
                results : [
                    'Ability to load Cadence files directly without using ODB++',
                    'Improve drawing import speed (50% less time)' 
                ],
                skills :['C#', '.NET', 'WPF', 'Cadence Allregro', 'Cadence Extracta', 'ODB++'],
            },
            {
                name : 'Automation works for SK Hynix Module',
                desc : 'Automation the PCB verification process of SK Hynix Module team',
                date : '18/03 ~ 18/06 (4 months)',
                actions : [
                    'Communicate directly with customers and manage projects',
                    'PCB Checklist Automation (13 types of DFM)',                    
                ],
                results : [
                    'Achieving Customer MBO (received thanks mail)',
                    'Expand sales to other departments',
                    'Customer regularization (maintenance contract in progress)',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM',],
            },
            {
                name : 'Samsung NW DFM / DFE',
                desc : 'Automation the PCB verification process of Samsung NW',
                date : '17.10 ~ 18.03 (6 months)',
                actions : [
                    'Automate PCB Checklist',
                    'Development of 6 types of DFM and 24 types of DFE',
                    'Maintenance and Improvement of Existing Deployment Products',
                ],
                results : [
                    'Reduce verification time (more than 10 minutes ⇒ less than 2 minutes)',
                    'Automate all items',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'MVVM', 'PCB', 'DRC', 'DFM', 'DFE',],
            },
            {
                name : 'FlexLM License System',
                desc : 'FlexLM License API application, modularization, and deployment system establishment',
                date : '17.06 ~ 17.12 (6 months)',
                actions : [
                    'Creating a .NET-based FlexLM Module',
                    'Development of License Issuance Utility for Issuer',
                    'Apply and stabilize the license issuance process',                    
                ],
                results : [
                    'Apply license systems to all of products',
                    'Stabilize the licensing process',
                ],
                skills :['C#', '.NET', 'WPF', 'Infragistics', 'FlexLM '],
            },
        ],
    }
]