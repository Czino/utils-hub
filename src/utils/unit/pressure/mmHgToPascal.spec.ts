import { mmHgToPascal } from './mmHgToPascal'

describe('mmHgToPascal', () => {
  it('converts atmosphere to pascal', () => {
    expect(mmHgToPascal(0)).toEqual(0)
    expect(mmHgToPascal(1)).toEqual(133.322)
  })
})
