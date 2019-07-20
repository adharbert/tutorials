import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Jest automatically checks for setupTests.js file before running any of the tests.
Enzyme.configure({ adapter: new Adapter() });