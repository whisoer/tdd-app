import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import Element from 'element-ui'
import VUserSearchForm from '@/components/VUserSearchForm'

const localVue = createLocalVue()
localVue.use(Element)

describe('VUserSearchForm', () => {
    const build = () => {
        const options = { localVue }
        const wrapper = shallowMount(VUserSearchForm, options)
        const wrapperMounted = mount(VUserSearchForm, options)
        return {
            wrapper,
            wrapperMounted,
            input: () => wrapper.find('.search-form__input'),
            inputMounted: () => wrapperMounted.find('input'),
            button: () => wrapperMounted.find('button')
        }
    }

    it('should renders the component', () => {
        const { wrapper } = build()
        expect(wrapper.html()).toMatchSnapshot()
    })

    it('should renders main child components', () => {
        const { input, button } = build()

        expect(input().exists()).toBe(true)
        expect(button().exists()).toBe(true)
    })

    it('should calls "submitted" event when submitting form', () => {
        const expectedUser = 'whisoer'
        const { wrapperMounted, inputMounted, button } = build()

        inputMounted().element.value = expectedUser
        inputMounted().trigger('input')

        button().trigger('click')
        button().trigger('submit')
    
        expect(wrapperMounted.emitted().submitted[0]).toEqual([expectedUser])
    })
})