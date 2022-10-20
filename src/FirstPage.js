import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';




const FirstPage = (props) => {
  const [submited, setSubmited]= useState(false) 

  const submitHandler = () => {
    if(props.number > 0){
      setSubmited(true);
    }
  }
  
  const navigate = useNavigate()
    useEffect(() => {
      if(submited){
        navigate('submited')
        
      }
      
    }, [submited, props.number, navigate]  )
  

    return (
        <Wrapper>
        <div>
          <CircleForStar>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
            <path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 
            0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
          </CircleForStar>
            <Header>
              How did we do?
            </Header>
            <Paragraph>
              Please let us know how we did with your support request. 
              All feedback is appreciated to help us improve our offering!
            </Paragraph>
            <ButtonsRow>
              <ButtonCircles onClick={() => props.setNumber(1)} isChosen={props.number === 1}>1</ButtonCircles>
              <ButtonCircles onClick={() => props.setNumber(2)} isChosen={props.number === 2}>2</ButtonCircles>
              <ButtonCircles onClick={() => props.setNumber(3)} isChosen={props.number === 3}>3</ButtonCircles>
              <ButtonCircles onClick={() => props.setNumber(4)} isChosen={props.number === 4}>4</ButtonCircles>
              <ButtonCircles onClick={() => props.setNumber(5)} isChosen={props.number === 5}>5</ButtonCircles>

            </ButtonsRow>

            <Submit onClick={submitHandler}>SUBMIT</Submit>


        </div>
      </Wrapper>





      );
}
 
export default FirstPage;

const Wrapper = styled.div`
 
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
  border-radius: 15px;
  padding : 32px;
  @media (min-width: 768px) {
   
  }
`


const CircleForStar = styled.div`
  display: flex;
  align-items:  center;
  justify-content: center;
  background: #262E38;
  width: 40px;
  height: 40px;
  border-radius:50%;
  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`

const Header = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #FFFFFF;
  margin-bottom:10px;
  @media (min-width: 768px) {
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
  }
`

const Paragraph = styled.p`
  width: 279px;
  height: 66px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #969FAD;
  margin-bottom: 24px;
  @media (min-width: 768px){
    font-size: 15px;
    line-height: 24px;  
    width: 340px;
    height: 72px;
  }
`

const ButtonsRow = styled.div`
  display: flex;
  gap:18px;
  @media (min-width: 768px) {
   gap: 21px;
   margin-top:24px ;
  }
`

const ButtonCircles = styled.button`
  background: ${(props) => props.isChosen ? ' #FC7614' : '#262E38 ' };
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: ${(props) => props.isChosen ? '#FFFFFF' : '#7C8798'}; 
  @media (min-width: 768px) {
    width: 51px;
    height: 51px;
    font-size: 16px;
    line-height: 24px;
  }
  :hover{
    background: #7C8798;
    color: #FFFFFF;
  }
`


const Submit = styled.button`
  background: #FC7614;
  border-radius: 22.5px;
  width: 279px;
  height: 45px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 1.86667px;
  color: #FFFFFF;
  border:none;
  margin-top: 36px;
  @media (min-width: 768px) {
    width: 341px;
    height: 45px;
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 2px;
  }
  :hover{
    background: #FFFFFF;
    color: #FC7614;
  }
`