import Button from "../components/common/Button";
import Input from "../components/common/Input";
import Title from "../components/common/Title";

const Home = () => {
  return (
    <>
      <Title size="medium">타이틀</Title>
      <Button size="large" scheme="normal">
        버튼
      </Button>
      <Input placeholder="플레이스 홀더" />
      <div>Home body</div>
    </>
  );
};

export default Home;
