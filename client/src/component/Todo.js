import React from 'react';
//옹 rsc
//rcc
//커스텀 가능 -> 저녁에 시도
import Todotable from './Todotable';
import styled from "styled-components";
 const Main = styled.main`
 width: 20rem;
 margin: 0 auto;
 `;
const Today = styled.div`


display: flex;
justify-content: flex-end;
  margin: 0 auto;
  color: #aad9ea;
`;

const Todo = () => {
  const td = new Date();
  const month = td.getMonth() + 1;
  const date = td.getDate();


  return (

      <Main>
        <Today>
          date {month} . {date}
        </Today>
        <Todotable />
      </Main>

  );
};

export default Todo;
