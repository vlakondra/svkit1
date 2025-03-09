import type { PageLoad } from './$types';

export const load = (async () => {
    const homePageData:{val:number} ={val:345}
    return {data:homePageData};
}) satisfies PageLoad;