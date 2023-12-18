import {server} from '@app/mocks/server'; // Adjust the path as needed

// import '@testing-library/jest-dom';
import '@testing-library/react-native/extend-expect';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
