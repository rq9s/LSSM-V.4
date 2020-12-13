import { Releasenotes } from '../../../typings/modules/Releasenotes';

const LAST_VERSION_STORAGE_KEY = 'releasenotes_lastVersion';

export default async (LSSM: Vue): Promise<void> => {
    const $m = (key: string, args?: { [key: string]: unknown }) =>
        LSSM.$t(`modules.releasenotes.${key}`, args);
    const notes = Object.entries(
        (await LSSM.$store
            .dispatch('api/request', {
                url: `${LSSM.$store.state.server}releasenotes/${LSSM.$store.state.lang}.json`,
                init: {
                    method: 'GET',
                },
            })
            .then(res => res.json())) as Releasenotes
    ).sort((a, b) => (a[0] > b[0] ? -1 : a[0] < b[0] ? 1 : 0));

    // eslint-disable-next-line no-console
    console.log(notes);

    const openNotes = (): void =>
        LSSM.$modal.show(
            () =>
                import(
                    /* webpackChunkName: "releasenotes/releasenotes" */ './releasenotes.vue'
                ),
            { notes },
            { name: 'releasenotes', height: 'auto' },
            {
                async 'before-close'() {
                    // await LSSM.$store.dispatch('storage/set', {
                    //     key: LAST_VERSION_STORAGE_KEY,
                    //     value: notes[0]?.version,
                    // });
                },
            }
        );

    LSSM.$store
        .dispatch('addMenuItem', $m('name').toString())
        .then(element => (element.onclick = openNotes));

    openNotes();

    // LSSM.$store
    //     .dispatch('storage/get', { key: LAST_VERSION_STORAGE_KEY })
    //     .then(key => (key || 0).toString() < notes[0]?.version && openNotes());
};
