import styled from "styled-components";

export const StyledNewsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StyledNews = styled.div`
  display: flex;
  flex-direction: column;
  width: 1020px;
  margin-top: 50px;
`;

export const StyledNewsType = styled.div`
  padding-left: 20%;
  color: #c28721;
  font-family: Roboto;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 20px 0;
  transform: translateX(-10%);
`;

export const StyledNewsTitleContainer = styled.div`
  display: flex;
  transform: translateX(-10%);
`;

export const StyledNewsDateConainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: end;
  align-items: start;
`;
export const StyledOneLatestDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: #caa871;
  padding: 8px 12px;
  border-radius: 10px;
  margin-right: 20px;
  z-index: 2;
`;

export const StyledOneLatestDay = styled.div`
  color: #fff;
  font-family: "Jost";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
`;

export const StyledNewsTitle = styled.h2`
  color: #0c0c0c;
  font-family: Jost;
  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.96px;
`;

export const StyledHeaderPhoto = styled.img`
  width: 100%;
  margin-top: 50px;
`;

export const StyledNewsContent = styled.div`
  color: #696969;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  margin-top: 50px;
  width: 900px;
  align-self: center;
`;
