export function getAssetInfoByUID (uid) {
    // IMPLEMENT REAL API CALL HERE:
    const fakeDatabase = {
        UID_1 : {
            name: "Wine ETF",
            price: 97.32
        },
        UID_2 : {
            name: "VBux Mutual Fund",
            price: 102.12
        },
        UID_3 : {
            name: "Post-Renaissance Technologies",
            price: 7.35
        },
        UID_4 : {
            name: "S&P -500",
            price: 97.10
        },
        NFT_1 : {
            name: "NFT 1",
            price: 9127.32
        },
        NFT_2 : {
            name: "NFT 2",
            price: 1102.12
        },
        NFT_3 : {
            name: "NFT 3",
            price: 712.35
        },
        NFT_4 : {
            name: "NFT 4",
            price: 917.10
        },
    };
    return fakeDatabase[uid];
}