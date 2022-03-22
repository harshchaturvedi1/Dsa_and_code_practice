import styled from "styled-components";

const InputBox = styled.input``;

export const Input = ({ val, setValue }) => {
  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };
  return (
    <>
      <InputBox value={val} type="number" onChange={handleChange} />
    </>
  );
};
