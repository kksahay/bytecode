# Bytecode
A Leetcode Like App
1. Generate Tokenendpoint : https://dev-test.cimet.io/generate-token
Api-key : 4NKQ3-815C2-8T5Q2-16318-55301
Method: Post
You need to generate a token using the token API. (it will last for 3hrs, check the response and try to reuse the key)
2. Get Products endpoint: https://dev-test.cimet.io/plan-list
Api-key : 4NKQ3-815C2-8T5Q2-16318-55301
Auth-token : {{token generated in previous step}}
Method: Post
Request Body: {"session_id":"eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9"}
Once you have the token, you can access our products.
