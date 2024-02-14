import styled from "styled-components";

interface StyledImageProps {
  $width?: string;
  $height?: string;
  $position?: string;
  $zIndex?: number;
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
  $display?: string;
}

export const StyledImage = styled.img<StyledImageProps>`
  width: ${(props) => props.$width || "auto"};
  height: ${(props) => props.$height || "auto"};
  position: ${(props) => props.$position || ""};
  z-index: ${(props) => props.$zIndex};
  top: ${(props) => props.$top};
  right: ${(props) => props.$right};
  bottom: ${(props) => props.$bottom};
  left: ${(props) => props.$left};
  display: ${(props) => props.$display};
`;

export const StyledSmallGoldText = styled.div`
  color: #caa871;
  font-size: 12px;
  @media (max-width: 1020px) {
    font-size: 10px;
  }
`;

interface StyledHoverImageProps {
  width: string;
  height: string;
}

export const StyledHoverImageContainer = styled.div<StyledHoverImageProps>`
  min-width: ${(props) => props.width || "auto"};
  max-height: ${(props) => props.width || "auto"};
  overflow: hidden;
  z-index: 1;
`;

export const StyledHoverImage = styled.img<StyledHoverImageProps>`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.width || "auto"};
  transition: transform 0.5s;
  &:hover {
    transform: "scale(1.15)";
  }
`;

export const StyledInput = styled.input`
  color: #000000;
  font-size: 16px;
  line-height: 16px; /* 100% */
  width: 100%;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  outline: none;
  padding: 5px;
  margin-bottom: 10px;
  &:focus {
    border-bottom: 1px solid #caa871;
  }
`;

// Definicja kolorów
const primary = "#caa871";
const secondary = "#ffdda7";
const white = "#fff";
const gray = "#808080";

export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 5px;
  width: 100%;
`;

export const FormField = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${gray};
  outline: 0;
  color: #36322c;
  font-size: 1.1rem;
  padding: 8px 0 4px;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:focus {
    font-weight: 500;
    border-image: linear-gradient(to right, ${primary}, ${secondary});
    border-image-slice: 1;
  }

  &:required,
  &:invalid {
    box-shadow: none;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
  color: ${gray};
  font-weight: 500;

  ${FormField}:focus ~ & {
    color: ${primary};
  }

  ${FormField}:placeholder-shown ~ & {
    font-size: 1.1rem;
    cursor: text;
    top: 20px;
  }
`;
