import "./questions.css";

type question = {
  q1: string;
  q2: string;
};

export function Questions({ q1, q2 }: question) {

  function Choice(){
    
  }

  return (
    <>
      <div className="questions">
        <div className="q1" onClick={() => alert("a")}>
          <div className="qContainer">{q1}</div>
        </div>
        <div className="q2">
          <div className="qContainer">{q2}</div>
        </div>
      </div>
    </>
  );
}
