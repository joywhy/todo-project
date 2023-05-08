import React, { useState } from 'react';
import styled from 'styled-components';
import { CiStop1, CiSquareCheck } from 'react-icons/ci';
const data = [
  {
    content: '6시에 멋있게 퇴실외치기',
    key: 0,
    checked: true,
  },
  {
    content: '간지나게 숨쉬기',
    key: 1,
    checked: false,
  },
  {
    content: '',
    key: 2,
    checked: false,
  },
  {
    content: '',
    key: 3,
    checked: false,
  },
  {
    content: '',
    key: 4,
    checked: false,
  },
  {
    content: '',
    key: 5,
    checked: false,
  },
  {
    content: '',
    key: 6,
    checked: false,
  },
];



const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const Table = styled.table`
  width: 100%;
  height: auto;
  margin: 0 auto;
  border-top: 4px double #aad9ea;
  border-bottom: 3px solid #aad9ea;
  border-collapse: collapse;
  // 계속 컴포넌트를 만들어야 하나
`;
const Tr = styled.tr`
  width: 100%;
  height: 2rem;
`;
const Td = styled.td`
  border-top: 2px solid #aad9ea;
  width: 1.5rem;
`;

const ContentTd = styled(Td)`
  border-left: 1px solid #b54155;
  font-size: 10px;
`;
const Input = styled.input`
  border: none;
  width: 15rem;
`;

const Todotable = () => {
  const [dataa, setdataa] = useState(data);
console.log(dataa);
  
  const checkedHandler = (idx,checked) => {

   let copydata = [...dataa];
    let newdata = copydata.map((el,i)=>{
      let newel = {...el};
      if(idx===i){
        return {
          ...newel, 
          "checked": checked
        }
      }else{
        return newel;
      }
    });


    setdataa(newdata)  ;
  };

  const handler = (idx, event) => {
    console.log(idx);
    if (event.key == 'Enter') {
      let copydata = [...dataa];
      let newdata = copydata.map((el,i)=>{
        let newel = {...el};
        if(idx===i){
          
          return {
            ...newel, 
           "content": event.target.value,
          }
        }else{
          return newel;
        }
      });
  
  
      setdataa(newdata)  ;
    }
  };
  return (
    <Container>
      <Table>
        <tbody>
          {dataa.map((el, idx) => (
            <Tr key={idx}>
              {el.checked ? (
                <Td>
                  <CiSquareCheck
                    onClick={() => {
                      checkedHandler(idx,false);
                    }}
                  />
                </Td>
              ) : (
                <Td>
                  <CiStop1 onClick={() => {
                      checkedHandler(idx,true);
                    }} />
                </Td>
              )}
              <ContentTd>
                <Input
                  type="text" defaultValue={el.content}
                  onKeyPress={(event) => {
                    handler(idx, event);
                  }}
                />
              </ContentTd>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Todotable;
