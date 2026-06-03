import styled from "styled-components";

export function Contact({ column, items }) {
    let Tag = styled.div`
        display: grid;
        grid-column: ${column};
        grid-template-rows: auto 1fr ;
        grid-template-columns: ${(props) => {

            let count = props.columnCount;
            let result = '';
            let i = 0;

            for (i = 0; i < count; i++) {
                result += '1fr ';
            }

            return result;

        }};
    `;

    let idx = 1;

    return (
        <Tag columnCount={items.length}>
            {
                items.map(item => Icon(idx++, item))
            }
        </Tag>
    )
}

function Icon(column, item) {

    let Tag = styled.div`
        grid-column: ${(props) => props.column};
        text-align: center;
        height: auto;

        &:hover{  
            background-color : darkgray;
            color : white;
        }
    `

    const Img = styled.img`
        width: 40px;
        text-align: center;
    `

    const Desc = styled.div`
        font-size: 10px;
    `;

    const onClick = () => {
        window.open(item.link, '_blank');
    }

    return (
        <Tag column={column} onClick={onClick}>
            <Img src={item.icon} />
            <Desc>{item.name}</Desc>
        </Tag>
    );
}