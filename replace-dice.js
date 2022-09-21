const fs = require("fs")
const process = require("process")
const path = require("path")
const source = process.argv[2]
const destination = path.resolve(process.argv[3])
console.log(destination)


const replaceMap = ["+", "-", " ", "0", "1", "2", "3", "4", "5", "6"]

async function replaceDice() {
    const file = await fs.promises.readFile(source, {encoding: "utf-8"});
    const result = replaceMap.reduce((prev, token) => {
        return prev.replaceAll(`[${token}]`, token)
    }, file)
    await fs.promises.writeFile(destination, result)
}

replaceDice()