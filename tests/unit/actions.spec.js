jest.mock('@/api')
import flushPromises from 'flush-promises'
import actions from '@/store/actions'
import api from '@/api'
import userFixture from './fixtures/user'

describe('store actions', () => {
    let commit

    beforeEach(() => {
        commit = jest.fn()
    })

    it('should searchs for user', async () => {
        const expectedUser = 'whisoer'
        const searchSpy = jest.spyOn(api, 'searchUser')

        await actions.SEARCH_USER({ commit }, { username: expectedUser })
        await flushPromises()

        expect(searchSpy).toHaveBeenCalledWith(expectedUser)
        expect(commit).toHaveBeenCalledWith('SET_USER', userFixture)
    })
})
