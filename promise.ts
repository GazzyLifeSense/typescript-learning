type ExampleType = Promise<string>

async () => {
    let promise1: ExampleType = await new Promise((resolve)=>{resolve('1')})
}
