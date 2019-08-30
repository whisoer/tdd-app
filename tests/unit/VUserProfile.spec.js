jest.mock('@/store/actions')
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Element from 'element-ui'
import VUserProfile from '@/components/VUserProfile'
import user from './fixtures/user'

const localVue = createLocalVue()
localVue.use(Element)

describe('VUserProfile', () => {
    let props

    const build = () => {
        const wrapper = shallowMount(VUserProfile, {
            localVue,
            propsData: props
        })
        return {
            wrapper,
            avatar: () => wrapper.find('.user-profile__avatar'),
            name: () => wrapper.find('.user-profile__name'),
            bio: () => wrapper.find('.user-profile__bio'),
            location: () => wrapper.find('.user-profile__location')
        }
    }

    beforeEach(() => {
        props = {
            user
        }
    })

    it('should renders the component', () => {
        const { wrapper } = build()
        
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should renders main components', () => {
        const { avatar, name, bio, location } = build()

        expect(avatar().exists()).toBe(true)
        expect(avatar().attributes().src).toBe(props.user.avatar_url)

        expect(name().exists()).toBe(true)
        expect(name().text()).toBe(props.user.name)

        expect(bio().exists()).toBe(true)
        expect(bio().text()).toBe(props.user.bio)

        expect(location().exists()).toBe(true)
        expect(location().text()).toBe(props.user.location)
    })
})