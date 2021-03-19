
import styled from 'styled-components';
interface Props {
  onClick: () => void,
  text: string,
  style?: string
}

type ButtonProps = {
  customStyle: string;
};

const CommonButton = styled.button<ButtonProps>`
padding: 3px 5px;
${(props) => props.customStyle};
max-height: 50px;
font-size: 1em;
border: none;
border-radius: 3px;
outline:none;
&:hover {
    background-color: lightgray;}`

const Button: React.FC<Props> = ({
  onClick,
  text,
  style }) => {

  return (
    <CommonButton
      customStyle={style || ""}
      onClick={onClick}
      type="button">{text}</CommonButton>
  )
}

export default Button;