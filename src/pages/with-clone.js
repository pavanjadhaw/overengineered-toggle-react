import Flex from '../components/flex';
import Toggle from '../components/toggle-with-clone';

function Index() {
  return (
    <Flex>
      <Toggle>
        <Toggle.Button />
        <Toggle.On>I am on!</Toggle.On>
        <Toggle.Off>I am off!</Toggle.Off>
      </Toggle>
    </Flex>
  );
}

export default Index;
