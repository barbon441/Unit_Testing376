import IndexPage from 'src/pages/IndexPage.vue'
import { shallowMount } from '@vue/test-utils'

describe('IndexPage', () => {
  it('ตรวจสอบชื่อ (fristName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h1')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('วรเดช')
  })
  it('ตรวจสอบนามสกุล (secondName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h2')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('ปิ่นทอง')
  })
  it('ตรวจสอบรหัสนักศึกษา (StudentId)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h3')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('6604101376')
  })
  it('ตรวจสอบชื่อเล่น (NickName)', () => {
    const wrapper = shallowMount(IndexPage)
    let header = wrapper.find('.htmlClass h4')
    expect(header.exists()).toBe(true)
    expect(header.text())
      .toBe('บอล')
  })
})
