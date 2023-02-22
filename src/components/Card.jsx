import { EditButton } from "./EditButton";

const style = {
  width: "300px",
  height: "200px",
  margin: "8px",
  borderRadius: "8px",
  backgroundColor: "#e9dbd0",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
};

export const Card = (props) => {
  // props として管理者フラグ受領
  const { isAdmin } = props;

  return (
    <div style={style}>
      <p>ホゲホゲ</p>
      <EditButton isAdmin={isAdmin} />
    </div>
  );
};
