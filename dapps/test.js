const accAseed = "coconut there candy below letter aim limb turkey bamboo smart visit uphold prosper error asset"
const accBseed = "awkward essay oak bulb suggest amazing toast cost adapt destroy snap debate oval barely cigar"

it('transfer', async () => {
    console.log(address(accAseed))
    console.log(address(accBseed))

    let tx = await broadcast(transfer({amount: 500000000, recipient: address(accBseed)}, accAseed))
    await waitForTx(tx.id)
    console.log(JSON.stringify(tx))

})

it('data transaction', async () => {
    let aboutObject = {
        "name": 'Alex Ivanov',
        "occupation": "Founder Roga i Kopyta"
    }
    let aboutString = JSON.stringify(aboutObject);
    let tx = await broadcast(data({data: [{key: "web3-online-course-user-data", value: aboutString}]}, accAseed))
    await waitForTx(tx.id)
})

it('transfer transaction from smart account B with blockced transaction to account A (1 waves)', async () => {
    console.log(address(accAseed))
    console.log(address(accBseed))

    let tx = await broadcast(transfer({amount: 100000000, recipient: address(accAseed), fee: 500000}, accBseed))
    await waitForTx(tx.id)
    console.log(JSON.stringify(tx))

})