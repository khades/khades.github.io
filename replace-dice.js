const { readFile, writeFile } = require("fs/promises")
const process = require("process")
const path = require("path")
const source = process.argv[2]
const destination = path.resolve(process.argv[3])

const replaceMap = ["+", "-", " ", "0", "1", "2", "3", "4", "5", "6"]

async function replaceDice() {
    const file = await readFile(source, { encoding: "utf-8" });
    const result = replaceMap.reduce((prev, token) => {
        return prev.replaceAll(`[${token}]`, token)
    }, file)
    await writeFile(destination, result)
}

replaceDice()