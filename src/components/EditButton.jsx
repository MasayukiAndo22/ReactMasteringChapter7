// 
import { useContext } from "react";

// 作成したContext を import
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px"
};

export const EditButton = (props) => {
  const { isAdmin } = props;
  
  // useContext の引数に参照する Context を指定する
  const contextValue = useContext(AdminFlagContext);
  console.log(contextValue);

  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
