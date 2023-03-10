/**
 * Generated by orval v6.11.1 🍺
 * Do not edit manually.
 * JSON Placeholder API
 * See https://jsonplaceholder.typicode.com/
 * OpenAPI spec version: 1.0.0
 */
import {
  rest
} from 'msw'
import {
  faker
} from '@faker-js/faker'

export const getGetPostsMock = () => (Array.from({ length: faker.datatype.number({ min: 1, max: 10 }) }, (_, i) => i + 1).map(() => ({id: faker.datatype.number({min: undefined, max: undefined}), userId: faker.datatype.number({min: undefined, max: undefined}), title: faker.random.word(), body: faker.random.word()})))

export const getGetPostMock = () => ({id: faker.datatype.number({min: undefined, max: undefined}), userId: faker.datatype.number({min: undefined, max: undefined}), title: faker.random.word(), body: faker.random.word()})

export const getPostsMSW = () => [
rest.get('*/posts', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetPostsMock()),
        )
      }),rest.get('*/posts/:id', (_req, res, ctx) => {
        return res(
          ctx.delay(1000),
          ctx.status(200, 'Mocked status'),
ctx.json(getGetPostMock()),
        )
      }),]
