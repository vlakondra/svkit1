import type { LayoutServerLoad } from './$types';

export const load = (async ({params}) => {
    let data1={a: 999}

    console.log('log layout server',params.par, data1)

    return {data1};
}) satisfies LayoutServerLoad;