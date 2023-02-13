import styled from "styled-components";


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  border-radius: 20px;
  transition: all 0.3s;
  object-fit: cover;
  height: ${({ movieHeight }) => (movieHeight ? `520px` : `auto`)};
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  background-color: rgb(13, 195, 240);
  width: 230px;
  height: 30px;
  border-radius:20px;
  border-color: none;
  border-width: 0px;
  font-weight:bold;
  color: white;
  font-size:12px;
  font-family:Arial, Helvetica, sans-serif;
  cursor: pointer;
  :hover{
    opacity: 0.8;
  }
`;
