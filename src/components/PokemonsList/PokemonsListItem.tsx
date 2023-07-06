export interface PokemonsListItemProps {
  name: string;
}

export default function PokemonsListItem({ name }: PokemonsListItemProps) {
  return <div>{name}</div>;
}
