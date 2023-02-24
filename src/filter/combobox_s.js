import styled from "styled-components";

export const filterButton = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  width: 323px;
  height: 54px;
  background-color: white;
  display: flex;
  flex-direction: row;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 17px;
  justify-content: space-between;
`;

export const p = styled.p`
  width: 14px;
  height: 11px;
  cursor: none;
  padding-right: 30px;
`;

export const cityTown = styled.div`
  font-family: "Roboto";

  width: 322px;
  height:48px;
  border-top: 1px solid #dcdcdc;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  

  color: #000000;
`;

export const city = styled.p`
  margin-left: 15px;
`;

export const dropdown = styled.div`
  position: absolute;
  width: 324px;
  height: 296px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  background-color: white;
  border-top: none;
`;
