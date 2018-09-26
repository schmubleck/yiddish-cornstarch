import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// necessary to use enzyme with jest
configure({ adapter: new Adapter() });
