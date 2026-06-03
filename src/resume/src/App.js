import './App.css';
import { Title } from './components/common/title/title';
import { Introduce } from './components/common/introduce/introduce';
import { Experiences } from './components/common/experience/experience';
import { Skill } from './components/common/skill/skill';
import { useState } from "react";
import styled from 'styled-components';

function App() {
  let Tag = styled.div`
    display: grid;
    grid-template-columns: 1fr 800px 1fr;
    margin-bottom: 200px;
  `

  let Body = styled.div`
    grid-column: 2;
  `

  let LanguageTag = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    text-align: right;
  `

  let Language = styled.div`
    grid-column: 2;
    width: fit-content;
    padding: 5px;
    
    &:hover{  
        background-color : darkgray;
        color : white;
    }
  `;

  const korean = 'Korean';
  const english = 'English';

  const [lang, setLang] = useState(korean);
  const [displayLang, setDisplayLang] = useState(english);

  const onClick= () => {
      setLang(lang == korean ? english: korean);
      setDisplayLang(lang == korean ? korean: english);
  }


  return (
    <Tag>
      <Body>
        <LanguageTag>
          <Language onClick={onClick}>{displayLang}</Language>
        </LanguageTag>
        <Title lang={lang} />
        <Introduce lang={lang} />
        <Experiences lang={lang}/>
        <Skill />
      </Body>
    </Tag>
  );
}

export default App;
