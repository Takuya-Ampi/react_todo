import { React } from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              {/* 関数に引数を渡すときはアロー関数を使う */}
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
