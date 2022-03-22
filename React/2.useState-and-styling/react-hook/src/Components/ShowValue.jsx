/* 
=>ways to handle click event 
1. directly add callack function to button and modify previous value of state based on function of button

2. create separate functions for each button and call as per button function

3. create a common single add function that will accept a value to add
3.1 from increment button it will accept +1
3.2 from decrement button it will accept -1
3.3 from double button it will accept current value and add it to current state value
3.3.1 so the value will get double

4. we can create a button component and pass props and text to it

5. create array of objects for button text and value to be passed
*/

import styled from "styled-components";

const ShowValueContainer = styled.div``;

const Button = ({ num, text, handleClick }) => {
  return <button onClick={() => handleClick(num)}>{text}</button>;
};

const ButtonArray = [
  {
    text: "Increment",
    val: 1,
    key: 1,
  },
  {
    text: "Decrement",
    val: -1,
    key: 2,
  },
  {
    text: "Double",
    val: "*2",
    key: 3,
  },
];

export const ShowValue = ({ val, setValue }) => {
  const handleClick = (add) => {
    setValue(val + add);
  };

  return (
    <>
      <ShowValueContainer>
        <p>{val}</p>

        {/* 1 */}
        {/* <button onClick={() => setValue((prev) => prev + 1)}>Increment</button>
        <button onClick={() => setValue((prev) => prev - 1)}>Decrement</button>
        <button onClick={() => setValue((prev) => prev * 2)}>Double</button> */}

        {/* 3 */}
        {/* <button onClick={() => handleClick(1)}>Increment</button>
        <button onClick={() => handleClick(-1)}>Decrement</button>
        <button onClick={() => handleClick(val)}>Double</button> */}

        {/* 4 */}
        {/* <Button text={"Increment"} num={1} handleClick={handleClick} />
        <Button text={"Decrement"} num={-1} handleClick={handleClick} />
        <Button text={"Double"} num={val} handleClick={handleClick} /> */}

        {/* 5 */}
        {/* {ButtonArray.map((item) => (
          <Button
            key={item.key}
            text={item.text}
            num={item.val === "*2" ? val : item.val}
            handleClick={handleClick}
          />
        ))} */}

        {/* 6 */}
        {ButtonArray.map((item) => (
          <button
            key={item.key}
            onClick={() => handleClick(item.val === "*2" ? val : item.val)}
          >
            {item.text}
          </button>
        ))}
      </ShowValueContainer>
    </>
  );
};
