<template>
    <div id="app-container">
        <app-header />
        <slot />
        <app-footer />
    </div>
</template>

<script>

import AppHeader from 'components/app/header';
import AppFooter from 'components/app/footer';

export default {
    name: 'app-container',

    components: {
        AppHeader,
        AppFooter,
    },
}

</script>
