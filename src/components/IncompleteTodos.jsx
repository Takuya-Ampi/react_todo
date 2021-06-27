import { React } from "react";

export const InCompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      {incompleteTodos.map((todo, index) => {
        return (
          <div key={todo} className="list-row">
            <li>{todo}</li>
            {/* 関数に引数を渡すときはアロー関数を使う */}
            <button onClick={() => onClickComplete(index)}>完了</button>
            <button onClick={() => onClickDelete(index)}>削除</button>
          </div>
        );
      })}
      <ul></ul>
    </div>
  );
};
