//Function base component

//pascal casing
function Message() {
  //JSX JavascriptSXML
  const name = "Marco";

  if (name) return <h1>Bye Bye {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
