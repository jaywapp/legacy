// Common
export function Common( lang ){
    let language = lang ?? 'Korean'

    if(language == 'English'){
        return CommonEg;
    }
    else{
        return CommonKr;
    }
}

const CommonKr = {
    name : '박준영',
    birth : '1991.08.16',
    Year : 7,
    job : 'Solution Software Developor',
    keywords : [
        'C#', '.NET', 'WPF', 'EDA', 'CAD', 'PCB', 'Manufacturing'
    ]
}

const CommonEg = {
    name : 'Junyoung Park',
    birth : '1991.08.16',
    Year : 7,
    job : 'Solution Software Developor',
    keywords : [
        'C#', '.NET', 'WPF', 'EDA', 'CAD', 'PCB', 'Manufacturing'
    ]
}