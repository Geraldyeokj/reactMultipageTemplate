export default function getClientTranscationsByID (clientId) {
    // IMPLEMENT REAL API CALL HERE:
    const fakeDatabase = {
            geraldyeo : {
                transactions : [
                    {
                        id: "TRANS_001",
                        assetId: "UID_1",
                        asset: "Wine ETF",
                        quantity: 32,
                        recipient: "1KJ2J3K4K12K",
                        date: "17th May 2023",
                        type: "token",
                    },
                    {
                        id: "TRANS_002",
                        assetId: "UID_2",
                        asset: "VBux Mutual Fund",
                        quantity: 107,
                        recipient: "4F2FF24F23121",
                        date: "17th May 2023",
                        type: "token",
                    },
                    {
                        id: "TRANS_003",
                        assetId: "UID_3",
                        asset: "Post-Renaissance Technologies",
                        quantity: 100,
                        recipient: "4F2FF24F23121",
                        date: "17th May 2023",
                        type: "token",
                    },
                    {
                        id: "TRANS_004",
                        assetId: "UID_4",
                        asset: "S&P -500",
                        quantity: 99,
                        recipient: "4F2FF24F23121",
                        date: "17th May 2023",
                        type: "token",
                    },
                    {
                        id: "TRANS_005",
                        assetId: "NFT_1",
                        asset: "NFT 1",
                        quantity: 122,
                        recipient: "4F2FF24F23121",
                        date: "17th May 2023",
                        type: "nft",
                    },
                    {
                        id: "TRANS_006",
                        assetId: "UID_1",
                        asset: "Wine ETF",
                        quantity: 32,
                        recipient: "AFASF1K4K12K",
                        date: "24th May 2023",
                        type: "token",
                    },
                    {
                        id: "TRANS_007",
                        assetId: "UID_1",
                        asset: "Wine ETF",
                        quantity: 32,
                        recipient: "1231J3K4K12K",
                        date: "27th May 2023",
                        type: "token",
                    },
                ],
            },
        };
        
    return fakeDatabase[clientId]["transactions"];
}