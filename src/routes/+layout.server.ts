import type { LayoutServerLoad } from './$types';

interface dataint {
    val:number
}

export const load:LayoutServerLoad = (async () => {
    const rootData:dataint={val:789}

    return {rootData};
});


