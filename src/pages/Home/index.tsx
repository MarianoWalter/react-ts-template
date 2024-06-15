import type { FC } from 'react';
import Button from '../../components/Button';

const HomePage: FC = () => {
  return (
    <div className="m-2">
      <h3 className="text-lg font-bold mb-2">Buttons test</h3>

      <div className="flex gap-2">
        <Button color="black">Test black Button</Button>
        <Button color="white">Test white Button</Button>
        <Button color="blue">Test blue Button</Button>
        <Button color="green">Test green Button</Button>
        <Button color="orange">Test orange Button</Button>
        <Button color="red">Test red Button</Button>
      </div>
    </div>
  );
};

export default HomePage;
