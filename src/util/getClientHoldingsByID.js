export function getClientHoldingsByID (clientId) {
    // IMPLEMENT REAL API CALL HERE:
    const fakeDatabase = {
            geraldyeo : {
                assets : [
                    {
                        id: "UID_1",
                        name: "Wine ETF",
                        quantity: 32,
                        type: "token",
                    },
                    {
                        id: "UID_2",
                        name: "VBux Mutual Fund",
                        quantity: 107,
                        type: "token",
                    },
                    {
                        id: "UID_3",
                        name: "Post-Renaissance Technologies",
                        quantity: 100,
                        type: "token",
                    },
                    {
                        id: "UID_4",
                        name: "S&P -500",
                        quantity: 99,
                        type: "token",
                    },
                    {
                        id: "NFT_1",
                        name: "NFT 1",
                        quantity: 122,
                        type: "nft",
                    },
                    {
                        id: "NFT_2",
                        name: "NFT 2",
                        quantity: 1307,
                        type: "nft",
                    },
                    {
                        id: "NFT_3",
                        name: "NFT 3",
                        quantity: 11200,
                        type: "nft",
                    },
                    {
                        id: "NFT_4",
                        name: "NFT 4",
                        quantity: 9129,
                        type: "nft",
                    },
                ],
            },
        };
        
    return fakeDatabase[clientId]["assets"];
}