const { useState } = React;

function App() {
  const [expression, setExpression] = useState("0");
  const [answer, setAnswer] = useState("0");

  const display = (symbol) => {
    const count = expression.replace("=", "").replace(/x/g, "*");

    expression.includes("=")
      ? setExpression(eval(count) + symbol)
      : setExpression((prev) => prev + symbol);
  };

  const calculate = () => {
    const count = expression.replace(/x/g, "*");
    setAnswer(eval(count));
    setExpression(expression + "=");
  };

  return (
    <div id="App">
      <div id="totalDisplay">
        <input
          id="expression"
          type="text"
          value={expression}
          placeholder={0}
          disabled
        ></input>
        <input
          id="display"
          type="text"
          value={answer}
          placeholder={0}
          disabled
        ></input>
      </div>

      <button
        id="clear"
        onClick={() => {
          setExpression("");
          setAnswer("");
        }}
      >
        AC
      </button>
      <button id="divide" onClick={() => display("/")} className="bc-gray">
        /
      </button>
      <button id="multiply" onClick={() => display("x")} className="bc-gray">
        x
      </button>

      <button id="seven" onClick={() => display("7")} className="bc-dark">
        7
      </button>
      <button id="eight" onClick={() => display("8")} className="bc-dark">
        8
      </button>
      <button id="nine" onClick={() => display("9")} className="bc-dark">
        9
      </button>
      <button id="subtract" onClick={() => display("-")} className="bc-gray">
        -
      </button>

      <button id="four" onClick={() => display("4")} className="bc-dark">
        4
      </button>
      <button id="five" onClick={() => display("5")} className="bc-dark">
        5
      </button>
      <button id="six" onClick={() => display("6")} className="bc-dark">
        6
      </button>
      <button id="add" onClick={() => display("+")} className="bc-gray">
        +
      </button>

      <button id="one" onClick={() => display("1")} className="bc-dark">
        1
      </button>
      <button id="two" onClick={() => display("2")} className="bc-dark">
        2
      </button>
      <button id="three" onClick={() => display("3")} className="bc-dark">
        3
      </button>

      <button id="equals" onClick={() => calculate()}>
        =
      </button>
      <button id="zero" onClick={() => display("0")} className="bc-dark">
        0
      </button>
      <button id="decimal" onClick={() => display(".")} className="bc-dark">
        .
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
