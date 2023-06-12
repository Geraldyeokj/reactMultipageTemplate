export function getClientHoldingsByID (clientId, type) {
    // IMPLEMENT REAL API CALL HERE:
    const fakeDatabase = {
            geraldyeo : {
                tokens : [
                    {
                        id: "UID_1",
                        name: "Wine ETF",
                        quantity: 32,
                    },
                    {
                        id: "UID_2",
                        name: "VBux Mutual Fund",
                        quantity: 107,
                    },
                    {
                        id: "UID_3",
                        name: "Post-Renaissance Technologies",
                        quantity: 100,
                    },
                    {
                        id: "UID_4",
                        name: "S&P -500",
                        quantity: 99,
                    },
                ],
                nfts : [
                    {
                        id: "NFT_1",
                        name: "NFT A",
                        quantity: 122,
                    },
                    {
                        id: "NFT_2",
                        name: "NFT B",
                        quantity: 1307,
                    },
                    {
                        id: "NFT_3",
                        name: "NFT C",
                        quantity: 11200,
                    },
                    {
                        id: "NFT_4",
                        quantity: 9129,
                    },
                ],
            },
        };
        
    return fakeDatabase[clientId][type];
}