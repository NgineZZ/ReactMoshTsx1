interface Props {
  CartItemCounts: number;
}

const NavBar = ({ CartItemCounts }: Props) => {
  return <div>NavBar: {CartItemCounts}</div>;
};

export default NavBar;
