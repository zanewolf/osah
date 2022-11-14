// loadingScreen.js
import styled from "styled-components";

const Screen = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  opacity: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  margin:auto;
  animation: fade 0.4s ease-in forwards;
  background: white;

  @keyframes fade {
    0% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Circle = styled.div`
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background: #ccc;
  border: 5px solid ${props => props.backgroundColor};
  border-radius: 50%;
  overflow: hidden;
`

const Wave = styled.div`

  position: relative;
  width: 100%;
  height: 100%;
  background: ${props => props.backgroundColor};
  border-radius: 50%;
  box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);

&:before,
&:after
{
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: 0;
  left: 50%;
  transform: translate(-50%, -75%);
}
&:before{
  border-radius: 45%;
  background: rgba(255, 255, 255, 1);
  animation: animate 5s linear infinite;
}
&:after{
  border-radius: 40%;
  background: rgba(255, 255, 255, .5);
  animation: animate 10s linear infinite;
}
@keyframes animate{
  0%{
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100%{
    transform: translate(-50%, -75%) rotate(360deg);
  }

`
const Balls = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .ball {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: black;
    margin: 0 6px 0 0;
    animation: oscillate 0.7s ease-in forwards infinite;
  }

  .one {
    animation-delay: 0.5s;
  }
  .two {
    animation-delay: 1s;
  }
  .three {
    animation-delay: 2s;
  }

  @keyframes oscillate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(20px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

let paletteColors=['#351431','#823c3a','#f5a578',
    '#002d50', '#01778c', '#52b69a','#818588']

const LoadingScreen = () => {

    let backgroundColor = paletteColors[Math.floor(Math.random() * paletteColors.length)];

    return (
        <Screen>
            <Circle backgroundColor = {backgroundColor}>
                <Wave backgroundColor = {backgroundColor}/>
            </Circle>
        </Screen>
        // <Screen>
        //     {/*<div className={'text-black text-4xl'}>*/}
        //     {/*    <p> ~ Fetching Latest Data ~ </p>*/}
        //     {/*</div>*/}
        //     <Balls>
        //         <div className="ball one"></div>
        //         <div className="ball two"></div>
        //         <div className="ball three"></div>
        //     </Balls>
        // </Screen>
    );
};

export default LoadingScreen;