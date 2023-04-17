import React, { useEffect } from "react";
import { useLayoutEffect } from "react";
import { useState } from "react";

const Test = () => {
  const [state, setState] = useState([
    { id: 12, username: "balu", greeting: "hello" },
    { id: 13, username: "saty", greeting: "hy" },
    { id: 14, username: "bot", greeting: "by" },
  ]);

  useLayoutEffect(() => {
    // ;
  }, []);

  //   useEffect(()=>{
  //       console.log(state);
  //   })
  const handleDelete = (id) => {
    console.log(id);
    console.log(state[0].id);

    setState(state.filter((key) => key.id !== id));
    // setState(["nice"]);
  };
  //   return (
  //     <table>
  //       <tbody>{state}</tbody>
  //     </table>
  //   );
  return (
    <>
      <table>
        <tbody>
          {state.map((key, val) => {
            return (
              <tr key={val} data-id={val}>
                <td>{key.username}</td>
                <td>{key.greeting}</td>
                <td>
                  <button className="btn m-1" onClick={() => handleDelete(key.id)}>
                    delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Test;
