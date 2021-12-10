const { rejects, deepStrictEqual } = require('assert')

const { error } = require('./src/constants')
const File = require('./src/file')

;
(async () => {
  {
    const filePath = './mocks/empty-file-invalid.csv'
    console.log(`Lendo arquivo '${filePath}'.`)
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)

    const result = File.csvToJson(filePath)

    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/four-items-invalid.csv'
    console.log(`Lendo arquivo '${filePath}'.`)
    const rejection = new Error(error.FILE_LENGTH_ERROR_MESSAGE)

    const result = File.csvToJson(filePath)

    await rejects(result, rejection)
  }
  {
    const filePath = './mocks/three-items-valid.csv'
    console.log(`Lendo arquivo '${filePath}'.`)

    const result = await File.csvToJson(filePath)

    const expected = [
      {
        "name": "Samuel Ramos",
        "id": 123,
        "profession": "Mobile Developer",
        "birthYear": 1997
      },
      {
        "name": "Ze da Silva",
        "id": 124,
        "profession": "Javascript Developer",
        "birthYear": 1981
      },
      {
        "name": "Fulano Nome",
        "id": 321,
        "profession": ".NET Developer",
        "birthYear": 1971
      }
    ]

    deepStrictEqual(JSON.stringify(result), JSON.stringify(expected))
  }
})()