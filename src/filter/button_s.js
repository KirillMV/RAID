import styled from "styled-components";

export const inputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
  margin-top: 20px;
  margin-bottom: 25px;
`;

export const input = styled.input`
  padding-left: 18px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-sizing: border-box;
  width: 150px;
  height: 54px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &::placeholder {
    font-family: "StratosSkyeng";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 17px;
    color: #d9d9d9;
  }
`;

export const buttonSearch = styled.button`
  background: #d9d9d9;
  border-radius: 4px;
  height: 49px;
  width: 323px;
  border-radius: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 17px;
  color: #000000;
`;
export const buttonHome = styled.button`
  width: 372px;
  height: 49px;
  background: #d9d9d9;
  border-radius: 4px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  margin-top: 35px;
`;

export const funcBox = styled.div`
  padding: 29px 22px;
`;
