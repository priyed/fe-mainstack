import styled from "styled-components";

const Image = styled.img`
  cursor: pointer;
`;

interface ChatsProps {
  source: any;
}
const Chats = ({ source }: ChatsProps) => {
  return <Image src={source} alt="chats" />;
};

export default Chats;
