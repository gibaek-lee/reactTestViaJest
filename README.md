# React Component Unit Test
react component unit testing via 'Jest + react-test-renderer' and 'Jest + Enzyme'

## Test code basic structure
<p align="center">
  <img width="45%" src="./image/testCodeBasicStructure.png">
</p>

## Test sequence
- component initial render test: about render()<br>
  1. initial rendering test<br>
  2. initial rendering snapshot matching test<br>
- component function test

## Enzyme?
- Can make react component test code which cannot make by react-test-renderer.
  1. DOM event simulation test(ex. button click, input modify, form submit, etc)
  2. Find the string or props in DOM what you want to test.
  3. Confirm the LifeCycle of react is run, correctly.

## Reference
- Velopert 블로그 - [Jest, Enzyme을 통한 리액트 컴포넌트 유닛 테스팅](https://velopert.com/3587)
- Jest - [Manual about Jest expect](https://jestjs.io/docs/en/expect.html#expectvalue)
- Simple test, Snapshot test - [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
- Snapshot test, DOM event simulation test and specific component test - [Enzyme](https://airbnb.io/enzyme/docs/api/)
