import type { LayoutLoad } from './$types';

export const load:LayoutLoad = (async (p) => {
    let data = await p.data;
    console.log('log layout.ts')
    console.log(p.data)

    let pp = p.params.par
    console.log(p.params.par)

    let data2 = {b:777}

    return {data,
         data2, pp};
});