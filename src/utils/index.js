function getObjectArray(obj) {
  return (
    obj &&
    (Object.prototype.toString.call(obj) === '[object Array]' ||
      Object.prototype.toString.call(obj) === '[object Object]')
  )
}

function clone(obj) {
  var objClone = Array.isArray(obj) ? [] : {}

  if (getObjectArray(obj)) {
    for (var key in obj) {
      if (getObjectArray(obj)) {
        objClone[key] = clone(obj[key])
      } else {
        objClone[key] = obj[key]
      }
    }
  } else {
    objClone = obj
  }

  return objClone
}

var a = {
  1: null,
  2: undefined,
  3: '',
  4: 2,
  5: new Date(),
  12: new RegExp(),
  6: false,
  7: 1.23,
  8: function() {},
  9: [
    1,
    '2',
    {
      age: 12,
      sex: 'woman',
      student: 'class 1'
    }
  ],
  10: {
    1: null,
    2: undefined,
    3: '',
    4: 2,
    5: new Date(),
    12: new RegExp(),
    6: false,
    7: 1.23,
    8: function() {},
    9: [
      1,
      '2',
      {
        age: 12,
        sex: 'woman',
        student: 'class 1'
      }
    ]
  }
}

var b = clone(a)

a[2] = '2'

console.log(a)
console.log(b)
