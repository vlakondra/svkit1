// import type { PageLoad } from './$types';
// import { read } from '$app/server';
// import txtfile from '$lib/testfile.txt';

// import somefile from './static/testfile.txt';// тоже ОК

// import {parseQuestions } from '$lib/helper/QuestBuilder'
// import qText from './static/pyquest.txt?raw';

// export const load = (async () => {
//     try {

//         let res = parseQuestions(qText)
//         console.log(res)

//         const asset = read(txtfile)
//         const text = await asset.text();
//         return { text,res };
//     } catch (e) {
//         console.log('Ошибка:', e)
//     }
// }) 