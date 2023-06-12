export function getTokenByUID (uid) {
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
    };
    return fakeDatabase[uid];
}