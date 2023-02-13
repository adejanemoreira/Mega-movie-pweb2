import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  height: 70px;
  color: #000;
  background: linear-gradient(
      to bottom,
    //   #000 100%,
    //   #000 100%
    ),
    url(${({ image }) => image}), color: #000;;
`;

export const Content = styled.div`
    position: relative;
    max-width: var(--maxWidth);
    width: 76%;
    height: 45px;
    color: red;
    border-left-style: groove;
    border-left-color: #209cee;
    border-left-width: 7px;
    border-bottom: solid 5px #209cee;
    border-radius: 5px;

    img{
        position: absolute;
        left: 17px;
        top: 10px;
        width: 25px;
        filter: invert(100%);
    }

    input{
        font-size: var(--fontMedium);
        margin: 3px 0;
        padding: 0 0 0 60px;
        width: 95%;
        height: 40px;
        border: 0;
        background: transparent;
        color: #000;
        font-weight: bold;
        ::-webkit-input-placeholder {
            color: #000;
          }

        :focus{
            outline: none;
        }
    }
`;