export const config = {
  buildings : [
    {
      id  : 1,
      name: '附近的森林',
      type: 'outdoor',
      drop: [
        {
          amount: 2,
          items : [
            {id: 1, ratio: 0.5},
            {id: 3, ratio: 0.5},
          ],
        },
        {
          amount: 2,
          items : [
            {id: 1, ratio: .3},
            {id: 3, ratio: .3},
          ],
        },
      ],
    },
    {
      id      : 2,
      type    : 'carpenter',
      formulas: [
        [],
      ],
    },
  ], // buildings end
  items     : [
    {id: 1, name: '原木'},
    {id: 2, name: '木材'},
    {id: 3, name: '石块'},
    {id: 4, name: '石料'},
  ],
  formulas  : [
    {
      id      : 1,
      type    : 'carpenter',
      name    : '木材',
      level   : 1,
      product : [{id: 2, amount: 1}],
      cost    : [{type: 1, amount: 3}],
      material: [
        {id: 1, amount: 2},
      ],
    },
    {
      id      : 2,
      type    : 'masons',
      level   : 1,
      product : [{id: 4, amount: 1}],
      cost    : [{type: 1, amount: 3}],
      material: [
        {id: 3, amount: 2},
      ],
    },
  ],
  characters: [
    {id: 1, name: 'Sophie'},
  ],
};
export const appRunData = {
  buildings: [
    {
      id       : 1,
      name     : '新世界家具制造',
      level    : 1,
      formulaId: 1,
      managerId: null,
      workers  : [100, 0, 0, 0],
    },
  ],
  employees: [],
};