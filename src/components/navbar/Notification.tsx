import styled from "styled-components";

const Image = styled.img`
  cursor: pointer;
`;

interface NotificationProps {
  source: any;
}

const Notification = ({ source }: NotificationProps) => {
  return <Image src={source} alt="notification" />;
};

export default Notification;
