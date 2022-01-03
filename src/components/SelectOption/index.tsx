import * as C from "./styles";

type Props = {
  title: string;
  description: string;
  icon: string;
  selected: boolean;
  onClickLevel: () => void;
};

export default function SelectOption({
  title,
  description,
  icon,
  selected,
  onClickLevel,
}: Props) {
  return (
    <C.Container selected={selected} onClick={onClickLevel}>
      <C.Icon>{icon}</C.Icon>
      <C.Info>
        <C.Title>{title}</C.Title>
        <C.Description>{description}</C.Description>
      </C.Info>
    </C.Container>
  );
}
