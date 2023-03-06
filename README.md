# batch-2---assignment-5---play-with-redux-toolkit-Ahsan-Ullah1871

এসাইনমেন্ট এ যা যা করতে হবেঃ
✓ এই এসাইনমেন্টটি শুধুমাত্র redux toolkit দিয়ে করতে হবে। এজন্য যেভাবে এই মডিউলে vanilla node js প্রোজেক্টে @reduxjs/toolkit প্যাকেজ install করে প্রোজেক্টটি দেখানো হয়েছে, সেভাবেই আপনারা একটি প্রজেক্ট সেটআপ করে নিবেন। কোনো প্রকার UI based framwork দিয়ে করা যাবে না।

✓ আমাদের দেয়া api থেকে একটি Object আপনাকে async thunk function লিখে fetch করে নিয়ে আসতে হবে। প্রতিটি রিকুয়েস্টে আলাদা আলাদা একটি Object পাবেন।

API - http://localhost:9000/videos
✓ এই Object এর tags নামে একটি প্রোপার্টি আছে যেখানে কিছু tag আছে। এই tag গুলো ব্যবহার করে আরো একটি async thunk dispatch করতে হবে যেটি সার্ভার থেকে search করে রিলেটেড ভিডিও গুলো নিয়ে আসে। যেমনঃ

http://localhost:9000/videos?tags_like=javascript&tags_like=react
✓ উপরের API থেকে যেই Array of Object পাবেন, সেই Object গুলোর ভেতরে views নামে একটি Property থাকবে, সেই property এর ভিত্তিতে Object গুলো সাজিয়ে Console এ লগ করতে হবে। যেগুলোর ভিউ বেশি থাকবে সেগুলো প্রথমে দেখাবে, এবং সব শেষে কম যেটি সেটি থাকবে।

✓ Console এ লগ করার জন্যে অবশ্যই redux-logger এই middleware টি ব্যবহার করতে হবে।

✓ মনে রাখবেন, একবার node application run করে দিলেই দুটি API request sequentially পর পর রান করতে হবে অর্থাৎ প্রথম রিকুয়েস্টে যেই ট্যাগ গুলো পাবো সেই ট্যাগ দিয়ে ‘tags_like’ সার্চ দিয়ে বাকি রিলেটেড ভিডিও গুলো নিয়ে আসতে হবে।
