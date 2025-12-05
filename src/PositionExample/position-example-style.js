import styled from "styled-components";

export const PositionExampleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .box {
    position: relative;
    background-color: white;
    text-align: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    padding: 0.8rem;
    border-radius: 10px;
    z-index: 2;
  }

  .box__content {
    position: relative;
    padding: 1rem;
    text-align: center;
    background-color: pink;
    border-radius: 10px;
    width: 230px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }

  .circular__parent {
    display: flex;
    justify-content: center;
  }

  .circle {
    height: 60px;
    width: 60px;
    border-radius: 50%;
    border: 3px solid aqua;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
  }

  .value {
    font-size: 2rem;
    font-weight: bold;
  }

  .name {
    font-size: 1rem;
    color: #555;
  }

  .box__color {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 45%;
    background-color: aqua;
    border-radius: 10px;
    z-index: -1;
  }
`;
