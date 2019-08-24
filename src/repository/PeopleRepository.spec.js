import peopleRepository from './PeopleRepository';
import axios from 'axios'

jest.mock('axios', () => ({ get: jest.fn() }));


describe('PeopleRepository', () => {
    it('should get people by name', async () => {
        let expectedResult = [{
            login: '@fulano',
            picture: 'asdkh89389dh23ud3d9u3ho2d89237498237492023ud023udj23oid3208du23do23',
            name: 'fulano'
        }];
        axios.get.mockResolvedValue(expectedResult);
        const result = await peopleRepository.getByName('john');
        expect(result).toBe(expectedResult);
    });

    it('should get people by name', async () => {
        let expectedResult = [{
            login: '@fulano',
            picture: 'asdkh89389dh23ud3d9u3ho2d89237498237492023ud023udj23oid3208du23do23',
            name: 'fulano'
        }];
        axios.get.mockResolvedValue(expectedResult);
        await peopleRepository.getByName('john');
        expect(axios.get).toBeCalledWith("https://44ys6nth5i.execute-api.us-east-2.amazonaws.com/default/onthefly", {"params": {"userName": "john"}});
    })
});