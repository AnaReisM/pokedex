import * as S from "./Sidebar.styled";

type Props = {
  types: string[];
};

const Sidebar = ({ types }: Props) => {
  return (
    <S.Aside>
      <S.List>
        <S.ItemList>
          <S.Button>All</S.Button>
        </S.ItemList>
        {types.map((item) => (
          <S.ItemList>
            <S.Button>{item}</S.Button>
          </S.ItemList>
        ))}
      </S.List>
    </S.Aside>
  );
};

export default Sidebar;
