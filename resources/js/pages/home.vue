<template>
    <app-container>
        <h1>Eve Market</h1>
    </app-container>
</template>

<script>

import AppContainer from 'components/app/container';

export default {
    name: 'home',

    components: {
        AppContainer,
    },

    mounted() {
        this.$eve.get('ec/marketstat/json?typeid=215').then(function(response) {
            console.log(response);
        });
    },
};

</script>
