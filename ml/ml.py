from pprint import pprint

a={
    "33j1MbuVpT64SBwezVNC": [
        {
            "age": 24,
            "budget": 200,
            "family_idx": 3,
            "house_idx": 1,
            "activity_idx": 2,
            "city": 0,
            "rating": 4,
        }
    ],
    "3SVjsRAsK19ovpc4ivnY": [
        {
            "age": 24,
            "budget": 50,
            "family_idx": 2,
            "house_idx": 0,
            "activity_idx": 1,
            "city": 0,
            "rating": 0,
        }
    ],
    "3q27a93eC0db2Jou3lYJ": [
        {
            "age": 47,
            "budget": 150,
            "family_idx": 0,
            "house_idx": 0,
            "activity_idx": 2,
            "city": 0,
            "rating": 0,
        }
    ],
    "4XvajTzM4mwGy9vviJdt": [
        {
            "age": 37,
            "budget": 200,
            "family_idx": 3,
            "house_idx": 1,
            "activity_idx": 1,
            "city": 0,
            "rating": 4,
        }
    ],
    "68Rz7zszu2nPKmRXRbcm": [
        {
            "age": 42,
            "budget": 150,
            "family_idx": 2,
            "house_idx": 1,
            "activity_idx": 2,
            "city": 0,
            "rating": 0,
        }
    ],
    "7CsIL09cMj7zPKf7lmKa": [
        {
            "age": 85,
            "budget": 200,
            "family_idx": 2,
            "house_idx": 1,
            "activity_idx": 3,
            "city": 0,
            "rating": 4,
        }
    ],
    "7z2igKy41Hz190MvVBso": [
        {
            "age": 78,
            "budget": 300,
            "family_idx": 0,
            "house_idx": 1,
            "activity_idx": 0,
            "city": 0,
            "rating": 5,
        }
    ],
    "081pGJp7shzv4GvKn43B": [
        {
            "age": 22,
            "budget": 200,
            "family_idx": 4,
            "house_idx": 0,
            "activity_idx": 0,
            "city": 0,
            "rating": 5,
        }
    ],
    "AQnIs6VNYIZm5U94W82E": [
        {
            "age": 69,
            "budget": 100,
            "family_idx": 4,
            "house_idx": 0,
            "activity_idx": 0,
            "city": 0,
            "rating": 3,
        }
    ],
    "FiKsBfnYJO7sdZfpoYrV": [
        {
            "age": 77,
            "budget": 200,
            "family_idx": 3,
            "house_idx": 1,
            "activity_idx": 3,
            "city": 0,
            "rating": 3,
        }
    ],
    "KEoY7171k5zsgw8Tk5tu": [
        {
            "age": 39,
            "budget": 150,
            "family_idx": 0,
            "house_idx": 0,
            "activity_idx": 2,
            "city": 0,
            "rating": 2,
        }
    ],
    "Kv5s9q6zp8sHVrTVVTVQ": [
        {
            "age": 44,
            "budget": 200,
            "family_idx": 1,
            "house_idx": 0,
            "activity_idx": 2,
            "city": 0,
            "rating": 4,
        }
    ],
    "MNh8r3ybE26S26QEtwhR": [
        {
            "age": 76,
            "budget": 300,
            "family_idx": 0,
            "house_idx": 2,
            "activity_idx": 0,
            "city": 0,
            "rating": 4,
        }
    ],
    "SRfB61r6tY4OvHADv4Ql": [
        {
            "age": 74,
            "budget": 50,
            "family_idx": 3,
            "house_idx": 0,
            "activity_idx": 1,
            "city": 0,
            "rating": 2,
        }
    ],
    "V3FDCZcrLgjQEAH6bNTU": [
        {
            "age": 55,
            "budget": 300,
            "family_idx": 2,
            "house_idx": 0,
            "activity_idx": 2,
            "city": 0,
            "rating": 3,
        }
    ],
    "VF8EBhfcl6t6HZO4MnzG": [
        {
            "age": 41,
            "budget": 100,
            "family_idx": 1,
            "house_idx": 2,
            "activity_idx": 2,
            "city": 0,
            "rating": 2,
        }
    ],
    "VTxTmWOTLtYabgJO6De1": [
        {
            "age": 67,
            "budget": 250,
            "family_idx": 2,
            "house_idx": 1,
            "activity_idx": 0,
            "city": 0,
            "rating": 4,
        }
    ],
    "ZbU2mNChTVmmBHFT0irI": [
        {
            "age": 82,
            "budget": 100,
            "family_idx": 2,
            "house_idx": 2,
            "activity_idx": 3,
            "city": 0,
            "rating": 2,
        }
    ],
    "cZqz0RGaoUKNCWJVCJSN": [
        {
            "age": 50,
            "budget": 100,
            "family_idx": 2,
            "house_idx": 2,
            "activity_idx": 2,
            "city": 0,
            "rating": 1,
        }
    ],
}
mat = []
ans = []
for i in a:
    i = a[i]
    print(i)
    for j in i:
        row = []
        row.append(j["activity_idx"])
        row.append(j["age"])
        row.append(j["budget"])
        row.append(j["city"])
        row.append(j["family_idx"])
        row.append(j["house_idx"])
        mat.append(row)
        ans.append(j["rating"])

print(pprint(mat))
print(ans)
