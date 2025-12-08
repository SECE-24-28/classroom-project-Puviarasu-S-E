import styled from "styled-components";

export const TrustedByStyle = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 40px;
    font-weight: 700;
  }

  .parent {
    display: flex;
    justify-content: space-evenly;
    gap: 40px;
    flex-wrap: wrap;
  }

  .child {
    position: relative;
    width: 250px;
    height: 200px;
    background: white;
    border-radius: 15px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
    text-align: center;
    padding-top: 60px;
  }

  /* bottom colored border */
  .child::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    border-radius: 0 0 15px 15px;
    z-index: -1;
  }

  .turquoise::after {
    background: #00c7c7;
  }

  .blue::after {
    background: #01b7ff;
  }

  .orange::after {
    background: #f5a623;
  }

  .red::after {
    background: #ff3b3b;
  }

  /* Icon circle */
  .icon-circle {
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    font-size: 30px;
  }

  .numbers {
    font-size: 38px;
    font-weight: 700;
    color: #555;
  }

  .details {
    font-size: 18px;
    font-weight: 500;
    color: #666;
  }
`;
